'use client';
import Link from 'next/link';

const Header = () => {
  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 py-5 shadow-md bg-primary/80">
      <nav className="container flex items-center justify-between">
        <Link href="/">
          <h1 className="!mb-0 font-mono">PPT Deals</h1>
        </Link>
        <ul className="flex gap-4 font-sans">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <Link href={href}>
                <span className="text-xl hover:text-saddlebrown">{label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
