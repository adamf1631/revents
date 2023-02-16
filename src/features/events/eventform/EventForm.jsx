import React from "react";
import { useState } from "react";
import cuid from "cuid";
import userImg from "../../../assets/user.png";
import { Button, Form, Header, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function EventForm({
  setFormOpen,
  setEvents,
  createEvent,
  selectedEvent,
  updateEvent,
}) {
  const initialValues = selectedEvent ?? {
    title: "",
    category: "",
    description: "",
    city: "",
    venue: "",
    date: "",
  };
  const [values, setValues] = useState(initialValues);

  function handleFormSubmit() {
    selectedEvent
      ? updateEvent({ ...selectedEvent, ...values })
      : createEvent({
          ...values,
          id: cuid(),
          hostedBy: "Bob",
          attendees: [],
          hostPhotoURL: userImg,
        });
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }

  return (
    <Segment clearing>
      <Header
        content={selectedEvent ? "Edit the Event" : "Create New Event"}
      ></Header>
      <Form onSubmit={handleFormSubmit}>
        <Form.Field>
          <input
            type="text"
            name="title"
            onChange={(e) => handleInputChange(e)}
            value={values.title}
            placeholder="Event Title"
          />
        </Form.Field>
        <Form.Field>
          <input
            type="text"
            name="category"
            onChange={(e) => handleInputChange(e)}
            value={values.category}
            placeholder="Category"
          />
        </Form.Field>
        <Form.Field>
          <input
            type="text"
            name="description"
            onChange={(e) => handleInputChange(e)}
            value={values.description}
            placeholder="Descrip"
          />
        </Form.Field>
        <Form.Field>
          <input
            type="text"
            name="venue"
            onChange={(e) => handleInputChange(e)}
            value={values.venue}
            placeholder="Venue"
          />
        </Form.Field>
        <Form.Field>
          <input
            type="Date"
            name="date"
            onChange={(e) => handleInputChange(e)}
            value={values.date}
            placeholder="Date"
          />
        </Form.Field>
        <Button type="submit" floated="right" positive content="Submit" />
        <Button
          as={Link}
          to="/events"
          type="submit"
          floated="right"
          content="Cancel"
        />
      </Form>
    </Segment>
  );
}
