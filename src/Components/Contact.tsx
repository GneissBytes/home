import React from "react";
import { Field, Form } from "react-final-form";
import "./Contact.css";
import ScrollButton from "./elements/ScrollButton";
import useWidth from "../hooks/useWidth";

interface FieldProps {
  label: string;
  name: string;
  placeholder: string;
  component: "input" | "textarea";
  type: string;
  validators?: any;
}

const ContactFieldValidated: React.FC<FieldProps> = ({
  name,
  validators,
  component,
  label,
  type,
  placeholder,
}) => {
  return (
    <Field name={name} validate={validators}>
      {({ input, meta }) => (
        <div className="row input-container d-flex justify-content-center">
          <div className="col-md-2 field-label-container">
            <label className="field-label">{label}</label>
          </div>
          <div className="col-md-6">
            {component === "input" ? (
              <input {...input} type={type} placeholder={placeholder} />
            ) : (
              <textarea {...input} placeholder={placeholder} />
            )}
            <p className="validation-error">
              {meta.error && meta.touched && meta.error}
            </p>
          </div>
        </div>
      )}
    </Field>
  );
};

const required = (value: string) => (value ? undefined : "Required");
const isEmail = (value: string) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(value).toLowerCase())
    ? undefined
    : "Enter valid email.";
};
const maxLengthInput = (value: string) =>
  value.length < 30 ? undefined : "Maximum field length is 30 characters!";
const maxLengthBody = (value: string) =>
  value.length < 250 ? undefined : "Maximum field length is 250 characters!";

const composeValidators = (...validators: any) => (value: string) =>
  validators.reduce(
    (error: string, validator: any) => error || validator(value),
    undefined
  );

const Contact: React.FC = () => {
  const [wideInputs] = useWidth(855);

  const onSubmit = (values: {}) => {
    alert("Email API is not connected yet, sorry! Your precious inputs:");
    alert(JSON.stringify(values));
  };

  const renderForm = (): React.ReactNode => {
    return (
      <div>
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit, form, submitting, pristine, values }) => {
            return (
              <form onSubmit={handleSubmit}>
                <ContactFieldValidated
                  name="name"
                  placeholder="Name or title"
                  label="Name"
                  component="input"
                  type="text"
                  validators={composeValidators(required, maxLengthInput)}
                />
                <ContactFieldValidated
                  name="email"
                  placeholder="Email"
                  type="email"
                  label="Email"
                  component="input"
                  validators={composeValidators(
                    isEmail,
                    required,
                    maxLengthInput
                  )}
                />
                <ContactFieldValidated
                  name="subject"
                  placeholder="Message subject"
                  label="Subject"
                  component="input"
                  type="text"
                  validators={composeValidators(required, maxLengthInput)}
                />
                <ContactFieldValidated
                  name="body"
                  placeholder="Message body. Email api is not yet connected to this form."
                  label="Message"
                  component="textarea"
                  type="text"
                  validators={composeValidators(required, maxLengthBody)}
                />
                <div className="button-container">
                  <button className="submit-button" onClick={handleSubmit}>
                    SUBMIT
                  </button>
                </div>
              </form>
            );
          }}
        />
      </div>
    );
  };

  return (
    <div className="contact-container " id="contact">
      <div
        className="form-container"
        style={{ width: wideInputs ? "60%" : "100%" }}
      >
        {renderForm()}
      </div>
      <div className="scroll-top-btn">
        <ScrollButton direction="top" />
      </div>
    </div>
  );
};

export default Contact;
