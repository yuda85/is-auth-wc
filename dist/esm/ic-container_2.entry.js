import { r as registerInstance, h, H as Host } from './index-c96b2028.js';

const icContainerCss = ":host{display:block}";

const IcContainer = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("ic-login", null)));
  }
};
IcContainer.style = icContainerCss;

const icLoginCss = ":host{display:block;font-family:Arial, sans-serif}form{max-width:400px;margin:0 auto;padding:20px;background-color:#f5f5f5;border-radius:8px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1)}label{display:block;margin-bottom:17px;font-weight:bold;color:#333;position:relative}label .error{transition:0.2s all ease;font-size:12px;color:rgb(255, 109, 109);position:absolute;left:0;bottom:0px;opacity:0;transition:0.2s all ease}label .error--active{opacity:1;bottom:-7px}input[type=text],input[type=email],input[type=checkbox]{width:100%;padding:10px;border:1px solid #ccc;border-radius:4px;box-sizing:border-box;font-size:14px;margin-bottom:10px}input[type=checkbox]{display:inline-block;margin-bottom:0}button[type=submit]{display:block;width:100%;padding:10px;background-color:#007bff;border:none;border-radius:4px;color:#fff;font-size:16px;font-weight:bold;cursor:pointer}button[type=submit]:disabled{background-color:#999;cursor:not-allowed}button[type=submit]:hover:enabled{background-color:#0056b3}";

const IcLogin = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.name = '';
    this.email = '';
    this.checkbox = false;
    this.isFormValid = false;
    this.nameError = '';
    this.emailError = '';
    this.checkboxError = '';
    this.name2 = 'judah';
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
    return (h("form", { onSubmit: e => this.handleSubmit(e) }, h("h2", null, "Form Validation ", this.name2), h("label", null, "Full Name:", h("input", { type: "text", value: this.name, onInput: e => this.handleNameChange(e) }), h("span", { class: { 'error': true, 'error--active': !!this.nameError } }, this.nameError)), h("label", null, "Email:", h("input", { type: "email", value: this.email, onInput: e => this.handleEmailChange(e) }), h("span", { class: { 'error': true, 'error--active': !!this.emailError } }, this.emailError)), h("label", null, h("input", { type: "checkbox", checked: this.checkbox, onChange: e => this.handleCheckboxChange(e) }), "I agree to the terms and conditions"), h("button", { type: "submit", disabled: !this.isFormValid }, "Submit")));
  }
};
IcLogin.style = icLoginCss;

export { IcContainer as ic_container, IcLogin as ic_login };

//# sourceMappingURL=ic-container_2.entry.js.map