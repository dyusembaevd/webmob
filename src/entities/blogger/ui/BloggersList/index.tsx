"use client";

import { config } from "@/config";
import { City } from "@/features/profile/types";
import { Skeleton } from "@/shared/ui/Skeleton";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { useLocale } from "next-intl";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React, { useCallback, useEffect, useMemo, useRef } from "react";

import { Blogger } from "../../types";
import { BloggerCard } from "../BloggerCard";

const fetchBloggers = async ({
  pageParam = 0,
  locale,
  params,
}: {
  pageParam: number;
  locale: string;
  params: Record<string, string>;
}): Promise<Blogger[]> => {
  const queryParams = new URLSearchParams({
    lang: locale,
    offset: pageParam.toString(),
    limit: "10",
    ...params,
  }).toString();

  const res = await fetch(`${config.API_BASE}/influencers/mvp?${queryParams}`);

  if (!res.ok) {
    throw new Error("Failed to fetch bloggers");
  }
  const data: Blogger[] = await res.json();
  return data;
};

export const BloggersList = () => {
  const searchParams = useSearchParams();
  const locale = useLocale();
  const paramsObj = useMemo(() => {
    const entries = searchParams.entries();
    return Object.fromEntries(entries);
  }, [searchParams]);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    error,
  } = useInfiniteQuery({
    queryKey: ["bloggers", locale, paramsObj],
    queryFn: ({ pageParam = 0 }) =>
      fetchBloggers({ pageParam, locale, params: paramsObj }),
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.length < 10) return undefined;
      return pages.length * 10;
    },
    initialPageParam: 0,
  });

  const observerElemRef = useRef<HTMLDivElement | null>(null);

  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [target] = entries;
      if (target.isIntersecting && hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    },
    [hasNextPage, isFetchingNextPage, fetchNextPage],
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    });
    if (observerElemRef.current) {
      observer.observe(observerElemRef.current);
    }
    return () => {
      if (observerElemRef.current) observer.unobserve(observerElemRef.current);
    };
  }, [handleObserver]);

  if (isLoading)
    return (
      <div className="mx-5 flex flex-col gap-5 pb-[102px] pt-5">
        <Skeleton className="flex h-[353px] w-full flex-col items-stretch justify-start gap-3 rounded-[24px] bg-gray-200 px-4 pb-5 pt-4">
          <Skeleton className="h-[144px] w-full rounded-[16px] bg-gray-300" />
        </Skeleton>
        <Skeleton className="flex h-[353px] w-full flex-col items-stretch justify-start gap-3 rounded-[24px] bg-gray-200 px-4 pb-5 pt-4">
          <Skeleton className="h-[144px] w-full rounded-[16px] bg-gray-300" />
        </Skeleton>
      </div>
    );
  if (error) return <div>Error loading bloggers</div>;

  return (
    <div className="mx-5 flex flex-col gap-5 pb-[102px] pt-5">
      {data?.pages?.map((page, pageIndex) =>
        page.map((blogger) => (
          <BloggerCard key={blogger.guid} blogger={blogger} />
        )),
      )}
      <div ref={observerElemRef} />
      {isFetchingNextPage && (
        <div className="flex w-full items-center justify-center">
          <Image
            quality={100}
            className="animate-spin"
            alt="loader"
            src={"/tmp/loader.png"}
            width={32}
            height={32}
          />
        </div>
      )}
    </div>
  );
};

BloggersList.displayName = "BloggersList";
