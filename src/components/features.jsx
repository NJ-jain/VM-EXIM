import React from "react";

export const Features = (props) => {
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Features</h2>
          <p>{props?.data?.paragraph}</p>
        </div>
        <div className="row">
          {props.data
            ? props.data.details.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-12 col-sm-6 col-md-3 mb-4">
                  <i className={d.icon}></i>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
