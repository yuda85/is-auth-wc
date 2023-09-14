import { h } from "@stencil/core";
export class IcLogin {
  constructor() {
    this.name = '';
    this.email = '';
    this.checkbox = false;
    this.isFormValid = false;
    this.nameError = '';
    this.emailError = '';
    this.checkboxError = '';
  }
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
  handleSubmit(e) {
    e.preventDefault();
    if (this.validateName() && this.validateEmail() && this.validateCheckbox()) {
      // All validations pass, you can submit the form here
      console.log('Form submitted', this.name, this.email, this.checkbox);
    }
  }
  handleNameChange(e) {
    this.name = e.target.value;
    this.isFormValid = this.validateName() && this.validateEmail() && this.validateCheckbox();
  }
  handleEmailChange(e) {
    this.email = e.target.value;
    this.isFormValid = this.validateName() && this.validateEmail() && this.validateCheckbox();
  }
  handleCheckboxChange(e) {
    this.checkbox = e.target.checked;
    this.isFormValid = this.validateName() && this.validateEmail() && this.validateCheckbox();
  }
  render() {
    return (h("form", { onSubmit: e => this.handleSubmit(e) }, h("h2", null, "Form Validation"), h("label", null, "Full Name:", h("input", { type: "text", value: this.name, onInput: e => this.handleNameChange(e) }), h("span", { class: { 'error': true, 'error--active': !!this.nameError } }, this.nameError)), h("label", null, "Email:", h("input", { type: "email", value: this.email, onInput: e => this.handleEmailChange(e) }), h("span", { class: { 'error': true, 'error--active': !!this.emailError } }, this.emailError)), h("label", null, h("input", { type: "checkbox", checked: this.checkbox, onChange: e => this.handleCheckboxChange(e) }), "I agree to the terms and conditions"), h("button", { type: "submit", disabled: !this.isFormValid }, "Submit")));
  }
  static get is() { return "ic-login"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["ic-login.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["ic-login.css"]
    };
  }
  static get states() {
    return {
      "name": {},
      "email": {},
      "checkbox": {},
      "isFormValid": {},
      "nameError": {},
      "emailError": {},
      "checkboxError": {}
    };
  }
}
//# sourceMappingURL=ic-login.js.map
