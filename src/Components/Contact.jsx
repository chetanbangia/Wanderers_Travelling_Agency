import React from "react";
import { FaRegBuilding } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import "../Css/Contact.css";

const Contact = () => {
  return (
    <section id="contact">
      <h2 className="h1 fw-normal">We are always here to help you</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a
        scelerisque turpis, ut porta turpis. Integer imperdiet aliquet velit,
        vel tincidunt lectus dictum sed. Curabitur dignissim ut massa vel
        tincidunt.
      </p>
      <div className="grid">
        <form>
          <fieldset>
            <input type="text" placeholder="Your Name" />
            <br />
            <input type="email" placeholder="Email Address" />
            <br />
            <input type="tel" placeholder="Phone number" />
            <br />
            <textarea placeholder="Your queries"></textarea>
            <br />
            <button className="btn btn-primary">Submit</button>
          </fieldset>
        </form>
        <div className="contact-info">
          <div className="info-card1 info-card">
            <div className="logo">
              <FaRegBuilding className="icon" />
            </div>
            <div className="info">
              <h5>Head Office</h5>
              <p>
                Abc Street, #12, Ofiice No.- 14,
                <br /> Mumbai, Maharashta
              </p>
            </div>
          </div>
          <div className="info-card2 info-card">
            <div className="logo">
              <IoCall className="icon" />
            </div>
            <div className="info">
              <h5>Phone numbers</h5>
              <p>
                +91 98338-93838
                <br />
                +91 83738-83737
              </p>
            </div>
          </div>
          <div className="info-card3 info-card">
            <div className="logo">
              <CiMail className="icon" />
            </div>
            <div className="info">
              <h5>Email Addresses</h5>
              <p>
                info@Wanderers.com
                <br />
                info@Wandererservices.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
