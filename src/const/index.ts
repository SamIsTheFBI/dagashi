import { IoFastFood, IoHome } from "react-icons/io5";
import { HiShoppingBag } from "react-icons/hi2";
import { MdDashboard } from "react-icons/md";

const routes = [
  {
    href: "/home",
    label: "Home",
    icon: IoHome,
  },
  {
    href: "/restaurants",
    label: "Restaurants",
    icon: IoFastFood,
  },
  {
    href: "/cart",
    label: "Shopping Bag",
    icon: HiShoppingBag,
  },
  {
    href: "/dashboard",
    label: "Dashboard",
    icon: MdDashboard,
  },
]

export {
  routes,
}
