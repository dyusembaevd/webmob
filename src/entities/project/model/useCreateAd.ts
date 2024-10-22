// entities/project/model/useCreateAd.ts
import { config } from "@/config";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";

import { CreateAdRequest } from "../types";

interface CreateAdResponse {
  guid: string;
}

export const useCreateAd = (
  options?: UseMutationOptions<CreateAdResponse, Error, CreateAdRequest>,
) => {
  return useMutation<CreateAdResponse, Error, CreateAdRequest>({
    mutationFn: async (data: CreateAdRequest) => {
      const response = await fetch(`${config.API_BASE}/merchants/mvp/ads`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.status === 201) {
        const responseData = await response.json();
        return responseData as CreateAdResponse;
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to create ad");
      }
    },
    ...options,
  });
};
