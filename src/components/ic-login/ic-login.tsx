import { Component, State, h } from '@stencil/core';

@Component({
  tag: 'ic-login',
  styleUrl: 'ic-login.scss',
  shadow: true,
})
export class IcLogin {
  @State() name: string = '';
  @State() email: string = '';
  @State() checkbox: boolean = false;
  @State() isFormValid: boolean = false;
  @State() nameError: string = '';
  @State() emailError: string = '';
  @State() checkboxError: string = '';

  validateName() {
    if (!this.name) {
      this.nameError = 'Name is required.';
      return false;
    }
    if (!/^[A-Za-z]+$/.test(this.name)) {
      this.nameError = 'Invalid name format.';
      return false;
    }
    this.nameError = '';
    return true;
  }

  validateEmail() {
    if (!this.email) {
      this.emailError = 'Email is required.';
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email)) {
      this.emailError = 'Invalid email format.';
      return false;
    }
    this.emailError = '';
    return true;
  }

  validateCheckbox() {
    if (!this.checkbox) {
      this.checkboxError = 'Checkbox must be checked.';
      return false;
    }
    this.checkboxError = '';
    return true;
  }

  handleSubmit(e: Event) {
    e.preventDefault();
    if (this.validateName() && this.validateEmail() && this.validateCheckbox()) {
      // All validations pass, you can submit the form here
      console.log('Form submitted', this.name, this.email, this.checkbox);
    }
  }

  handleNameChange(e: Event) {
    this.name = (e.target as HTMLInputElement).value;
    this.isFormValid = this.validateName() && this.validateEmail() && this.validateCheckbox();
  }

  handleEmailChange(e: Event) {
    this.email = (e.target as HTMLInputElement).value;
    this.isFormValid = this.validateName() && this.validateEmail() && this.validateCheckbox();
  }

  handleCheckboxChange(e: Event) {
    this.checkbox = (e.target as HTMLInputElement).checked;
    this.isFormValid = this.validateName() && this.validateEmail() && this.validateCheckbox();
  }

  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <h2>Form Validation</h2>
        <label>
          Name 2:
          <input type="text" value={this.name} onInput={e => this.handleNameChange(e)} />
          <span class={{ 'error': true, 'error--active': !!this.nameError }}>{this.nameError}</span>
        </label>
        <label>
          Email:
          <input type="email" value={this.email} onInput={e => this.handleEmailChange(e)} />
          <span class={{ 'error': true, 'error--active': !!this.emailError }}>{this.emailError}</span>
        </label>
        <label>
          <input type="checkbox" checked={this.checkbox} onChange={e => this.handleCheckboxChange(e)} />I agree to the terms and conditions
        </label>
        <button type="submit" disabled={!this.isFormValid}>
          Submit
        </button>
      </form>
    );
  }
}
