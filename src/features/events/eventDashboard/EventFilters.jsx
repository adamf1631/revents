import React from "react";
import { Header, Menu } from "semantic-ui-react";
import Calendar from "react-calendar";

export default function EventFilters() {
  return (
    <div>
      <>
        <Menu vertical size="large" style={{ width: "100%" }}>
          <Header icon="filter" attached color="teal" content="Filters" />
          <Menu.Item content="All Events" />
          <Menu.Item content="Im Going" />
          <Menu.Item content="Im Hosting" />
        </Menu>
        <Header icon="calendar" attached color="teal" content="Select Date" />
        <Calendar />
      </>
    </div>
  );
}
