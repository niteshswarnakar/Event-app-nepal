import Image from "next/image";
import React from "react";

function EventCity({ events }) {
  return (
    <div>
      {events.map((event) => {
        return (
          <>
            <h1>{event.title}</h1>
            <Image
              src={event.image}
              height={300}
              width={400}
              alt={event.title}
            />
            <p>{event.description}</p>
            <h3>{event.city}</h3>
          </>
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
  //   console.log("context - ", context);
  const data = await import("../../../data/data.json");

  const events = data.allEvents.filter(
    (event) => event.city === context.params.eventcity
  );

  return {
    props: {
      events,
    },
  };
}
