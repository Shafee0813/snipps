import React from "react"

export default function Layout({children}: Readonly<{children: React.ReactNode}>) {
 return (
  <main className="font-sans flex justify-center items-center">
    {children}
  </main>
 )
}