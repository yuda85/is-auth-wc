export declare class IcLogin {
  name: string;
  email: string;
  checkbox: boolean;
  isFormValid: boolean;
  nameError: string;
  emailError: string;
  checkboxError: string;
  name2: string;
  validateName(): boolean;
  validateEmail(): boolean;
  validateCheckbox(): boolean;
  handleSubmit(e: Event): void;
  handleNameChange(e: Event): void;
  handleEmailChange(e: Event): void;
  handleCheckboxChange(e: Event): void;
  render(): any;
}
