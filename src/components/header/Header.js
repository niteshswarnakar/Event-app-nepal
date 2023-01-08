import React from "react";
import Link from "next/link";

function Header() {
  return (
    <div>
      <header>
        <nav>
          {/* <img src = {}/> */}
          <Link href="/" legacyBehavior>
            <a>Home</a>
          </Link>
          <Link href="/about_us" legacyBehavior>
            <a>About</a>
          </Link>
          <Link href="/events" legacyBehavior>
            <a>Events</a>
          </Link>
        </nav>
      </header>
    </div>
  );
}

export default Header;
