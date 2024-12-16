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

// Fungsi untuk mendapatkan cookie
const getCookie = (name: string): string | null => {
  const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
  return match ? decodeURIComponent(match[2]) : null;
};

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State untuk login

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 0);
    };

    // Periksa status login dari cookie
    const checkLoginStatus = () => {
      const token = getCookie("jwtToken"); // Ambil token dari cookie
      setIsLoggedIn(!!token); // Jika ada token, anggap sudah login
    };

    checkLoginStatus(); // Panggil saat komponen dimuat
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  // Fungsi login
  const handleLogin = () => {
    window.location.href = "/login"; // Redirect ke halaman login
  };

  // Fungsi logout
  const handleLogout = () => {
    // Hapus cookie dengan token JWT
    document.cookie = "jwtToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    setIsLoggedIn(false);
    window.location.href = "/"; // Redirect ke halaman utama
  };

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
      className={`fixed top-0 left-0 w-full transition-all duration-300 z-50 ${
        isScrolled ? "shadow-md bg-white dark:bg-gray-950" : ""
      }`}
    >
      <div className="container mx-auto lg:px-8 py-2">
        <div className="pl-6 pr-6 pt-2 pb-2 flex justify-between items-center">
          {/* Left side: Logo and Links */}
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <Image
                  src={Logo}
                  alt="Logo"
                  width={40}
                  height={40}
                  className="w-auto h-auto sm:w-10 sm:h-10 md:w-12 md:h-12" // Ukuran responsif
                  priority // Optimalkan logo untuk loading awal
                />
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
                  <Link href="/article" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`${navigationMenuTriggerStyle()}`}
                    >
                      Article
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                {isLoggedIn ? (
                  <NavigationMenuItem>
                    <button
                      className={`${navigationMenuTriggerStyle()}`}
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem>
                    <button
                      className={`${navigationMenuTriggerStyle()}`}
                      onClick={handleLogin}
                    >
                      Login
                    </button>
                  </NavigationMenuItem>
                )}
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
