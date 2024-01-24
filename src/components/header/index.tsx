import Link from "next/link";
import { Container, ProfileButton } from "..";
import { routes } from "~/const";
import { Button } from "../ui/button";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { BiMenuAltLeft } from "react-icons/bi";
import Image from "next/image";

export default function Header() {
  const { setTheme } = useTheme()
  return (
    <header className="sm:flex sm:justify-between py-2 px-4 border-b">
      <Container>
        <div className="relative px-3 sm:px-6 lg:px-8 flex h-11 items-center justify-between w-full">
          <div className="flex items-center">
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src="https://www.svgrepo.com/download/244394/french-fries.svg"
                height={44}
                width={44}
                alt="logo"
                className="size-11 "
              />
              <h1 className="text-xl font-bold">
                Dagashi
              </h1>
            </Link>
          </div>
          <nav className="mx-6 flex items-center space-x-4 lg:space-x-6 hidden md:block">
            {routes.map((route: { href: string, label: string }, id: number) => (
              <Button asChild variant="ghost" key={id}>
                <Link
                  key={id}
                  href={route.href}
                  className="text-sm font-medium transition-colors"
                >
                  {route.label}
                </Link>
              </Button>
            ))}
          </nav>
        </div>
      </Container>
    </header>
  )
}
