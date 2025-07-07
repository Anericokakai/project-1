import Link from 'next/link'
import React from 'react'

function DashNav() {
  return (
    <nav className="flex justify-between px-3 py-3 bg-muted">
    <Link href={"/"}>
    <h1 className="font-bold text-3xl">FCL Dash</h1></Link>
                <div>
                  <ul className="flex gap-3">
                    <li> <Link href="/team">Clients</Link></li>
                    <li> <Link href="/about">Admin</Link></li>
                  </ul>
                </div>
              </nav>
  )
}

export default DashNav
