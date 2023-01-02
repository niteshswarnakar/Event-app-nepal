import Image from "next/image";
import Link from "next/link";
import React from "react";

function EventCity({ events, cityName }) {
  return (
    <div>
      <h2>Events in {cityName.charAt(0).toUpperCase() + cityName.slice(1)}</h2>
      <hr />
      {events.map((event, index) => {
        return (
          <Link
            key={index}
            href={`/events/${event.city}/${event.id}`}
            legacyBehavior
          >
            <a>
              <h1>{event.title}</h1>
              <Image
                src={event.image}
                height={300}
                width={400}
                alt={event.title}
              />
              <p>{event.description}</p>
              <h3>{event.city}</h3>
            </a>
          </Link>
        );
      })}
    </div>
  );
}

export default EventCity;

export async function getStaticPaths() {
  const { events_categories } = await import("../../../data/data.json");

  const allpaths = events_categories.map((cat) => {
    return {
      params: {
        eventcity: cat.id,
      },
    };
  });

  return {
    paths: allpaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const data = await import("../../../data/data.json");

  const events = data.allEvents.filter(
    (event) => event.city === context.params.eventcity
  );

  return {
    props: {
      events,
      cityName: context.params.eventcity,
    },
  };
}
