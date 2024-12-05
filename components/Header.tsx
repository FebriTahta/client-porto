'use client'
import React, { useEffect, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ToggleMode } from "./ToggleMode";
import SearchBox from "./SearchBox";
import Image from "next/image";
import Logo from "@/public/t-logo.png";

interface ListItemProps extends React.ComponentPropsWithoutRef<"a"> {
  className?: string;
  title: string;
  children: React.ReactNode;
  href?: string;
}

const ListItem = ({
  className,
  title,
  children,
  href = "/",
  ...props
}: ListItemProps) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};

ListItem.displayName = "ListItem";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const components: {
    title: string;
    href: string;
    description: string;
  }[] = [
    {
      title: "Playground",
      href: "/playground",
      description:
        "List game that you can top up cash to support and improve your gaming experience",
    },
    {
      title: "Works",
      href: "/works",
      description: "For sighted users to preview content available behind a link.",
    }
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full transition-all duration-300 ${
        isScrolled ? "shadow-md bg-white dark:bg-gray-950" : ""
      } z-50`}
    >
      <div className="container mx-auto lg:px-8 py-2">
        <div className="pl-6 pr-6 pt-2 pb-2 flex justify-between items-center">
          {/* Left side: Logo and Links */}
          <div className="flex items-center gap-6">
            <div className="text-xl font-bold">
              <Link href="/">
                <Image src={Logo} alt="Logo" width={40} height={40} />
              </Link>
            </div>

            <NavigationMenu className="hidden xl:flex md:flex space-x-6">
              <NavigationMenuList className="flex items-center space-x-6">
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link  className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md opacity-50 pointer-events-none"
                            href="/Services"
                            aria-disabled="true"
                          >
                            <Image src={Logo} alt="Logo" width={40} height={40} />
                            <div className="mb-2 mt-4 text-lg font-medium">
                              What I Offer
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              I am open to collaboration opportunities. Lets talk about your IT needs, I will provide a solution
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <ListItem href="/services" title="That I offer">
                        Check here. Some of the services I offer include...
                      </ListItem>
                      <ListItem href="/schedule" title="Schedule">
                        You can schedule a meeting with me here.
                      </ListItem>
                      <ListItem href="/ticket" title="Ticket">
                        send me a ticket when my schedule is full. You can also make a request here
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Project</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
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

                <NavigationMenuItem>
                  <Link href="/profile" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`${navigationMenuTriggerStyle()}`}
                    >
                      Profile
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/article" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`${navigationMenuTriggerStyle()}`}
                    >
                      Article
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right side: Search box and Toggle mode */}
          
          <div className="flex justify-end gap-4">
            <SearchBox />
            <ToggleMode />
          </div>
        </div>
      </div>
    </header>
  );
}
