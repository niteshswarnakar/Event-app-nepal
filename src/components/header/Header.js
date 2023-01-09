import React from "react";
import Link from "next/link";
import Image from "next/image";

function Header() {
  return (
    <header class="header_section">
      <nav className="topNav">
        <Image
          src={"/assets/firstlogo.png"}
          width={50}
          height={50}
          alt="my logo"
        />
        <ul className="nav-links">
          <li>
            {/* <img src = {}/> */}
            <Link href="/" legacyBehavior>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about_us" legacyBehavior>
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/events" legacyBehavior>
              <a>Events</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
