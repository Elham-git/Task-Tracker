import React from "react";
import Button from "./Button";
import { PropTypes } from "prop-types";

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showAdd ? "red" : "Green"}
        text={showAdd ? "Close" : "Add"}
        onClick={onAdd}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",

  //description: "this is a task tracker application developed using reactjs",
};
Header.propTypes = {
  title: PropTypes.string.isRequired,
};

//CSS in JS

// const headingStyle = {
//   color: "white",
//   backgroundColor: "lightblue",
// };
export default Header;
