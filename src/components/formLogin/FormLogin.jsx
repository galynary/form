import React, { Component } from 'react';

class FormLogin extends Component {
  state = {
    email: '',
    password: '',
    isCheked: false,
    gender: 'male',
  };
  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    // this.props.createUser(this.state)
    this.props.createUser({
      email: this.state.email,
      password: this.state.password,
    });
    this.setState({
      email: '',
      password: '',
    });
    this.props.closeModal();
  };
  handleCheck = ({ target: { checked } }) => {
    this.setState({ isCheked: checked });
  };
  handleRadio = ({ target }) => {
    this.setState({ gender: target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="mb-3">
          <label htmlFor="inputEmail" className="form-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="inputEmail"
            onChange={this.handleChange}
            value={this.state.email}
          />
          <div id="emailHelp" className="form-text">
            Help form
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="inputPassword" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="inputPassword"
            onChange={this.handleChange}
            value={this.state.password}
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="checkbox"
            checked={this.state.isCheked}
            onChange={this.handleCheck}
          />
          <label className="form-check-label" htmlFor="checkbox">
            Check me
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
            value="male"
            checked={this.state.gender === 'male'}
            onChange={this.handleRadio}
          />
          <label class="form-check-label" for="flexRadioDefault1">
            Male
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            value="female"
            checked={this.state.gender === 'female'}
            onChange={this.handleRadio}
          />
          <label class="form-check-label" for="flexRadioDefault2">
            Female
          </label>
        </div>
        <button
          disabled={!this.state.isCheked}
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    );
  }
}

export default FormLogin;
