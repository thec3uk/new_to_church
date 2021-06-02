import React, { Component, Fragment } from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import * as styles from './signup_form.module.css';

class NewsLetterSignUp extends Component {
  constructor(props) {
    super(props);
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleEmailChange = this._handleEmailChange.bind(this);
    this.state = {
      email: null,
    };
  }
  _postEmailToMailchimp = (email, attributes) => {
    addToMailchimp(email, attributes)
      .then(result => {
        // Mailchimp always returns a 200 response
        // So we check the result for MC errors & failures
        if (result.result !== 'success') {
          this.setState({
            status: 'error',
            msg: result.msg,
          });
        } else {
          // Email address succesfully subcribed to Mailchimp
          this.setState({
            status: 'success',
            msg: result.msg,
          });
        }
      })
      .catch(err => {
        // Network failures, timeouts, etc
        this.setState({
          status: 'error',
          msg: err,
        });
      });
  };
  _handleSubmit = e => {
    e.preventDefault();
    e.stopPropagation();
    this.setState(
      {
        status: 'sending',
        msg: null,
      },
      // setState callback (subscribe email to MC)
      this._postEmailToMailchimp(this.state.email, {
        SIGNUPURL: document.location.pathname,
        SOURCE: 'website signup',
      })
    );
  };
  _handleEmailChange = e => {
    this.setState({ email: e.target.value });
  };
  render() {
    return (
      <form method="post" className={styles.NewsLetterSignUp}>
        {this.state.status === 'success' ? (
          <div className={styles.successMessage}>{this.state.msg}</div>
        ) : (
          <Fragment>
            <label id="signUpInputId" htmlFor="signUpInput">
              <span>Sign up to the C3 Newsletter:</span>
              <input
                id="signUpInput"
                type="email"
                name="email"
                autoComplete="email"
                placeholder="person@example.com"
                onChange={this._handleEmailChange}
              />
            </label>
            <input
              type="submit"
              name="submit"
              value="GO"
              className={styles.NewsLetterGO}
              onClick={this._handleSubmit}
            />
            {this.state.status === 'error' && (
              <div
                dangerouslySetInnerHTML={{ __html: this.state.msg }}
                className={styles.errorMessage}
              />
            )}
          </Fragment>
        )}
      </form>
    );
  }
}

export default NewsLetterSignUp;
