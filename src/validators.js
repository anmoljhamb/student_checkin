class Validators {
    constructor(form, students) {
        this.students = students;
        this.form = form;
    }

    validate(property) {
        console.log("validate", property);
        switch (property) {
            case "name":
                return this.validateName();
            case "rollNumber":
                // console.log("gotFunc", this.validateRollNumber());
                return this.validateRollNumber();
            default:
                console.log(property);
                return true;
        }
    }

    validateName() {
        const pattern = /^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/;
        return pattern.test(this.form.name);
    }

    validateRollNumber() {
        for (let key of Object.keys(this.students)) {
            if (key === this.form.rollNumber) {
                return false;
            }
        }
        return true;
    }
    validateCheckInTime(form) {}
    validateCheckOutTime(form) {}
}

export default Validators;
