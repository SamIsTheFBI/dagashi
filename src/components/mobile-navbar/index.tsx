import Link from "next/link";
import { useRouter } from "next/router";
import { routes } from "~/const";
import { NavRoute } from "~/types";

export default function MobileNavbar() {
  const router = useRouter()
  return (
    <div className="fixed bottom-0 left-0 z-[] w-full h-16 border-t border-gray-200 md:hidden bg-background">
      <div className="grid h-full max-w-lg grid-cols-4 mx-auto">
        {routes.map((route: NavRoute) => (
          <Link href={route.href} type="button" className="inline-flex flex-col items-center justify-center px-2 hover:bg-secondary dark:hover:bg-gray-800 group">
            <span className={router.pathname === route.href ? "text-primary" : "text-foreground"}>
              <route.icon size={24} />
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}
