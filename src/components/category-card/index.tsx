import Image from "next/image";
import Link from "next/link";

import { Card, CardContent, CardFooter } from "~/components/ui/card";

import { Skeleton } from "../ui/skeleton";
import { Category } from "@prisma/client";
import { useCategoryStore } from "~/store";

interface CategoryCard {
  cat: Category | null;
}

const CategoryCard: React.FC<CategoryCard> = ({ cat }) => {
  const { setCategoryName } = useCategoryStore()
  return (
    <div>
      <input type="radio" id={cat?.name} name="hosting" value={cat?.name} className="hidden peer" onChange={(e) => setCategoryName(e.target.value)} required />
      <label
        htmlFor={cat?.name}
        className="inline-flex items-center justify-between w-full p-2 text-primary bg-primary-foreground border border-secondary rounded-lg cursor-pointer dark:hover:text-secondary dark:border-secondary dark:peer-checked:text-secondary peer-checked:border-primary peer-checked:border-2 peer-checked:font-bold hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
        <div className="flex flex-col justify-between items-center gap-2 p-3 rounded-lg">
          <div className="size-16 rounded-lg overflow-hidden p-2">
            {cat?.imageUrl
              ?
              <Image
                src={cat.imageUrl}
                alt={cat.name}
                width={256}
                height={256}
                className="object-cover aspect-square"
              />
              :
              <Skeleton className="size-16" />
            }
          </div>
          <p className="">
            {cat?.name}
          </p>
        </div>
      </label>
    </div>
  );
};

export default CategoryCard;
