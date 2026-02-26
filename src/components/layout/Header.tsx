"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Games", path: "/games" },
    { name: "Pricing", path: "/pricing" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 ">
      <div className="container-custom flex justify-between items-center py-4 px-10">
        
        {/* Logo */}
        <Link href="/">
          <Image
            src="/assets/RE-logo.png"
            alt="GameHub Logo"
            width={115}
            height={50}
            className="object-contain"
            priority
          />
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-10 text-white font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`relative transition duration-300 
                ${pathname === link.path 
                  ? "text-blue-400" 
                  : "hover:text-blue-400"}`}
            >
              {link.name}

              {/* Animated underline */}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-blue-500 transition-all duration-300
                  ${pathname === link.path 
                    ? "w-full" 
                    : "w-0 group-hover:w-full"}`}
              />
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}