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
            case "checkOutTime":
                return this.validateCheckOutTime();
            case "checkInTime":
                return this.validateCheckInTime();
            default:
                console.log("default, property not found.", property);
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
    validateCheckInTime() {
        const checkOutTime = new Date(this.form.checkOutTime);
        const checkInTime = new Date(this.form.checkInTime);
        return checkInTime < checkOutTime;
    }
    validateCheckOutTime() {
        const formDate = new Date(this.form.checkOutTime);
        return formDate > new Date();
    }
}

export default Validators;
