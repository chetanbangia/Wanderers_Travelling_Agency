import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { LiaCopyright } from "react-icons/lia";
import "../Css/Footer.css";

const Footer = () => {
  return (
    <section id="footer">
      <div className="follow">
        <h3>Follow us on:</h3>
        <button className="btn btn-link media-handle">
          <FaInstagram className="media-logo" />
        </button>
        <button className="btn btn-link media-handle">
          <FaFacebookF className="media-logo" />
        </button>
        <button className="btn btn-link media-handle">
          <BsTwitterX className="media-logo" />
        </button>
        <button className="btn btn-link media-handle">
          <FaYoutube className="media-logo" />
        </button>
      </div>
      <div className="important-links">
        <h3>Important Links</h3>
        <ul>
          <li>
            <button className="btn btn-link">Terms and Conditions</button>
          </li>
          <li>
            <button className="btn btn-link">Privacy Policy</button>
          </li>
          <li>
            <button className="btn btn-link">Safety Tips</button>
          </li>
          <li>
            <button className="btn btn-link">News</button>
          </li>
        </ul>
      </div>
      <div className="subscribe">
        <h3>Subscribe Us!</h3>
        <p>
          Enter your email address to keep yourself upadated about the new
          packages and tourist destinations.
        </p>
        <input type="email" placeholder="Email address" />
        <br />
        <button className="btn btn-primary">Submit</button>
      </div>
      <hr />
      <div className="copyrights">
        <p>
          <LiaCopyright />
          2000 Wanderers Pvt. Ltd.
        </p>
        <p> All Rights Reserved</p>
      </div>
    </section>
  );
};

export default Footer;
