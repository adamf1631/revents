import React from "react";
import ModalWrapper from "../../app/common/modals/ModalWrapper";

export default function TestModal({ data }) {
  return (
    <ModalWrapper size="mini" header="Test Modal">
      <div>This is : {data}</div>
    </ModalWrapper>
  );
}
