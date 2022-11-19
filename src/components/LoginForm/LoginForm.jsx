import React from "react";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";

const LoginForm = () => {
  return (
    <>
      <div>LoginForm</div>
      <div >
        <div className="col-12 md:col-4" style={{ paddingLeft: "20px" }}>
          <div className="p-inputgroup">
            <span className="p-inputgroup-addon">
              <i className="pi pi-user"></i>
            </span>
            <InputText placeholder="Username" />
          </div>
          <div className="p-inputgroup" style={{ paddingTop: "20px" }}>
            <span className="p-inputgroup-addon">
              <i className="pi pi-sign-in"></i>
            </span>
            <InputText
              type="password"
              name="password"
              placeholder="Password"
              value={""}
            />
          </div>
        </div>
      </div>
    </>
    //ToDo: inputs
  );
};

export default LoginForm;
