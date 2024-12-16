import type { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";
import Header from "@/components/Header";
import FloatingNav2 from "@/components/FloatingNav2";
import { Toaster } from "@/components/ui/toaster"
import { ProfileProvider } from "@/context/ProfileContext";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Febri Rizqi Tahta Nugraha",
  description: "I have a strong passion for IT, developed during my Bachelor's in Computer Engineering at Institute Adhi Tama Surabaya in 2015. I focus on effective communication, critical thinking, and collaboration, aiming to contribute value to every team I work with.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
         
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem
              disableTransitionOnChange
            >
                <ProfileProvider> 
                  <Toaster />
                  <Header />
                  <FloatingNav2 />
                    {children}
                </ProfileProvider>
            </ThemeProvider>
          
      </body>
    </html>
  );
  
}
