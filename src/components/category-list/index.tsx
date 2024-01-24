import { type Category } from "@prisma/client";
import CategoryCard from "../category-card";

interface CategoryListProps {
  categories: Category[] | undefined;
}

const CategoryList: React.FC<CategoryListProps> = ({ categories }) => {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="text-xl font-bold py-3">Categories</div>
      <div className="overflow-auto flex gap-3">
        {categories?.map((cat: Category) => (
          <CategoryCard cat={cat} key={cat.id} />
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
