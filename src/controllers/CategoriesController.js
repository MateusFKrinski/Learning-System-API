const Controller = require("./Controller.js");
const CategoriesServices = require("../services/CategoriesServices.js");

const categoriesServices = new CategoriesServices();

class CategoriesController extends Controller {
  constructor() {
    super(categoriesServices);
  }
}

module.exports = CategoriesController;
