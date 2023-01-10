import React from "react";
import Link from "next/link";
import Image from "next/image";

function Homepage({ city }) {
  return (
    <div className="main-section">
      <main className="container">
        <div className="card-container">
          {city.map((category, index) => {
            return (
              <div key={index} className="card">
                <Link href={`/events/${category.id}`} legacyBehavior>
                  <a
                    className={`card-body ${
                      index % 2 != 0 ? "row-reverse" : ""
                    }`}
                  >
                    <Image
                      src={category.image}
                      width={700}
                      height={500}
                      alt="nitesh"
                    />
                    <div className="card-info">
                      <h2>{category.title}</h2>
                      <p>{category.description}</p>
                    </div>
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
