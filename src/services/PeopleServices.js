const Services = require("./Services.js");

class PeopleServices extends Services {
  constructor() {
    super("People");
  }

  async getEnrollmentStudent(id) {
    const student = await super.getById(id);
    //const enrollmentList = await student.get__();
    return enrollmentList;
  }
}

module.exports = PeopleServices;
