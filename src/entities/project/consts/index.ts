import { EGender } from "../types";

export const genderLabels: Record<EGender, string> = {
  [EGender.Male]: "Мужской",
  [EGender.Female]: "Женский",
  [EGender.Other]: "Любой",
};
