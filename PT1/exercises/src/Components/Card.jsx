import React from "react";
import "./Card.scss";

import { AiFillHtml5 } from "react-icons/ai";
import {
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoNodejs,
  BiLogoMongodb,
} from "react-icons/bi";
import { BsGit } from "react-icons/bs";

const Card = (props) => {
  return (
    <div className="Card">
      <img src={props.imgURL} alt="Profile" className="profile-picture" />
      <h1 className="name">{props.name}</h1>
      <h4 className="title">{props.title}</h4>
      <p className="about">{props.about}</p>
      <h4 className="stack">Stacks: </h4>
      <div className="stacks">
        <AiFillHtml5 />
        <BiLogoCss3/>
        <BiLogoJavascript/>
        <BiLogoNodejs/>
        <BiLogoMongodb/>
      </div>
    </div>
  );
};

export default Card;
