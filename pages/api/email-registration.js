import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data", "data.json");

function extractData(filePath) {
  const jsonData = fs.readFileSync(filePath);
  return JSON.parse(jsonData);
}

export default function registerEmail(req, res) {
  const { method } = req;
  const { events_categories, allEvents } = extractData(filePath);

  // CHECK IF EVENTS EXIST IN DATA.JSON
  if (!allEvents) {
    return res.status(404).json({
      status: 404,
      message: "Events not found",
    });
  }

  // CHECK REQUEST METHOD
  if (method === "POST") {
    const email = req.body.email;
    const eventId = req.body.id;

    //CHECK IF PROPER EMAIL HAS BEEN RECIEVED
    if (!email | !email.includes("@")) {
      res.status(422).json({
        message: "Enter a proper email",
      });
    }

    const newAllEvents = allEvents.map((event) => {
      if (event.id === eventId) {
        if (event.emails_registered.includes(email)) {
          res.status(201).json({ message: "this email already exists" });
          return event;
        }

        return {
          ...event,
          emails_registered: [...event.emails_registered, email],
        };
      }

      return event;
    });

    console.log();

    fs.writeFileSync(
      filePath,
      JSON.stringify({ events_categories, allEvents: newAllEvents })
    );

    res.status(200).json({
      message: `you have been registered successfully for "${eventId}" event`,
    });
  }
}
