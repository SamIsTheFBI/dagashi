import Image from "next/image";
import { Skeleton } from "../ui/skeleton";
import { type Category } from "@prisma/client";
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
        className="inline-flex items-center justify-between w-full p-2 text-foreground bg-card-background border border-secondary rounded-lg cursor-pointer dark:border-secondary hover:bg-secondary dark:peer-checked:text-foreground peer-checked:border-primary peer-checked:border-2 peer-checked:font-bold">
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
          <p>
            {cat?.name}
          </p>
        </div>
      </label>
    </div>
  );
};

export default CategoryCard;
