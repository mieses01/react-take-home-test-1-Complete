import { useState } from "react";
import "./ContactList.style.css";
import {IContact,apiAddContact } from "../data/contacts";
import "./ContactForm.style.css";

type Props = {
  onBackBtnClickHnd: () => void;
  onSubmitClickHnd: (data: IContact) => void;
};

const AddContact = (props: Props) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState("");
  const { onBackBtnClickHnd, onSubmitClickHnd } = props;

  const onNameChangeHnd = (e: any) => {
    setName(e.target.value);
  };

  const onPhoneChangeHnd = (e: any) => {
    setPhone(e.target.value);
  };

  const onAgeChangeHnd = (e: any) => {
    setAge(e.target.value);
  };

  const onEmailChangeHnd = (e: any) => {
    setEmail(e.target.value);
  };

  const onSubmitBtnClickHnd = (e: any) => {
    e.preventDefault();
    const data: IContact = {
      id: new Date().toJSON().toString(),      
      name: name,
      phone: phone,
      age: age,
      email: email,
    };
    apiAddContact(data);
    onSubmitClickHnd(data);
    onBackBtnClickHnd();
  };

  return (
    <div className="form-container">
      <div>
        <h3>Add Contact Form</h3>
      </div>
      <form onSubmit={onSubmitBtnClickHnd}>
        <div>
          <label>Name : </label>
          <input
            type="text"
            value={name}
            onChange={onNameChangeHnd}
          />
        </div>
        <div>
          <label>Phone : </label>
          <input type="text" value={phone} onChange={onPhoneChangeHnd} />
        </div>
        <div>
          <label>Age : </label>
          <input type="text" value={age} onChange={onAgeChangeHnd} />
        </div>
        <div>
          <label>Email Add. : </label>
          <input type="text" value={email} onChange={onEmailChangeHnd} />
        </div>
        <div>
          <input type="button" value="Back" onClick={onBackBtnClickHnd} />
          <input type="submit" value="Add Contact" />
        </div>
      </form>
    </div>
  );
};

export default AddContact;
