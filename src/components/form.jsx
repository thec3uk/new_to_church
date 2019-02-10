import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

class BaseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { status: 'pending' };
    this.props = props;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': this.props.formName,
        'to-email': this.props.toEmail,
        ...this.props.data,
      }),
    })
      .then(() => {
        this.setState({ status: 'success' });
      })
      .catch(error => this.setState({ status: 'error', error: error }));
  }

  render() {
    return (
      <Fragment>
        {this.state.status === 'success' ? (
          <p>Thank you for your message someone will be in touch soon.</p>
        ) : (
          <form
            method="POST"
            onSubmit={this.handleSubmit}
            name={this.props.formName}
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            {this.props.children}
            <input type="hidden" name="toEmail" value={this.props.toEmail} />
            <p
              style={{
                display: 'none',
              }}
            >
              <label htmlFor="bot">
                Do not fill this out if you are human:{' '}
                <input id="bot" name="bot-field" />
              </label>
            </p>
            {this.state.status === 'error' && <p>{this.state.error}</p>}
          </form>
        )}
      </Fragment>
    );
  }
}

export default BaseForm;

BaseForm.propTypes = {
  children: PropTypes.array.isRequired,
  data: PropTypes.object,
  formName: PropTypes.string,
  toEmail: PropTypes.string,
};
