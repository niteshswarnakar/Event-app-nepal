import Image from "next/image";
import React from "react";
import Link from "next/link";

function EventCity({ data }) {
  return (
    <>
      <div className="events-container">
        {data.map((city, index) => {
          return (
            <div className="events_card">
              <Link key={index} href={`/events/${city.id}`} legacyBehavior>
                <a>
                  <Image
                    src={city.image}
                    width={700}
                    height={500}
                    alt={city.title}
                  />
                  <p className="event-city">{city.title}</p>
                </a>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default EventCity;

export async function getStaticProps() {
  const data = await import("../../data/data.json");
  return {
    props: {
      data: data.events_categories,
    },
  };
}
