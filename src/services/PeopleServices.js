const Services = require("./Services.js");

class PeopleServices extends Services {
  constructor() {
    super("People");
  }

  async getEnrollmentStudent(id) {
    const student = await super.getById(id);
    return await student.getActiveEnrollment();
  }

  async getAllEnrollmentStudent() {
    const students = await super.getAllRecords();

    const data = await Promise.all(
      students.map(async (student) => {
        const enrollments = await student.getAllEnrollment();
        return enrollments.length > 0
          ? {
              ...student.get({ plain: true }),
              enrollments,
            }
          : null;
      }),
    );

    return data.filter(Boolean);
  }

  async getAllRecords() {
    return await super.getAllRecords("allRecords");
  }
}

module.exports = PeopleServices;
