import { BsFillPersonFill, BsFillSuitHeartFill } from "react-icons/bs";
import { RiShoppingBagFill } from "react-icons/ri";
import { IoMdHome } from "react-icons/io";
import { MdFastfood } from "react-icons/md";

export default function MobileNavbar() {
  return (
    <div className="fixed bottom-0 left-0 z-50 w-full h-16 border-t border-gray-200 sm:hidden">
      <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
        <button type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
          <div className="text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"><IoMdHome /></div>
        </button>
        <button type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
          <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"><MdFastfood /></span>
        </button>
        <button type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
          <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"><RiShoppingBagFill /></span>
        </button>
        <button type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
          <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"><BsFillPersonFill /></span>
        </button>
      </div>
    </div>
  )
}
