// entities/project/types/schema.ts
import { z } from "zod";

export const RequirementItemSchema = z.object({
  type: z.string(),
  value: z.string(),
  description: z.string().optional(),
});

export const RequirementsSchema = z.object({
  ages: z.array(RequirementItemSchema),
  content_types: z.array(RequirementItemSchema),
  genders: z.array(RequirementItemSchema),
  languages: z.array(RequirementItemSchema),
  price_types: z.array(RequirementItemSchema),
  social_networks: z.array(RequirementItemSchema),
  work_types: z.array(RequirementItemSchema).optional(),
});

export const CreateAdRequestSchema = z.object({
  banner_url: z.string().url().optional(),
  bonus: z.string().optional(),
  category_ids: z.array(z.number().int()),
  city_ids: z.array(z.number().int()),
  deadline: z.string().nullable().optional(),
  description: z.string().optional(),
  logo_url: z.string().url().optional(),
  max_price: z.number(),
  min_price: z.number(),
  requirements: RequirementsSchema,
  specification: z.string().optional(),
  title: z.string().optional(),
});
