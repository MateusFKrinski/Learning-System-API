const Controller = require("./Controller.js");
const PeopleServices = require("../services/PeopleServices.js");

const peopleServices = new PeopleServices();

class PeopleController extends Controller {
  constructor() {
    super(peopleServices);
  }

  async getActiveEnrollment(req, res) {
    const { student_id } = req.params;
    try {
      const enrollment = await peopleServices.getEnrollmentStudent(
        Number(student_id),
      );
      return res
        .status(200)
        .json({ status: 200, message: "found", data: enrollment });
    } catch (e) {
      return res.status(500).json({ status: 500, message: e.message });
    }
  }

  async getAllEnrollment(req, res) {
    try {
      const enrollment = await peopleServices.getAllEnrollmentStudent();
      return res
        .status(200)
        .json({ status: 200, message: "found", data: enrollment });
    } catch (e) {
      return res.status(500).json({ status: 500, message: e.message });
    }
  }

  async getAllRecords(req, res) {
    try {
      const data = await peopleServices.getAllRecords();
      return res.status(200).json({ status: 200, message: "found", data });
    } catch (e) {
      return res.status(500).json({ status: 500, message: e.message });
    }
  }
}

module.exports = PeopleController;
