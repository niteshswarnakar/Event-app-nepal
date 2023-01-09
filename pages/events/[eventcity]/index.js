import Image from "next/image";
import CategoryEvent from "../../../src/components/events/CategoryEvent";

function EventCity({ events, cityName }) {
  return <CategoryEvent events={events} cityName={cityName} />;
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
