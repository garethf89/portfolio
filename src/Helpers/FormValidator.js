import validator from 'validator';

class FormValidator {
  constructor(state) {
    this.state = state;
  }

  validate = state => {
    let validation = this.reset();
    this.state.forEach(check => {    
      
      const args = check.args || [];
      const test = validator[check.method];
            
      const result = test(state[check.field].toString(), ...args, state);
      const isValid = (result === check.validWhen ? true : false);
      
      if(!isValid){
        validation[check.field] = { isValid: isValid, message: check.message }
        validation.isValid = false;
      }

    });

    return validation;
  }

  reset = () => {
    const validation = {}

    this.state.map(v => (
      validation[v.field] = { isValid: true }
    ));

    return { isValid: true, ...validation };
  }

}

export default FormValidator;