import React from "react";
import { useEffect, useState } from "react";
import {PageEnum} from "./components/Contact.type";
import AddContact from "./components/AddContact"
import EditContact from "./components/EditContact"
import {apiFetchAllContacts, apiDeleteContact, IContact} from "../src/data/contacts";
 import ContactList from "./components/ContactList";
import "./components/Home.style.css";

const App = () => {
   const [contactList, setContactList] = useState([] as IContact[]);
   const [shownPage, setShownPage] = useState(PageEnum.list);
   const [dataToEdit, setDataToEdit] = useState({} as IContact);
   
   
const p = Promise.resolve( apiFetchAllContacts());
p.then((v) => {
  setContactList(v);
});
const onAddContactClickHnd = () => {
    setShownPage(PageEnum.add);
  }; 

   const showListPage = () => {
     setShownPage(PageEnum.list);
   };

  const _setContacList = (list: IContact[]) => {
    setContactList(list);
  };

  const addContact = (data: IContact) => {
    _setContacList([...contactList, data]);
  };

  const deleteContact = (data: IContact) => {

    const indexToDelete = contactList.indexOf(data);
    const tempList = [...contactList];

    tempList.splice(indexToDelete, 1);
    _setContacList(tempList);
    apiDeleteContact(data.id);
  };

  const editContactData = (data: IContact) => {
    setShownPage(PageEnum.edit);
    setDataToEdit(data);
  };

  const updateData = (data: IContact) => {
    const filteredData = contactList.filter((x) => x.id === data.id)[0];
    const indexOfRecord = contactList.indexOf(filteredData);
    const tempData = [...contactList];
    tempData[indexOfRecord] = data;
    _setContacList(tempData);
  };

  return (
    <>
      <article className="article-header">
        <header>
          <h1>CRUD Contacts Application</h1>
        </header>
      </article>

      <section className="section-content">
      {shownPage === PageEnum.list && (
          <>
            <input
              type="button"
              value="Add Contact"
              onClick={onAddContactClickHnd}
              className="add-contact-btn"
            />
            <ContactList
              list={contactList}
              onDeleteClickHnd={deleteContact}
              onEdit={editContactData}
            />
          </>
        )}

        {shownPage === PageEnum.add && (
          <AddContact
            onBackBtnClickHnd={showListPage}
            onSubmitClickHnd={addContact}
          />
        )}

         {shownPage === PageEnum.edit && (
          <EditContact
            data={dataToEdit}
            onBackBtnClickHnd={showListPage}
            onUpdateClickHnd={updateData}
          />
        )} 
      </section>
    </>
  );
};

export default App;
