import { type NextPage } from "next";
import { type AppProps } from "next/app";
import { type ReactElement, type ReactNode } from "react";
import { IconType } from "react-icons/lib";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
}

type NavRoute = {
  href: string;
  label: string;
  icon: IconType;
}

export type {
  NextPageWithLayout,
  AppPropsWithLayout,
  NavRoute,
}
