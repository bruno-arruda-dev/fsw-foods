import { Product } from "@prisma/client";

const calculateProductTotalPrice = (product: Product): number => {
  if (product.discountPercentage === 0) {
    return product.price;
  }

  const discount = product.price * (product.discountPercentage / 100);
  return product.price - discount;
};

const formatCurrency = (value: number): string => {
  return `R$${Intl.NumberFormat("pt-BR", {
    currency: "BRL",
    minimumFractionDigits: 2,
  }).format(value)}`;
};

export { calculateProductTotalPrice, formatCurrency };
