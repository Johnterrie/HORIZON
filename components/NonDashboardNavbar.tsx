"use client"

import Link from "next/link"

const NonDashboardNavbar = () => {
  return (
    <div>
      <nav className='nondashboard-layout'>
        <div className="nondashboard-navbar__container">
            <Link href="/" className="nondashboard-navbar__brand" >HORIZON</Link>
        </div>
      </nav>
    </div>
  )
}

export default NonDashboardNavbar
