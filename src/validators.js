class Validators {
    constructor(form) {
        this.form = form;
        this.validators = {
            name: this.validateName,
            rollNumber: this.validateRollNumber,
            checkInTime: this.validateCheckInTime,
            checkOutTime: this.validateCheckOutTime,
        };
    }

    validate(property) {
        console.log("validate", property);
        return this.validators[property](this.form);
    }

    validateName(form) {
        const pattern = /^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/;
        return pattern.test(form.name);
    }

    validateRollNumber(form) {}
    validateCheckInTime(form) {}
    validateCheckOutTime(form) {}
}

export default Validators;
