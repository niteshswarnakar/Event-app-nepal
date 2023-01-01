import Image from "next/image";
import React from "react";

function EventCity({ data }) {
  return (
    <>
      <h3>All the events</h3>
      {data.map((city) => {
        return (
          <a href={`/events/${city.id}`}>
            <Image src={city.image} width={400} height={300} alt={city.title} />
            <p>{city.title}</p>
          </a>
        );
      })}
    </>
  );
}

export default EventCity;

export async function getStaticProps() {
  const data = await import("../../data/data.json");
  console.log(data.events_categories);
  return {
    props: {
      data: data.events_categories,
    },
  };
}
