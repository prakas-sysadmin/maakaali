import Link from "next/link"

const Header = () => {
  return (
    <header className="bg-gray-800 text-gold-500">
      <nav className="container mx-auto px-6 py-3">
        <ul className="flex justify-center space-x-6">
          <li>
            <Link href="/" className="hover:text-gold-400 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gold-400 transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link href="/gallery" className="hover:text-gold-400 transition-colors">
              Gallery
            </Link>
          </li>
          <li>
            <Link href="/visit" className="hover:text-gold-400 transition-colors">
              Visit
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

