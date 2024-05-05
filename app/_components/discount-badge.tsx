import { ArrowDown } from "lucide-react";
import { Badge } from "./ui/badge";
import { Product } from "@prisma/client";

interface DistountBadgeProps {
  product: Pick<Product, "discountPercentage">;
}

export default function DiscountBadge({ product }: DistountBadgeProps) {
  return (
    <Badge
      variant="destructive"
      className="flex items-center gap-[2px] px-2 py-[2px]"
    >
      <ArrowDown size={12} />

      <span>{product.discountPercentage}%</span>
    </Badge>
  );
}
