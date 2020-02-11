import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux"; //to connect to store
import { createToDo } from "../actions/index";


class CreateDo extends React.Component {
  renderForm = ({ input, label, placeholder }) => {
    return (
      <div className="field">
        <label>{label}</label>
        <input placeholder={placeholder} {...input} />
      </div>
    );
  };

  onSubmit = formValue => {
    this.props.createToDo(formValue); //calling createToDo action
   
  };


  //Field component is from redux from does not understand that why i should give it  a
  //function to render the element dom that i want t see on browser and it pass an object to render
  //the function with all attributes that exists and more ...

  //this.props came from redux from

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui huge form"
      >
        <Field
          name="toDo"
          component={this.renderForm}
          label="Write what you want to Do"
          placeholder="To Do..."
        />
        <button className="ui submit button">Submit</button>
      </form>
    );
  }
}

export default connect(null, { createToDo })(
  reduxForm({ form: "toDo" })(CreateDo)
);
