import { useMutation } from "@tanstack/react-query";

import { createShippingAddress } from "@/actions/create-address";

export const getCreateShippingAddressMutationKey = () =>
  ["create-shipping-address"] as const;

export const useCreateShippingAddress = () => {
  return useMutation({
    mutationKey: getCreateShippingAddressMutationKey(),
    mutationFn: createShippingAddress,
  });
};

