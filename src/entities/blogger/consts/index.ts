import { Blogger } from "../types";

export const mockBlogger: Blogger = {
  guid: "b256239e-0d03-4889-a82c-061a31c55112",
  user_guid: "a30a847c-462e-468c-9367-f203085fd1a2",
  phone: "+73231231231",
  status: "created", // Adjust this if needed, e.g., 'active', 'inactive'
  first_name: "Улжан",
  last_name: "Умарова", // Empty string or null, depending on your use case
  patronymic: null,
  birthdate: null, // Assume null, or you can set an ISO date string
  avatar_url:
    "https://s3-alpha-sig.figma.com/img/8d55/aaff/f982d5214a1e2825666b8c08913eddba?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q4uTpONhde5xwlDqWn3TJ5anMe7rvDqu16zIsyYfovFtOEyRnvAQRKtzsgDC8Lyl5CWlNbthBvfe7KTlFiSLD63gOtCJDsNVxBApLtftkshiY8BLWboFI3~eZe4ILXNA3D9psenvma-FYOM63hPTNPv17Tz7uq~5G~e3CglHLpoox7m1X5-02RAdvLdg8yu7PJu3xnhenRlw64~dgntZpHohAQfbf6P1T9MBnrUjrqdX3u7vfq5T8ZN4fGRHEQZH-qgG7XImRSx6Wa2myMvCCRB91u14QDriuLodu7lV2oK-s3~wYwo0NUoX~12UOptStUgfDLEZh6LCH1GGURnesQ__",
  email: null,
  instagram: "ray",
  instagram_followers: 300, // Set a number if available
  tiktok: "temp",
  tiktok_followers: 300,
  city_id: null, // Set a valid city_id if needed
  price_type: null, // Adjust if the blogger has a price type
  price: 5000, // Set a valid price number if needed
  content_language: null, // Add content language if available
  categories: null, // Set an array of categories like ['tech', 'lifestyle']
};
