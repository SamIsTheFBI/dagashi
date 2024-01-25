import NextProgress from "next-progress"
import { type Session } from "next-auth";
import { type ReactNode } from "react"
import { ClerkProvider } from "@clerk/nextjs"

type RootLayoutProps = {
  children: ReactNode;
  session?: Session | null;
}

const BlankLayout = ({ children }: RootLayoutProps) => {
  return (
    <ClerkProvider>
      <NextProgress delay={300} options={{ showSpinner: false }} color={"#E11D48"} height={"3px"} />
      {children}
    </ClerkProvider>
  )
}

export default BlankLayout
