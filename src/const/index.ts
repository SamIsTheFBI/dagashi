import { IoFastFood, IoHome, IoPersonCircle } from "react-icons/io5";
import { HiShoppingBag } from "react-icons/hi2";

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
    href: "/profile",
    label: "Profile",
    icon: IoPersonCircle,
  },
]

export {
  routes,
}
