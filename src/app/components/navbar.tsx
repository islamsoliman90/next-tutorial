import React from "react";
import Link from "next/link";
import Search from "./search";
export default function Navbar() {
  return (
    <nav className="bg-dark- dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <h1 className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="text-white">
          Home
        </Link>
        <Search />
      </h1>
    </nav>
  );
}
