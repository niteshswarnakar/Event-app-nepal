import React from "react";
import Link from "next/link";
import Image from "next/image";

function CategoryEvent({ events, cityName }) {
  return (
    <div className="category-event-container">
      <div className="container-bigger">
        <h2>
          Events in {cityName.charAt(0).toUpperCase() + cityName.slice(1)}
        </h2>
        <div className="category-events-div">
          {events.map((event, index) => {
            return (
              <Link
                key={index}
                href={`/events/${event.city}/${event.id}`}
                legacyBehavior
              >
                <a className="category-event">
                  <Image
                    src={event.image}
                    height={300}
                    width={400}
                    alt={event.title}
                  />
                  <h1>{event.title}</h1>
                  <p>{event.description}</p>
                </a>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CategoryEvent;
