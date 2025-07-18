const { Router } = require("express");
const PeopleController = require("../controllers/PeopleController.js");
const EnrollmentController = require("../controllers/EnrollmentController");

const peopleController = new PeopleController();
const enrollmentController = new EnrollmentController();

const router = Router();

router.get("/people", (req, res) => peopleController.getAll(req, res));
router.get("/people/:id", (req, res) => peopleController.getById(req, res));
router.post("/people", (req, res) => peopleController.create(req, res));
router.put("/people/:id", (req, res) => peopleController.update(req, res));
router.delete("/people/:id", (req, res) => peopleController.delete(req, res));
router.get("/people/:studentId/enrollment", (req, res) =>
  peopleController.getEnrollment(req, res),
);
router.post("/people/:studentId/enrollment", (req, res) =>
  enrollmentController.create(req, res),
);

module.exports = router;
