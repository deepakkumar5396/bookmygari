import React from "react";
import "./ContactUs.css";
import Bengaluru from "../Assets/Bengaluru.png";
import Mumbai from "../Assets/Mumbai.png";
import Pune from "../Assets/Pune.png";
// import Bengaluru from ""
function ContactUs() {
  return (
    <div className="wrapper">
      <div className="container">
        {/* <div className="row df">
          <div className="img-container">
            <img
              src={Mumbai}
              alt="Mumbai"
            />
          </div>
          <div className="info-container">
            <h3 className="title">Xanadu Realty Mumbai</h3>
            <h3>WeWork Raheja Platinum</h3>
            <p>3rd Floor, Sag Baug Road,</p>
            <p>off Andheri – Kurla Rd, Marol, Andheri East,</p>
            <p>Mumbai, Maharashtra 400059</p>
            <h3>Contact</h3>
            <div className="contact-person">
              <p>Contact Person: Aditya Meshram</p>
              <p>Email: aditya.meshram@xanadu.in</p>
            </div>
            <div className="contact-person">
              <p>Contact Person: Madhur Mittal</p>
              <p>Email: madhur.mital@xanadu.in</p>
            </div>
            <h3> HR related</h3>
            <p>Please write to: hr@xanadu.in</p>
            <button
              style={{
                backgroundColor: "#4CAF50",
                color: "white",
                padding: "10px 24px",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              <a
                href="https://www.google.com/maps/place/WeWork/@19.1089328,72.8853331,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7c812c3a255db:0x533ad511b0a8e98f!8m2!3d19.1089328!4d72.8853331!16s%2Fg%2F1q6j93ptt"
                target={"_blank"}
                style={{ color: "white", textDecoration: "none" }}
              >
                Get Direction
              </a>
            </button>
          </div>
        </div> */}

        {/* <div className="row df">
          <div className="img-container">
            <img
              src={Bengaluru}
              alt="Mumbai"
            />
          </div>
          <div className="info-container">
            <h3 className="title">Xanadu Realty Bengaluru</h3>
            <h3>WeWork Vaishnavi Signature</h3>
            <p>No 78/9, Ground Floor, Outer Ring Road,</p>
            <p>Bellandur Village, Varthur, Hobli, Bengaluru East,</p>
            <p>Bengaluru, Karnataka 560103</p>
            <h3>Contact</h3>
            <div className="contact-person">
              <p>Contact Person: Nitin Bighane</p>
              <p>Contact Number: +91-9619867630</p>
            </div>
            <h3> HR related</h3>
            <p>Please write to: hr@xanadu.in</p>
            <button
              style={{
                backgroundColor: "#4CAF50",
                color: "white",
                padding: "10px 24px",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              <a
                href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x3bae13da7e444143:0xd3f5a22d29f13f42?utm_source=mstt_1&entry=gps&lucs=swa"
                target={"_blank"}
                style={{ color: "white", textDecoration: "none" }}
              >
                Get Direction
              </a>
            </button>
          </div>
        </div> */}
        <div className="row df">
          <div className="img-container">
            <img src={Pune} alt="Pune" />
          </div>
          <div className="info-container">
            <h3 className="title">BookMyGari Pvt Ltd</h3>
            {/* <h3>WeWork Raheja Platinum</h3> */}
            <p>BookMyGari Pvt Ltd Triveniganj</p>
            <p>Near to Shivkala Drug stor </p>
            <p>Supaul Bihar 852139</p>
            <h3>Contact</h3>
            <div className="contact-person">
              <p>Contact Person: Deepak Kumar</p>
              <p>Email: BookMyGari@gmail.com</p>
              <p>Mobile: 9534611809</p>
            </div>
            {/* <div className="contact-person">
              <p>Contact Person: Rachit Bansal</p>
              <p>Email: rachit.bansal@xanadu.in</p>
            </div> */}
            <h3> write us to any improvement</h3>
            <p>Please write to: supportBookmyGari@gmail.com</p>
            <button
              style={{
                backgroundColor: "#4CAF50",
                color: "white",
                padding: "10px 24px",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              <a
                href="https://www.google.com/maps/place/Shiv+Kala+Drug+Store/@26.2487881,86.9212505,17z/data=!4m14!1m7!3m6!1s0x39efad331531cb61:0x9fe18784761c0eed!2sShiv+Kala+Drug+Store!8m2!3d26.2487881!4d86.9234392!16s%2Fg%2F11tjbzsz48!3m5!1s0x39efad331531cb61:0x9fe18784761c0eed!8m2!3d26.2487881!4d86.9234392!16s%2Fg%2F11tjbzsz48"
                target={"_blank"}
                style={{ color: "white", textDecoration: "none" }}
              >
                Get Direction
              </a>
            </button>
          </div>
        </div>
        <div className="col-sm-6">
          <iframe
            width="100%"
            height="350"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            // <iframe  width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.3966201765675!2d86.92125051483767!3d26.248788083418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39efad331531cb61%3A0x9fe18784761c0eed!2sShiv%20Kala%20Drug%20Store!5e0!3m2!1sen!2sin!4v1679692952270!5m2!1sen!2sin"
            aria-label="Patna, Bihar"
          ></iframe>

          <a
            href="https://goo.gl/maps/LLWR99Wz8VvD9AMr5"
            target="_blank"
            rel="noopener noreferrer"
            className="direction-link"
          >
            <i className="fa fa-map-marker" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
