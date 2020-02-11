import React from "react";
import { connect } from "react-redux";
import DoItem from "./DoItem";

const DoList = props => {
  console.log(props.form);
  return <div className="ui middle aligned selection list">hello</div>;
};

//how to pass state as props
const mapStateToProps = state => {
  console.log(state.form.toDo);
  return { ...state };
};

export default connect(mapStateToProps)(DoList);
