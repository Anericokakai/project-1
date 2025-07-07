import Link from "next/link"

export default function NavBar(){
    return (
          <nav className="flex justify-between px-3 py-3 bg-muted">
<Link href={"/"}>
<h1 className="font-bold text-3xl">FCL GYM</h1></Link>
            <div>
              <ul className="flex gap-3">
                <li> <Link href="/team">Team</Link></li>
                <li> <Link href="/about">Abount</Link></li>
                <li> <Link href="/dashboard">Dasboard</Link></li>
              </ul>
            </div>
          </nav>
        
    )
}