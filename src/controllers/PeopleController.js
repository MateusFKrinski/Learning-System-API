const Controller = require("./Controller.js");
const PeopleServices = require("../services/PeopleServices.js");

const peopleServices = new PeopleServices();

class PeopleController extends Controller {
  constructor() {
    super(peopleServices);
  }

  async getEnrollment(req, res) {
    const { studentId } = req.params;
    try {
      const enrollment = await peopleServices.getEnrollmentStudent(
        Number(studentId),
      );
      return res
        .status(200)
        .json({ status: 200, message: "found", data: enrollment });
    } catch (e) {}
  }
}

module.exports = PeopleController;
