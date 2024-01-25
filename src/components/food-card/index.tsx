import Image from "next/image";
import { Skeleton } from "../ui/skeleton";

interface FoodCard {
  food: {
    id: number,
    name: string,
    price: number,
    imageUrl?: string | null,
    restaurant?: {
      id: number,
      name: string,
    }
  } | null;
}

const FoodCard: React.FC<FoodCard> = ({ food }) => {
  return (
    <div className="w-full max-sm:max-w-sm max-w-[22rem] bg-card flex p-3 bg-card-background border-2 border-secondary rounded-lg cursor-pointer dark:border-secondary hover:bg-secondary">
      {food?.imageUrl
        ? <div className="size-24 overflow-hidden rounded-lg">
          <Image src={food?.imageUrl} height={128} width={128} alt={food.name} className="object-cover aspect-square" />
        </div>
        : <Skeleton className="aspect-square size-24" />
      }
      <div className="ml-5">
        <h1 className="">{food?.name}</h1>
        <span>$ {food?.price}</span><br />
        <span>{food?.restaurant?.name}</span>
      </div>
    </div>
  )
}

export default FoodCard
