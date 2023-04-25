import React from "react";

const ContactCard = ({ contact, deleteContactHandler }) => {
  if (!contact) {
    return null;
  }

  const { id, name, email } = contact;

  return (
    <div className="item">
      <div className="content">
        <div className="header">{name}</div>
        <div>{email}</div>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px" }}
        onClick={() => deleteContactHandler(id)}
      ></i>
    </div>
  );
};

export default ContactCard;
