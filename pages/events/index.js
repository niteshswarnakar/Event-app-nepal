import React from "react";
import Events from "../../src/components/events/Events";

function EventCity({ data }) {
  return (
    <>
      <Events data={data} />
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
