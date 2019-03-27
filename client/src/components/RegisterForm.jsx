import React from 'react';

const RegisterForm = (props) => {
  return(
    <div className="RegisterForm">
      <h1 className="create-new-account">Create new account</h1>

       <form onSubmit={props.onSubmit}>

        <div>
        <input
        className="register-input"
        placeholder="Name"
        autoComplete="off"
        type="text"
        onChange={props.handleChange}
        id="first_name"
        name="first_name"
        value={props.first_name} />
        </div>

        <div>
        <input
        className="register-input"
        placeholder="Last Name"
        autoComplete="off"
        type="text"
        onChange={props.handleChange}
        id="last_name"
        name="last_name"
        value={props.last_name} />
        </div>

        <div>
        <input
        className="register-input"
        placeholder="Email"
        autoComplete="off"
        type="text"
        onChange={props.handleChange}
        id="email"
        name="email"
        value={props.email} />
        </div>

        <div>
        <input
        className="register-input"
        placeholder="Password"
        autoComplete="off"
        type="password"
        onChange={props.handleChange}
        id="password"
        name="password"
        value={props.password} />
        </div>

        <button
        className="register-button"
        onClick={props.handleSubmit}
        type="submit">
        Sign Up
        </button>

       </form>
    </div>
  )
};

export default RegisterForm;
