import Link from "next/link";
import { Container, MobileNavbar } from "..";

export default function Footer() {
  return (
    <footer className="sm:flex sm:justify-between px-4 h-16">
      <Container>
        <MobileNavbar />
        <div className="relative px-3 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between w-full gap-2 py-3 max-md:hidden border-t">
          <Link href="/">
            <h1 className="text-xl font-bold">
              Dagashi
            </h1>
          </Link>
        </div>
      </Container>
    </footer>
  )
}
