import { Prisma } from "@prisma/client";
import Image from "next/image";
import { calculateProductTotalPrice, formatCurrency } from "../_helpers/price";
import { Badge } from "./ui/badge";
import { ArrowDown } from "lucide-react";
import Link from "next/link";
import { cn } from "../_lib/utils";

interface ProductItemProps {
  product: Prisma.ProductGetPayload<{
    include: {
      restaurant: {
        select: {
          name: true;
        };
      };
    };
  }>;
  className?: string;
}

export default function ProductItem({ product, className }: ProductItemProps) {
  return (
    <Link
      className={cn("w-[150px] min-w-[150px]", className)}
      href={`/products/${product.id}`}
    >
      <div className="h-[250px] w-[150px] min-w-[150px] space-y-2">
        <div className="relative aspect-square w-full">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="rounded-lg object-cover shadow-md"
          />
          <Badge
            variant="destructive"
            className="absolute left-2 top-2 flex items-center gap-[2px] px-2 py-[2px]"
          >
            <ArrowDown size={12} />
            <span>{product.discountPercentage}%</span>
          </Badge>
        </div>

        <div>
          <h2 className="truncate text-sm">{product.name}</h2>
          <div className="flex items-center gap-1">
            <h3 className="font-semibold">
              {formatCurrency(calculateProductTotalPrice(product))}
            </h3>
            {product.discountPercentage > 0 && (
              <span className="text-xs text-muted-foreground line-through">
                {formatCurrency(product.price)}
              </span>
            )}
          </div>
          <span className="block text-xs text-muted-foreground">
            {product.restaurant.name}
          </span>
        </div>
      </div>
    </Link>
  );
}
