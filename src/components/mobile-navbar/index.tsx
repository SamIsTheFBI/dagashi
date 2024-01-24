import { IoFastFoodOutline, IoHomeOutline, IoPersonCircleOutline } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi2";

export default function MobileNavbar() {
  return (
    <div className="fixed bottom-0 left-0 z-[] w-full h-16 border-t border-gray-200 md:hidden bg-background">
      <div className="grid h-full max-w-lg grid-cols-4 mx-auto">
        <button type="button" className="inline-flex flex-col items-center justify-center px-2 hover:bg-secondary dark:hover:bg-gray-800 group">
          <span className="text-primary dark:text-secondary">
            <IoHomeOutline size={24} />
          </span>
        </button>
        <button type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-secondary dark:hover:bg-gray-800 group">
          <IoFastFoodOutline size={24} />
        </button>
        <button type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-secondary dark:hover:bg-gray-800 group">
          <HiOutlineShoppingBag size={24} />
        </button>
        <button type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-secondary dark:hover:bg-gray-800 group">
          <IoPersonCircleOutline size={24} />
        </button>
      </div>
    </div>
  )
}
