export const formatCentsToUSD = (cents: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format((cents / 100) / 5);
};

// it will convert cents to dollars and then divide by 5