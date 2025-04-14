"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Function to handle smooth scrolling to sections with explicit type
  const scrollToSection = (sectionId: string): void => {
    setIsMobileMenuOpen(false); // Close mobile menu if open
    
    // Check if we're on the About page or another page
    if (pathname.includes("/About")) {
      // If on About page, first navigate to home page, then scroll to section
      router.push(`/?scrollTo=${sectionId}`);
    } else {
      // If already on home page, just scroll to the section
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      } else {
        // Try alternative selectors if ID doesn't work
        const altSection = document.querySelector(`[data-section-target="${sectionId}"]`);
        if (altSection) {
          altSection.scrollIntoView({ behavior: "smooth" });
        } else {
          console.log(`Section with ID or data attribute ${sectionId} not found`);
        }
      }
    }
  };

  // Check for URL parameters on page load to handle redirects from About page
  useEffect(() => {
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      const scrollToParam = url.searchParams.get("scrollTo");
      
      if (scrollToParam) {
        // Remove the param from URL without refreshing
        url.searchParams.delete("scrollTo");
        window.history.replaceState({}, "", url.toString());
        
        // Increased delay to ensure the DOM is fully loaded and rendered
        setTimeout(() => {
          const section = document.getElementById(scrollToParam);
          if (section) {
            section.scrollIntoView({ behavior: "smooth" });
          } else {
            // Try alternative selectors if ID doesn't work
            const altSection = document.querySelector(`[data-section-target="${scrollToParam}"]`);
            if (altSection) {
              altSection.scrollIntoView({ behavior: "smooth" });
            } else {
              console.log(`Section with ID or data attribute ${scrollToParam} not found`);
            }
          }
        }, 500); // Increased from 100ms to 500ms
      }
    }
  }, []);

  return (
    <div className="p-5 relative">
      <header
        className={`relative mx-auto max-w-[1400px] rounded-t-[24px] ${isMobileMenuOpen ? " rounded-b-[0px] " : " rounded-b-[24px] "
          } p-[0.7rem] md:bg-transparent bg-[#2CC295] shadow-sm md:shadow-none`}
      >
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/">
                <Image
                  alt="logo"
                  src="assets/marmarlogo.svg"
                  className="block md:hidden"
                  width={63}
                  height={43}
                />
                <Image
                  alt="logo"
                  className="hidden md:block w-[8rem] h-[60px]"
                  src="assets/LogoFull.svg"
                  width={63}
                  height={43}
                />
              </Link>
            </div>

            <nav className="hidden md:block">
              <ul className="flex space-x-8 text-[#000000] items-center">
              <li>
                  <button
                    onClick={() => scrollToSection("our-offering-section")}
                    className="px-3 py-2 rounded-md text-xs font-medium transition-colors cursor-pointer uppercase hover:text-[#2CC295] hover:underline"
                  >
                    Our Offering
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("providers-section")}
                    className="px-3 py-2 rounded-md text-xs font-medium transition-colors cursor-pointer uppercase hover:text-[#2CC295] hover:underline"
                  >
                    FOR EHR COMPANIES
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("insurance-section")}
                    className="px-3 py-2 rounded-md text-xs font-medium transition-colors cursor-pointer uppercase hover:text-[#2CC295] hover:underline"
                  >
                    FOR INSURANCE COMPANIES
                  </button>
                </li>
                <Link
                    href={`/About`}
                    className="px-3 py-2 rounded-md text-xs font-medium transition-colors uppercase hover:text-[#2CC295] hover:underline"
                  >
                    About
                  </Link>
                <li>
                  <div className="relative rounded-md">
                    <a href="https://app.marmar.life/"  target="_blank">
                    <Button className="bg-[#2CC295] hover:bg-[#25A07A] w-full rounded-[3px] transition-colors duration-200 uppercase text-xs">
                      Check Your Medication Now
                    </Button>
                    </a>
                  </div>
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
          className="md:hidden absolute left-5 right-5 top-[100px] z-50 bg-[#2CC295] shadow-lg rounded-b-[24px]"
          style={{
            animation: "slideDown 0.3s ease-out",
          }}
        >
          <div className="container mx-auto px-6 py-8 space-y-6">
            <ul className="space-y-8 text-white">
              <li>
                <button
                  onClick={() => scrollToSection("our-offering-section")}
                  className="block w-full text-white py-3 hover:bg-opacity-80 transition-colors text-left text-xs font-medium uppercase hover:text-[#E8F4F0]"
                >
                  Our Offering
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("providers-section")}
                  className="block w-full text-white py-3 hover:bg-opacity-80 transition-colors text-left text-xs font-medium uppercase hover:text-[#E8F4F0]"
                >
                  FOR EHR COMPANIES
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("insurance-section")}
                  className="block w-full text-white py-3 hover:bg-opacity-80 transition-colors text-left text-xs font-medium uppercase hover:text-[#E8F4F0]"
                >
                  FOR INSURANCE COMPANIES
                </button>
              </li>
              <li>
              <Link
                    href={`/About`}
                    className="px-3 py-3 block rounded-md text-xs font-medium transition-colors uppercase hover:text-[#E8F4F0]"
                  >
                    About
                  </Link>
              </li>
            </ul>
            <a href="https://app.marmar.life/"  target="_blank" className="mt-6 block">
            <Button
              className="w-full bg-[#2CC295] border border-white text-white uppercase text-xs py-5"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Check Your Medication Now
            </Button>
            </a>
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