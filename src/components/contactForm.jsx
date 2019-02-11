import React from 'react';
import PropTypes from 'prop-types';
import BaseForm from './form';
import styles from './contactForm.module.css';

const SubmitButton = ({ valid, children }) => (
  <button
    className={valid ? styles.button : styles.disabledButton}
    disabled={!valid}
  >
    {children}
  </button>
);

SubmitButton.propTypes = {
  valid: PropTypes.boolean,
  children: PropTypes.string,
};

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.title = props.title;
    this.handleChange = this.handleChange.bind(this);
    this.state = { valid: false, name: '', email: '', message: '' };
  }
  handleChange(event) {
    this.setState(
      { [event.target.name]: event.target.value },
      this.validateForm
    );
  }
  validateForm() {
    const { name, email, message } = this.state;
    var valid = false;
    if (message.length > 0 && name.length > 0 && email.includes('@')) {
      valid = true;
    }
    this.setState({ valid: valid });
  }
  render() {
    return (
      <BaseForm data={this.state} formName={this.title} {...this.props}>
        <label htmlFor="name" className={styles.formLabel}>
          Name:
        </label>
        <input
          className={styles.formControl}
          type="text"
          name="name"
          id="name"
          onChange={this.handleChange}
        />
        <label htmlFor="email" className={styles.formLabel}>
          Email:
        </label>
        <input
          className={styles.formControl}
          type="email"
          name="email"
          id="email"
          onChange={this.handleChange}
        />
        <label htmlFor="message" className={styles.formLabel}>
          Message:
        </label>
        <textarea
          className={styles.formControl}
          name="message"
          rows="5"
          id="message"
          onChange={this.handleChange}
        />
        <SubmitButton valid={this.state.valid}>SEND</SubmitButton>
      </BaseForm>
    );
  }
}

export default ContactForm;

ContactForm.propTypes = {
  title: PropTypes.string,
};

// add validation to contactForm
