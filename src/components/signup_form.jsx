import React, { Component } from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import styles from './signup_form.module.css';

class NewsLetterSignUp extends Component {
  constructor(props) {
    super(props);
    this._handleSubmit = this._handleSubmit.bind(this);
    this.state = {
      email: null,
    };
  }
  _handleSubmit = async e => {
    e.preventDefault;
    console.log(e);
    const result = await addToMailchimp(this.state.email);
    // I recommend setting `result` to React state
    // but you can do whatever you want
    console.log(result);
  };
  render() {
    return (
      <form onSubmit={this._handleSubmit} className={styles.NewsLetterSignUp}>
        <label id="signUpInputId" htmlFor="signUpInput">
          <span>Sign up to the C3 Newsletter:</span>
          <input
            id="signUpInput"
            type="email"
            name="email"
            autoComplete="email"
            placeholder="person@example.com"
          />
        </label>
        <input
          type="submit"
          name="submit"
          value="GO"
          className={styles.NewsLetterGO}
        />
      </form>
    );
  }
}

export default NewsLetterSignUp;
