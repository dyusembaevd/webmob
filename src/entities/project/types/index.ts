import { Category } from "@/entities/blogger/types";
import { City } from "@/features/profile/types";

// entities/project/types/index.ts
export interface RequirementItem {
  type: string;
  value: string;
  description?: string;
}

export interface Requirements {
  ages?: RequirementItem[];
  content_types?: RequirementItem[];
  genders?: RequirementItem[];
  languages?: RequirementItem[];
  price_types?: RequirementItem[];
  social_networks?: RequirementItem[];
  work_types?: RequirementItem[];
}

export interface CreateAdRequest {
  banner_url: string;
  bonus: string;
  category_ids: number[];
  city_ids: number[];
  deadline: string | null;
  description: string;
  logo_url: string;
  max_price: number;
  min_price: number;
  requirements: Requirements;
  specification: string;
  title: string;
}

export interface Project {
  guid: string;
  merchant_guid: string;
  status: string;
  title: string;
  description: string;
  specification: string;
  bonus: string;
  logo_url: string;
  banner_url: string;
  min_price: number;
  max_price: number;
  deadline: string | null;
  requirements: Requirements;
  categories: Category[];
  cities: City[];
}
