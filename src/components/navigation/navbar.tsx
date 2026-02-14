"use client";

import * as React from "react";
import {
  Menu,
  X,
  Home,
  Calendar,
  FileText,
  Award,
  MapPin,
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
    setOpen(false);
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
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

  return (
    <div className="fixed right-4 top-4 z-5000">
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
          <Button className="glow-red-pulse rounded-xl border-2 border-st-red bg-st-black text-st-text hover:bg-st-red hover:text-white">
            Menu <Menu className="ml-2 inline-block" />
          </Button>
        </DrawerTrigger>
        <DrawerContent className="border-st-red bg-st-dark">
          <DrawerClose className="absolute right-4 top-4 text-st-text hover:text-st-red">
            <X size={24} />
          </DrawerClose>
          <div className="mx-auto w-full max-w-sm p-4">
            <DrawerHeader className="flex-center flex-col gap-2">
              <DrawerTitle className="glow-red font-benguiat text-4xl text-st-red">
                EPITOME
              </DrawerTitle>
              <DrawerDescription className="text-st-text-dim">
                Strange Events Await
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
                icon={<Award />}
                label="Sponsors"
                href="#sponsors"
              />
              <NavItem
                setOpen={setOpen}
                icon={<MapPin />}
                label="Location"
                href="#map"
              />
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
