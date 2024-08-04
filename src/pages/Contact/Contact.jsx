import { useState } from "react";
import "./Contact.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Contact = () => {
  const [form, setForm] = useState({
    first: "",
    last: "",
    email: "",
    message: "",
    check: "",
    checked: false,
    accept: false,
  });

  function isEmpty(value) {
    return (
      value == null || (typeof value === "string" && value.trim().length === 0)
    );
  }

  const SubmitForm = () => {
    console.log(form);

    if (
      isEmpty(form.first) ||
      isEmpty(form.last) ||
      isEmpty(form.email) ||
      isEmpty(form.message) ||
      isEmpty(form.check)
    ) {
      toast.error("Please fill all fields", {
        position: "top-center",
      });
    } else {
      if (form.accept) {
      setForm({ first: "",
        last: "",
        email: "",
        message: "",
        checked: false,
        accept: false});
       
        toast.success("We've submited your message.", {
          position: "top-center",
        });
      
      } else {
        toast.info("please accept conditions", {
          position: "top-center",
        });
      }
    }
  };

  return (
    <div className="form">
      <ToastContainer />
      <div className="form-fields">
        <h2>Contact Us</h2>

        <div className="full-name">
          <div className="first-name">
            <label htmlFor="first">First Name</label>
            <input
              value={form.first}
              onChange={(e) => {
                setForm({ ...form, first: e.target.value });
              }}
              type="text"
              name="first"
              id="first"
            />
          </div>

          <div className="last-name">
            <label htmlFor="last">Last Name</label>
            <input
              value={form.last}
              onChange={(e) => {
                setForm({ ...form, last: e.target.value });
              }}
              type="text"
              name="last"
              id="last"
            />
          </div>
        </div>

        <div className="email">
          <label htmlFor="email">Email</label>
          <input
            value={form.email}
            onChange={(e) => {
              setForm({ ...form, email: e.target.value });
            }}
            type="email"
            id="email"
            name="email"
          />
        </div>

        <div>
          <label>Type</label>

          <div className="type">
            <div className="generaly">
              <input
                type="radio"
                name="type"
                id="Generaly Enquiry"
                onChange={(e) => {
                  setForm({ ...form, check: e.target.id });
                }}
              />
              <label htmlFor="generaly">Generaly Enquiry</label>
            </div>
            <div className="support">
              <input
                type="radio"
                name="type"
                id="Support Request"
                onChange={(e) => {
                  setForm({ ...form, check: e.target.id });
                }}
              />
              <label htmlFor="support">Support Request</label>
            </div>
          </div>
        </div>

        <div className="text-area">
          <label htmlFor="message">Message</label>
          <textarea
            value={form.message}
            onChange={(e) => {
              setForm({ ...form, message: e.target.value });
            }}
            name="message"
            id="message"
          ></textarea>
        </div>

        <div className="check">
          <input
            type="checkbox"
            name="accept"
            id="accept"
            checked={form.accept}
            onChange={(e) => setForm({ ...form, accept: e.target.checked })}
          />
          <label htmlFor="accept">
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </label>
        </div>

        <div className="submit">
          <button onClick={SubmitForm}> Submit </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
