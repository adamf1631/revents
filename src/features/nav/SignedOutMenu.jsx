import React from "react";
import { useDispatch } from "react-redux";
import { Button, Menu } from "semantic-ui-react";
import { openModal } from "../../app/common/modals/modalReducer";

export default function SignedOutMenu() {
  const dispatch = useDispatch();
  return (
    <Menu.Item position="right">
      <Button
        onClick={() => dispatch(openModal({ modalType: "LoginForm" }))}
        basic
        inverted
        content="Login"
      />
      <Button
        onClick={() => dispatch(openModal({ modalType: "RegisterForm" }))}
        basic
        inverted
        content="Register"
        style={{ marginLeft: "0.5em" }}
      />
    </Menu.Item>
  );
}
