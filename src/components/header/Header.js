import React from "react";
import Link from "next/link";
import Image from "next/image";

function Header() {
  return (
    <header>
      <div className="topNav">
        <Image
          src={"/assets/secondlogo.png"}
          width={50}
          height={50}
          alt="my logo"
        />
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
      </div>
    </header>
  );
}

export default Header;
