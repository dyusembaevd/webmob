export interface Blogger {
  guid: string;
  user_guid: string;
  phone: string;
  status: "created" | "active" | "inactive" | "deleted";
  first_name: string;
  last_name: string | null;
  patronymic: string | null;
  birthdate: string | null;
  avatar_url: string | null;
  email: string | null;
  instagram: string | null;
  instagram_followers: number | null;
  tiktok: string | null;
  tiktok_followers: number | null;
  city_id: string | null;
  price_type: "money" | "barter" | null;
  price: number | null;
  content_language: string | null;
  categories: Category[] | null;
}

export interface Category {
  id: number;
  name: string;
  color: string;
}
