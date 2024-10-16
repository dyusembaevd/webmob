"use client";

import { config } from "@/config";
import { Skeleton } from "@/shared/ui/Skeleton";
import { useInfiniteQuery } from "@tanstack/react-query";
import Image from "next/image";
import React, { useCallback, useEffect, useRef } from "react";

import { Blogger } from "../../types";
import { BloggerCard } from "../BloggerCard";

// Define the fetch function with proper typing
const fetchBloggers = async ({ pageParam = 0 }): Promise<Blogger[]> => {
  console.log("Fetching bloggers with offset:", pageParam); // Debug log
  const res = await fetch(
    `${config.API_BASE}/influencers/mvp?lang=ru&offset=${pageParam}&limit=10`,
  );
  if (!res.ok) {
    throw new Error("Failed to fetch bloggers");
  }
  const data: Blogger[] = await res.json(); // Parse the response and ensure it's an array of Blogger objects
  return data;
};

export const BloggersList = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    error,
  } = useInfiniteQuery({
    queryKey: ["bloggers"],
    queryFn: fetchBloggers,
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.length < 10) return undefined; // No more pages if less than 10 bloggers
      return pages.length * 10; // Calculate the next offset based on the current number of pages
    },
    initialPageParam: 0,
  });
  console.log("DATA", data);

  const observerElemRef = useRef<HTMLDivElement | null>(null);

  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [target] = entries;
      if (target.isIntersecting && hasNextPage && !isFetchingNextPage) {
        console.log("Fetching next page..."); // Debug log
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
        <div className="flex w-full items-center justify-center bg-red-400">
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
