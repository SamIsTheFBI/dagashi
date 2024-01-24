import { ThemeProvider } from "next-themes"
import { Footer, Header } from "~/components"
import { Inter as FontSans } from "next/font/google"
import { cn } from "~/utils/shadcn"
import NextProgress from "next-progress"
import { SessionProvider } from "next-auth/react";
import { type Session } from "next-auth";
import { type ReactNode } from "react"
import { ClerkProvider } from "@clerk/nextjs"

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  adjustFontFallback: false,
})

type RootLayoutProps = {
  children: ReactNode;
  session?: Session | null;
}

const RootLayout = ({ children, session }: RootLayoutProps) => {
  return (
    <ClerkProvider>
      <SessionProvider session={session}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}>
            <NextProgress delay={300} options={{ showSpinner: false }} color={"#E11D48"} height={"3px"} />
            <Header />
            <main className="main-height">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </SessionProvider>
    </ClerkProvider>
  )
}

export default RootLayout
