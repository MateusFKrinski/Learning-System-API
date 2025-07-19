const Services = require("./Services.js");

class PeopleServices extends Services {
  constructor() {
    super("People");
  }

  async getEnrollmentStudent(id) {
    const student = await super.getById(id);
    console.log(typeof student.getEnrollment);
    return await student.getEnrollment();
  }
}

module.exports = PeopleServices;
