import React from "react";

export const Header = (props) => {
  return (

    <div className="intro h-100vh">
      <h1 className="text-center">
        {props?.data ? props.data.title : "Loading"}
      </h1>
      <p className="text-center">{props.data ? props.data.paragraph1 : "Loading"}</p>
      <p className="text-center">{props.data ? props.data.paragraph2 : "Loading"}</p>
        <a
          href="#features"
          className="btn btn-custom btn-lg page-scroll"
        >
          Learn More
        </a>{" "}
     
    </div>
  );
};
