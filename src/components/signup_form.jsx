import React, { Component } from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';

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
    const result = await addToMailchimp(this.state.email);
    // I recommend setting `result` to React state
    // but you can do whatever you want
  };
  render() {
    return (
      <div className="NewsLetterSignUp">
        <img
          src="/Images/Content/4/Templates/49141/images/IconMail.png"
          alt="Newsletter Signup"
        />
        <form onSubmit={this._handleSubmit}>
          <input
            type="email"
            name="email"
            autoComplete="email"
            placeholder="Sign up to the C3 Newsletter"
          />
          <input
            type="submit"
            name="submit"
            value="GO"
            className="NewsLetterGO"
          />
        </form>
      </div>
    );
  }
}

export default NewsLetterSignUp;
