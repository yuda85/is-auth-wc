import{r as t,h as i,H as s}from"./p-1d1696de.js";const e=":host{display:block}";const o=class{constructor(i){t(this,i)}render(){return i(s,null,i("ic-login",null))}};o.style=e;const r=":host{display:block;font-family:Arial, sans-serif}form{max-width:400px;margin:0 auto;padding:20px;background-color:#f5f5f5;border-radius:8px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1)}label{display:block;margin-bottom:17px;font-weight:bold;color:#333;position:relative}label .error{transition:0.2s all ease;font-size:12px;color:rgb(255, 109, 109);position:absolute;left:0;bottom:0px;opacity:0;transition:0.2s all ease}label .error--active{opacity:1;bottom:-7px}input[type=text],input[type=email],input[type=checkbox]{width:100%;padding:10px;border:1px solid #ccc;border-radius:4px;box-sizing:border-box;font-size:14px;margin-bottom:10px}input[type=checkbox]{display:inline-block;margin-bottom:0}button[type=submit]{display:block;width:100%;padding:10px;background-color:#007bff;border:none;border-radius:4px;color:#fff;font-size:16px;font-weight:bold;cursor:pointer}button[type=submit]:disabled{background-color:#999;cursor:not-allowed}button[type=submit]:hover:enabled{background-color:#0056b3}";const a=class{constructor(i){t(this,i);this.name="";this.email="";this.checkbox=false;this.isFormValid=false;this.nameError="";this.emailError="";this.checkboxError=""}validateName(){if(!this.name){this.nameError="Name is required.";return false}if(!/^[A-Za-z]+$/.test(this.name)){this.nameError="Invalid name format.";return false}this.nameError="";return true}validateEmail(){if(!this.email){this.emailError="Email is required.";return false}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email)){this.emailError="Invalid email format.";return false}this.emailError="";return true}validateCheckbox(){if(!this.checkbox){this.checkboxError="Checkbox must be checked.";return false}this.checkboxError="";return true}handleSubmit(t){t.preventDefault();if(this.validateName()&&this.validateEmail()&&this.validateCheckbox()){console.log("Form submitted",this.name,this.email,this.checkbox)}}handleNameChange(t){this.name=t.target.value;this.isFormValid=this.validateName()&&this.validateEmail()&&this.validateCheckbox()}handleEmailChange(t){this.email=t.target.value;this.isFormValid=this.validateName()&&this.validateEmail()&&this.validateCheckbox()}handleCheckboxChange(t){this.checkbox=t.target.checked;this.isFormValid=this.validateName()&&this.validateEmail()&&this.validateCheckbox()}render(){return i("form",{onSubmit:t=>this.handleSubmit(t)},i("h2",null,"Form Validation"),i("label",null,"Full Name:",i("input",{type:"text",value:this.name,onInput:t=>this.handleNameChange(t)}),i("span",{class:{error:true,"error--active":!!this.nameError}},this.nameError)),i("label",null,"Email:",i("input",{type:"email",value:this.email,onInput:t=>this.handleEmailChange(t)}),i("span",{class:{error:true,"error--active":!!this.emailError}},this.emailError)),i("label",null,i("input",{type:"checkbox",checked:this.checkbox,onChange:t=>this.handleCheckboxChange(t)}),"I agree to the terms and conditions"),i("button",{type:"submit",disabled:!this.isFormValid},"Submit"))}};a.style=r;export{o as ic_container,a as ic_login};
//# sourceMappingURL=p-ba8267c4.entry.js.map