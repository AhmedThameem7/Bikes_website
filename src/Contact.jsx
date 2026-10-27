
import { useState } from "react";
import "./Contact.css";
import { FaPaperPlane } from "react-icons/fa";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:8080/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name: name,
            email: email,
            message: message
          })
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || "Failed to submit contact form");
      }

      alert("Thank you for contacting VENTURES!");

      setName("");
      setEmail("");
      setMessage("");

    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Unable to send your message. Please try again.");
    }
  }

  return (
    <section className="contact-container">
      <div className="contact-header">
        <p className="contact-tag">
          VENTURES MOTORCYCLES / CONTACT
        </p>

        <h1>
          LET'S TALK.
          <br />
          <span>LET'S RIDE.</span>
        </h1>
      </div>

      <div className="contact-card">
        <div className="contact-info">
          <p className="info-label">GET IN TOUCH</p>

          <h2>
            Every great ride
            <br />
            starts with a conversation.
          </h2>

          <div className="contact-line"></div>

          <p className="info-small">
            YOUR JOURNEY. YOUR MACHINE.
          </p>

          <div className="ventures-watermark">
            VENTURES
          </div>
        </div>

        <div className="contact-form">
          <h2>Send a message</h2>

          <p className="form-description">
            Fill in your details below.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">FULL NAME</label>

              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">EMAIL ADDRESS</label>

              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">YOUR MESSAGE</label>

              <textarea
                id="message"
                placeholder="How can we help you?"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="contact-button"
            >
              SEND MESSAGE <FaPaperPlane />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
