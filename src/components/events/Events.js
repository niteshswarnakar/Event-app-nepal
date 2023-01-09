import React from "react";
import Link from "next/link";
import Image from "next/image";

function Events({ data }) {
  return (
    <div className="events-container">
      {data.map((city, index) => {
        return (
          <div className="events_card">
            <Link key={index} href={`/events/${city.id}`} legacyBehavior>
              <a className="events_card_link">
                <Image
                  src={city.image}
                  width={500}
                  height={400}
                  alt={city.title}
                />
                <p className="event-city">{city.title}</p>
              </a>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Events;
