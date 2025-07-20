const { Op } = require("sequelize");
const Controller = require("./Controller.js");
const CoursesServices = require("../services/CoursesServices.js");

const coursesServices = new CoursesServices();

class CoursesController extends Controller {
  constructor() {
    super(coursesServices);
  }

  async getAll(req, res) {
    const { from, to } = req.query;
    const where = {};
    from && to
      ? (where.start_data = {
          [Op.gte]: from,
          [Op.lte]: to,
        })
      : where;
    try {
      const data = await coursesServices.getAll(where);
      return res.status(200).json({ status: 200, message: "found", data });
    } catch (e) {
      return res.status(500).json({ status: 500, message: e.message });
    }
  }
}

module.exports = CoursesController;
