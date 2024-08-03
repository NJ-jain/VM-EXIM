import React from "react";

export const Contact = (props) => {

  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Get In Touch</h2>
              </div>
              {/* <div className="col-md-3 col-md-offset-1 contact-info"> */}
              <div className="contact-item">
                <h3>Contact Info</h3>
                <p>
                <span>
                    <i className="fa fa-map-marker"></i> Address
                  </span>
                  {/* <button
                    onClick={() =>
                      window.open(`https://maps.app.goo.gl/wQVJdpeLjK8vquVG8`, '_blank')
                    }
                    style={{ background: "none", border: "none", padding: 0, cursor: "pointer", color: "inherit", textDecoration: "underline" }}
                  > */}
                    {props.data ? props.data.address : "loading"}
                  {/* </button> */}
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-phone"></i> Phone
                  </span>{" "}
                  <a
                    href={`tel:${props.data ? props.data.phone : ""}`}
                    onClick={(e) => {
                      if (!/Mobi|Android/i.test(navigator.userAgent)) {
                        e.preventDefault();
                        navigator.clipboard.writeText(props.data ? props.data.phone : "").then(() => {
                          alert("Contact number copied to clipboard");
                        });
                      }
                    }}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    {props.data ? props.data.phone : "loading"}
                  </a>
                </p>
              </div>
              <div className="contact-item">
                <p
                  onClick={() =>
                    (window.location.href = `mailto:${props.data.email}`)
                  }
                  style={{ cursor: "pointer" }}
                >
                  <span>
                    <i className="fa fa-envelope-o"></i> Email
                  </span>{" "}
                  {props.data ? props.data.email : "loading"}
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    {console.log(props.data)}
                    <a
                    href={`https://wa.me/${
                      props.data && props.data.WhatsApp
                        ? props.data.WhatsApp.replace(/[^0-9]/g, "")
                        : ""
                    }`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                      <i className="fa fa-whatsapp"></i>
                    </a>
                  </li>
                  <li>
                    {console.log(props.data)}
                    <a
                      href={props.data ? props.data.instagram : "/"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href={props.data ? props.data.twitter : "/"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href={props.data ? props.data.youtube : "/"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
