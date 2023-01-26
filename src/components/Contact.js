import React from "react";
import $ from "jquery";


$(document).ready(() =>
  $(".cta").on("click", () => $(".contact").toggleClass("contact-open"))
);

const Contact = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }
  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("messaggio inviato!"))
      .catch((error) => alert(error));
  }
  return (
    <div className="contact">
      <div>
        <form className="form" netlify name="contact" onSubmit={handleSubmit}>
          <div className="form-imput">
            <p>Name</p>
            <input
              type="text"
              id="name"
              name="name"
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-imput">
            <p>Email</p>
            <input
              type="email"
              id="email"
              name="email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-imput">
            <p>Message</p>
            <textarea
              name="message"
              id="message"
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div className="form-submit">
            <input
              className="button"
              id="submit"
              type="submit"
              value="contact me"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
