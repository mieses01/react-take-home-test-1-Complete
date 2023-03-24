import { useState } from "react";
import {IContact,apiUpdateContact } from "../data/contacts";
import "./ContactForm.style.css";

type Props = {
  data: IContact;
  onBackBtnClickHnd: () => void;
  onUpdateClickHnd: (data: IContact) => void;
};

const EditContact = (props: Props) => {
  const { data, onBackBtnClickHnd, onUpdateClickHnd } = props;
  const [name, setName] = useState(data.name);
  const [phone, setPhone] = useState(data.phone);
  const [age, setAge] = useState(data.age);
  const [email, setEmail] = useState(data.email);

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
    const updatedData: IContact = {
      id: data.id,
      name: name,
      phone: phone,
      age: age,
      email: email,
    };
    apiUpdateContact(updatedData)
    onUpdateClickHnd(updatedData);
    onBackBtnClickHnd();
  };

  return (
    <div className="form-container">
      <div>
        <h3>Edit Contact Form</h3>
      </div>
      <form onSubmit={onSubmitBtnClickHnd}>
        <div>
          <label>First Name : </label>
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
          <label>Email : </label>
          <input type="text" value={email} onChange={onEmailChangeHnd} />
        </div>
        <div>
          <input type="button" value="Back" onClick={onBackBtnClickHnd} />
          <input type="submit" value="Update Contact" />
        </div>
      </form>
    </div>
  );
};

export default EditContact;
