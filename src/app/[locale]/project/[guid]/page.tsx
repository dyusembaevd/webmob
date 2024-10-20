"use client";

import { config } from "@/config";
import { Blogger } from "@/entities/blogger/types";
import { CategoryBadge } from "@/entities/blogger/ui/CategoryBadge";
import IconFavorite from "@/features/bloggers/ui/IconFavorite";
import { City } from "@/features/profile/types";
import { Link, useRouter } from "@/navigation";
import IconArrowL from "@/shared/assets/icons/icon_arrow-l.svg";
import IconArrowR from "@/shared/assets/icons/icon_arrow-r.svg";
import IconInstagram from "@/shared/assets/icons/icon_instagram_filled.svg";
import IconStatistics from "@/shared/assets/icons/icon_statistics_dark.svg";
import IconTiktok from "@/shared/assets/icons/icon_tiktok_filled.svg";
import IconWallet from "@/shared/assets/icons/icon_wallet.svg";
import { Button } from "@/shared/ui/Button";
import { ReadMore } from "@/shared/ui/ReadMore";
import { Skeleton } from "@/shared/ui/Skeleton";
import { Typography } from "@/shared/ui/Typography";
import { cn } from "@/shared/utils/common";
import { formatFullName } from "@/shared/utils/formatters";
import { Footer } from "@/widgets/Footer";
import { useQuery } from "@tanstack/react-query";
import { useLocale } from "next-intl";
import Image from "next/image";
import React, { useState } from "react";

export default function BloggerByIdPage({
  params,
}: {
  params: { id: string };
}) {
  const router = useRouter();
  const locale = useLocale();

  return <div className="flex w-full flex-col ">Project page</div>;
}
