import React from "react";
import { Dropdown, Image, Menu } from "semantic-ui-react";
import UserPic from "../../assets/user.png";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { signOutFirebase } from "../../app/firestore/firebaseService";

export default function SignedInMenu() {
  const { currentUserProfile } = useSelector((state) => state.profile);
  const history = useHistory();

  async function handleSignOut() {
    try {
      history.push("/");
      await signOutFirebase();
    } catch (error) {
      toast.error(error.message);
    }
  }
  return (
    <Menu.Item position="right">
      <Image
        avatar
        spaced="right"
        src={currentUserProfile.photoURL || UserPic}
      />
      <Dropdown pointing="top right" text={currentUserProfile.displayName}>
        <Dropdown.Menu>
          <Dropdown.Item
            as={Link}
            to="/createEvent"
            text="Create Event"
            icon="plus"
          />
          <Dropdown.Item
            as={Link}
            to={`/profile/${currentUserProfile.id}`}
            text="My Profile"
            icon="user"
          />
          <Dropdown.Item
            as={Link}
            to="/account"
            text="MY Account"
            icon="settings"
          />
          <Dropdown.Item onClick={handleSignOut} text="Sign Out" icon="power" />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  );
}
