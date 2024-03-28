import React from "react";
import { Header } from "../Navbar";
import { Footer } from "../Footer";
import { LoginHeader } from "../LoginHeader";
import { ToggleModeButton } from "../../Buttons";
interface ILayout {
  children: React.ReactNode;
  showHeader?: boolean;
  showFooter?: boolean;
  showContent?: boolean;
}

export const Layout = ({
  children,
  showFooter = true,
  showHeader = true,
  showContent = false,
}: ILayout) => (
  <div className="bg-primary min-h-[100vh]" id="root">
    <div className="hidden">
      <ToggleModeButton />
    </div>
    {showHeader && showContent ? (
      <LoginHeader />
    ) : showHeader && !showContent ? (
      <Header />
    ) : null}

    <div className="container pb-20 ">{children}</div>
    <div className="absolute bottom-0 w-full">{showFooter && <Footer />}</div>
  </div>
);
