import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { useRef } from "react";

function EventPage({ event }) {
  const router = useRouter();
  const inputEmail = useRef();
  const [message, setMessage] = useState("");

  const formHandler = async (e) => {
    e.preventDefault();
    const email = inputEmail.current.value;
    const eventId = router.query.id;

    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!email.match(emailRegex)) {
      setMessage("Please enter a valid email");
      return;
    } else {
      setMessage("");
    }

    try {
      const response = await fetch("/api/email-registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          id: eventId,
        }),
      });

      if (!response.ok) throw new Error(`Error aayo yr : ${response.status}`);

      const data = await response?.json();
      setMessage(data.message);
      inputEmail.current.value = "";

      console.log("response - ", data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container event-page">
      <Image src={event.image} height={500} width={1000} alt={event.title} />
      <h1>{event.title}</h1>
      <p>{event.description}</p>
      <form className="email-form" onSubmit={formHandler}>
        <label htmlFor="email">Enter Email</label>
        <input
          ref={inputEmail}
          placeholder="example@myemail.com"
          type="text"
          id="email"
          name="email"
          required
        />
        <button type="submit">Submit</button>
      </form>
      <p>{message}</p>
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
