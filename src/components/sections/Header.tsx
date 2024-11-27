"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="p-5 relative">
      <header
        className={`relative mx-auto max-w-[1400px] rounded-t-[24px] ${
          isMobileMenuOpen ? " rounded-b-[0px] " : " rounded-b-[24px] "
        } p-[0.7rem] mt-8 shadow-sm bg-gradient-to-r from-[#66B29B] to-[#042222]`}
      >
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
                    className="px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/ourapproach`}
                    className="px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    Our Approach
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/About`}
                    className="px-3 py-2 rounded-md text-sm font-medium transition-colors"
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
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="focus:outline-none"
              >
                {isMobileMenuOpen ? (
                  <X className="text-white w-[34px] h-[34px]" />
                ) : (
                  <Menu className="text-white w-[34px] h-[34px]" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div
          className="md:hidden absolute left-5 right-5 top-[138px] z-50 bg-gradient-to-r from-[#66B29B] to-[#042222] shadow-lg rounded-b-[24px]"
          style={{
            animation: "slideDown 0.3s ease-out",
          }}
        >
          <div className="container mx-auto px-6 py-6 space-y-4">
            <Link
              href={`/About`}
              className="block w-full  text-white py-2 hover:bg-opacity-80 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href={`/ourapproach`}
              className="block w-full  text-white py-2 hover:bg-opacity-80 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Our Approach
            </Link>
            <Link
              href={`/About`}
              className="block w-full  text-white py-2 hover:bg-opacity-80 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              For Health Care Providers
            </Link>
            <Button
              className="w-full bg-gradient-to-b from-[#BFD8B3] to-[#339465]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Check Your Medication
            </Button>
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Header;