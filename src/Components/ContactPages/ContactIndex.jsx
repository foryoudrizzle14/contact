import React from "react";
import Header from "../Layout/Header";
import AddRandomContact from "./AddRandomContact";
import RemoveAllContact from "./RemoveAllContact";
import AddContact from "./AddContact";
import FavoriteContacts from "./FavoriteContacts";
import GeneralContacts from "./GeneralContacts";

class ContactIndex extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container" style={{ minHeight: "85vh" }}>
          <div className="row py-3"></div>
          <div className="col-4 offset-2">
            <AddRandomContact />
          </div>
          <div className="col-4">
            <RemoveAllContact />
          </div>
          <div className="row py-2">
            <AddContact />
          </div>
          <div className="row py-2">
            <FavoriteContacts />
          </div>
          <div className="row py-2">
            <GeneralContacts />
          </div>
        </div>
      </div>
    );
  }
}

export default ContactIndex;
