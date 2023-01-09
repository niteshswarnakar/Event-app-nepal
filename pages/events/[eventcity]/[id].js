import Image from "next/image";
import React from "react";

function EventPage({ event }) {
  return (
    <div className="container event-page">
      <Image src={event.image} height={500} width={1000} alt={event.title} />
      <h1>{event.title}</h1>
      <p>{event.description}</p>
    </div>
  );
}

export default EventPage;

export async function getStaticPaths() {
  const { allEvents } = await import("../../../data/data.json");
  console.log("allevents - ", allEvents);
  const allpaths = allEvents.map((path) => {
    return {
      params: {
        eventcity: path.city,
        id: path.id,
      },
    };
  });

  return {
    paths: allpaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  console.log("context - ", context);

  const { allEvents } = await import("../../../data/data.json");

  const event = allEvents.find((ev) => ev.id === context.params.id);

  return {
    props: {
      event,
    },
  };
}
