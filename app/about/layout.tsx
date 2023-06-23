import React from "react";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav>nave about</nav>
      <main>{children}</main>
    </>
  );
}
