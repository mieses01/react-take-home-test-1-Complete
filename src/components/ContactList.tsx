import React from 'react'

import { useState } from "react";
import "./ContactList.style.css";
import {IContact} from "../data/contacts";
type Props = {
  list: IContact[];
  onDeleteClickHnd: (data: IContact) => void;
  onEdit: (data: IContact) => void;
};

const ContactList = (props: Props) => {
  const { list, onDeleteClickHnd, onEdit } = props;

  return (
    <div>
      <article>
        <h3 className="list-header">Contacts List</h3>
      </article>
      <table>
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Age</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
        {list.map((contact) => {
          return (
            <tr key={contact.id}>
              <td>{`${contact.name}`}</td>
              <td>{`${contact.phone}`}</td>
              <td>{`${contact.age}`}</td>
              <td>{contact.email}</td>
              <td>
                <div>
                  <input
                    type="button"
                    value="Edit"
                    onClick={() => onEdit(contact)}
                  />
                  <input
                    type="button"
                    value="Delete"
                    onClick={() => onDeleteClickHnd(contact)}
                  />
                </div>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default ContactList;
