"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="p-5">
      <header className="relative  mx-auto   max-w-[1400px] rounded-[24px] p-[0.7rem] mt-8 shadow-sm bg-gradient-to-r from-[#66B29B] to-[#042222]">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/">
                <Image
                  alt="logo"
                  src="assets/marmarlogo.svg"
                  width={63}
                  height={43}
                />
              </Link>
            </div>

            <nav className="hidden md:block">
              <ul className="flex space-x-8 text-white items-center">
                <li>
                  <Link
                    href={`/About`}
                    className=" px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/ourapproach`}
                    className=" px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    Our Approach
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/About`}
                    className=" px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    For Health Care Providers
                  </Link>
                </li>
                <li>
                  <Button className="bg-gradient-to-b from-[#BFD8B3] to-[#339465]">
                    Check Your Medication
                  </Button>
                </li>
              </ul>
            </nav>
            <div className="md:hidden">
              <Drawer
                open={isMobileMenuOpen}
                onOpenChange={setIsMobileMenuOpen}
              >
                <DrawerTrigger asChild>
                  {isMobileMenuOpen ? (
                    <X className="text-white w-[34px] h-[34px]" />
                  ) : (
                    <Menu className="text-white w-[34px] h-[34px]" />
                  )}
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader>
                    <DrawerTitle>Navigation</DrawerTitle>
                  </DrawerHeader>
                  <div className="grid gap-4 p-4">
                    <DrawerClose asChild>
                      <Link
                        href={`/About`}
                        className="block w-full p-2 text-center hover:text-[#042222]"
                      >
                        About
                      </Link>
                    </DrawerClose>
                    <DrawerClose asChild>
                      <Link
                        href="/ourapproach"
                        className="block w-full p-2 text-center hover:bg-[#042222]"
                      >
                        Our Approach
                      </Link>
                    </DrawerClose>
                    <DrawerClose asChild>
                      <Link
                        href="/ourapproach"
                        className="block w-full p-2 text-center hover:bg-[#042222]"
                      >
                        For Health Care Providers
                      </Link>
                    </DrawerClose>
                    <DrawerClose asChild>
                      <Button className="bg-gradient-to-b from-[#BFD8B3] to-[#339465]">
                        Check Your Medication
                      </Button>
                    </DrawerClose>
                  </div>
                </DrawerContent>
              </Drawer>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
