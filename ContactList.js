import React from "react";
import ContactCard from "./ConatctCard";

const ContactList = (props) => {
  console.log(props);
  let renderContactList = null;
  if (Array.isArray(props.contacts)) {
    renderContactList = props.contacts.map((contact) => {
      return (
        <ContactCard contact={contact} key={contact.id}></ContactCard>
      );
    });
  }
  return <div className="ui celled list">{renderContactList}</div>;
};

export default ContactList;
