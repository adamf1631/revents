import React from "react";
import { Button, Form, Header, Segment } from "semantic-ui-react";

export default function EventForm({ setFormOpen }) {
  return (
    <Segment clearing>
      <Header content="Create New Event"></Header>
      <Form>
        <Form.Field>
          <input type="text" placeholder="Event Title" />
        </Form.Field>
        <Form.Field>
          <input type="text" placeholder="Category" />
        </Form.Field>
        <Form.Field>
          <input type="text" placeholder="Descrip" />
        </Form.Field>
        <Form.Field>
          <input type="text" placeholder="Venue" />
        </Form.Field>
        <Form.Field>
          <input type="Date" placeholder="Date" />
        </Form.Field>
        <Button type="submit" floated="right" positive content="Submit" />
        <Button
          onClick={() => setFormOpen(false)}
          type="submit"
          floated="right"
          content="Cancel"
        />
      </Form>
    </Segment>
  );
}
