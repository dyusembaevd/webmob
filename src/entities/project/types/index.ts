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
  deadline: string;
  description: string;
  logo_url: string;
  max_price: number;
  min_price: number;
  requirements: Requirements;
  specification: string;
  title: string;
}
