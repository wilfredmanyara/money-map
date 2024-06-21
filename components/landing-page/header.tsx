"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Logo from "../../public/logo.png";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

const routes = [
  { title: "Features", href: "#features" },
  { title: "Pricing", href: "#pricing" },
  { title: "Testimonials", href: "#testimonials" },
];

const components = [
  {
    title: "Alert Dialog",
    href: "#",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "#",
    description: "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "#",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "#",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "#",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "#",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

const Header = () => {
  const [path, setPath] = useState("#products");
  return (
    <header className="p-4 flex justify-center items-center border-b">
      <Link href="/" className="w-full flex gap-2 justify-left items-center">
        <Image src={Logo} alt="moneyMap Logo" width={150} height={100} />
      </Link>
      <NavigationMenu className="hidden md:block">
        <NavigationMenuList className="gap-6 ">
          <NavigationMenuItem>
            <NavigationMenuTrigger
              onClick={() => setPath("#features")}
              className={cn({
                "dark:text-white/90": path === "#features",
                "dark:text-white": path !== "#features",
                "font-normal": true,
                "text-sm": true,
              })}
            >
              Features
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <span className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
                    MoneyMap
                  </span>
                </li>
                <ListItem href="/" title="Track">
                Simplify budgeting
                </ListItem>
                <ListItem href="/" title="Achieve">
                Set financial goals
                </ListItem>
                <ListItem href="/" title="Analyze">
                Customize financial insights
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger
              onClick={() => setPath("#pricing")}
              className={cn({
                "dark:text-white/90": path === "#pricing",
                "dark:text-white": path !== "#pricing",
                "font-normal": true,
                "text-sm": true,
              })}
            >
              Pricing
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:grid-rows-2">
                <ListItem title="Pro Plan" href="/pro-plan">
                  Advanced financial management for in-depth analysis
                </ListItem>
                <ListItem title="Basic Plan" href="/basic-plan">
                  Essential budgeting tools for individuals and families
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <aside className="flex w-full gap-2 justify-end">
        <Link href={"/basic-plan"}>
          <Button variant="btn-secondary" className="p-1 hidden sm:block">
            Basic Plan
          </Button>
        </Link>
        <Link href={"/pro-plan"}>
          <Button variant="btn-primary" className="whitespace-nowrap">
            Pro Plan
          </Button>
        </Link>
      </aside>
    </header>
  );
};

export default Header;

interface ListItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    title: string;
    children: React.ReactNode;
  }
  
  const ListItem: React.FC<ListItemProps> = ({ className, title, children, ...props }) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <div className={cn("group block select-none space-y-1 font-medium leading-none", className)}>
            <a
              className="text-white text-sm font-medium leading-none"
              {...props}
            >
              <div className="text-white text-sm font-medium leading-none">
                {title}
              </div>
              <p className="group-hover:text-white/70 line-clamp-2 text-sm leading-snug text-white/40">
                {children}
              </p>
            </a>
          </div>
        </NavigationMenuLink>
      </li>
    );
  };
  
  ListItem.displayName = "ListItem";
