import React from "react";
import Link from "next/link";
import Image from "next/image";

function Homepage({ city }) {
  return (
    <div>
      <main>
        <div>
          {city.map((category, index) => {
            return (
              <div key={index}>
                <Link href={`/events/${category.id}`} legacyBehavior>
                  <a>
                    <Image
                      src={category.image}
                      width={800}
                      height={500}
                      alt="nitesh"
                    />
                    <h2>{category.title}</h2>
                    <p>{category.description}</p>
                  </a>
                </Link>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default Homepage;
