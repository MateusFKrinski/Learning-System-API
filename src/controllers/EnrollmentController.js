const Controller = require("./Controller.js");
const EnrollmentServices = require("../services/EnrollmentServices.js");

const enrollmentServices = new EnrollmentServices();

class EnrollmentController extends Controller {
  constructor() {
    super(enrollmentServices);
  }

  async getByParams(req, res) {
    const { ...params } = req.params;
    const where = {
      student_id: Number(params.studentId),
      id: Number(params.id),
    };
    try {
      const data = await enrollmentServices.getByParams(where);
      return res.status(200).json({ status: 200, message: "found", data });
    } catch (e) {
      return res.status(500).json({ status: 500, message: e.message });
    }
  }

  async getEnrollmentStudent(req, res) {
    const { student_id } = req.params;
    try {
      const data = await enrollmentServices.getCountRegisters({
        status: "matriculado",
        student_id: Number(student_id),
      });
      return res.status(200).json({ status: 200, message: "found", data });
    } catch (e) {
      return res.status(500).json({ status: 500, message: e.message });
    }
  }
}

module.exports = EnrollmentController;
