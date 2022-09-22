import { NextPage } from "next";
import type { ReactElement } from "react";
import McLayout from "../layouts/mc";
import MainLayout from "../layouts/main";

export type PageWithMainLayoutType = NextPage & { layout: typeof MainLayout };
export type PageWithAdminLayoutType = NextPage & { layout: typeof McLayout };

export type PageWithLayoutType =
  | PageWithMainLayoutType
  | PageWithAdminLayoutType;

export type LayoutProps = ({
  children,
}: {
  children: ReactElement;
}) => ReactElement;

export default PageWithLayoutType;
