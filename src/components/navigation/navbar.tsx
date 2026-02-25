"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Home,
  Calendar,
  FileText,
  Award,
  MapPin,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

type NavItemProps = {
  icon: React.ReactNode;
  label: string;
  href: string;
  setOpen: (open: boolean) => void;
};

const NavItem = ({ icon, label, href, setOpen }: NavItemProps) => {
  const handleClick = () => {
    // Close the drawer first
    setOpen(false);
    
    // Wait for drawer animation to complete before scrolling (300ms)
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        // Get the element's position
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset;

        // Use window.scrollTo for better iOS compatibility
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });

        // Fallback for older iOS versions that don't support smooth behavior
        if (!('scrollBehavior' in document.documentElement.style)) {
          window.scrollTo(0, offsetPosition);
        }
      }
    }, 350);
  };

  return (
    <button
      onClick={handleClick}
      className="flex items-center gap-3 rounded-lg bg-st-darker px-4 py-3 text-st-text transition-all hover:bg-st-red hover:text-white"
    >
      {icon}
      <span className="font-medium">{label}</span>
    </button>
  );
};

export function NavigationBar() {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  // Hide navbar on event detail pages and aimit page
  if (pathname.startsWith("/event/") || pathname === "/aimit") {
    return null;
  }

  return (
    <div className="fixed right-4 top-4 z-5000">
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
          <Button className="glow-red-pulse rounded-xl border-2 border-st-red bg-st-black text-st-text hover:bg-st-red hover:text-white">
             <Menu className=" inline-block" />
          </Button>
        </DrawerTrigger>
        <DrawerContent className="border-st-red bg-st-dark">
          <DrawerClose className="absolute right-4 top-4 text-st-text hover:text-st-red">
            <X size={24} />
          </DrawerClose>
          <div className="mx-auto w-full max-w-sm p-4">
            <DrawerHeader className="flex-center flex-col gap-2">
              <DrawerTitle className="glow-red font-benguiat text-4xl text-white">
                EPITOME
              </DrawerTitle>
              <DrawerDescription className="text-st-text-dim">
                
              </DrawerDescription>
            </DrawerHeader>

            <div className="flex flex-col gap-3 py-4">
              <NavItem
                setOpen={setOpen}
                icon={<Home />}
                label="Home"
                href="#home"
              />
              <NavItem
                setOpen={setOpen}
                icon={<Calendar />}
                label="Events"
                href="#events"
              />
              <NavItem
                setOpen={setOpen}
                icon={<FileText />}
                label="Rules"
                href="#rules"
              />
              <NavItem
                setOpen={setOpen}
                icon={<Clock />}
                label="Schedule"
                href="#schedule"
              />
              {/*<NavItem
                setOpen={setOpen}
                icon={<Award />}
                label="Sponsors"
                href="#sponsors"
              />*/}
              <NavItem
                setOpen={setOpen}
                icon={<MapPin />}
                label="Location"
                href="#map"
              />
              <NavItem
                setOpen={setOpen}
                icon={<MapPin />}
                label="Register"
                href="#register"
              />
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
