import React from "react";
import { Dropdown, Image, Menu } from "semantic-ui-react";
import User from "../../assets/user.png";
import { Link } from "react-router-dom";

export default function SignedInMenu({ signOut }) {
  return (
    <Menu.Item position="right">
      <Image avatar spaced="right" src={User} />
      <Dropdown pointing="top right" text="Bob">
        <Dropdown.Menu>
          <Dropdown.Item
            as={Link}
            to="/createEvent"
            text="Create Event"
            icon="plus"
          />
          <Dropdown.Item text="My Profile" icon="user" />
          <Dropdown.Item onClick={signOut} text="Sign Out" icon="power" />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  );
}
