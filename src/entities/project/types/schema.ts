// entities/project/types/schema.ts
import { z } from "zod";

export const RequirementItemSchema = z.object({
  type: z.string(),
  value: z.string(),
  description: z.string().optional(),
});

export const RequirementsSchema = z.object({
  ages: z.array(RequirementItemSchema).optional(),
  content_types: z.array(RequirementItemSchema).optional(),
  genders: z.array(RequirementItemSchema).optional(),
  languages: z.array(RequirementItemSchema).optional(),
  price_types: z.array(RequirementItemSchema).optional(),
  social_networks: z.array(RequirementItemSchema).optional(),
  work_types: z.array(RequirementItemSchema).optional(),
});

export const CreateAdRequestSchema = z.object({
  banner_url: z.string().url(),
  bonus: z.string(),
  category_ids: z.array(z.number().int()),
  city_ids: z.array(z.number().int()),
  deadline: z.string(), // or use z.date().transform(...)
  description: z.string(),
  logo_url: z.string().url(),
  max_price: z.number(),
  min_price: z.number(),
  requirements: RequirementsSchema,
  specification: z.string(),
  title: z.string().optional(),
});
