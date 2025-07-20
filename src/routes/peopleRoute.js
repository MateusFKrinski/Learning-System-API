const { Router } = require("express");
const PeopleController = require("../controllers/PeopleController.js");
const EnrollmentController = require("../controllers/EnrollmentController");

const peopleController = new PeopleController();
const enrollmentController = new EnrollmentController();

const router = Router();

router.get("/people", (req, res) => peopleController.getAll(req, res));
router.get("/people/all", (req, res) =>
  peopleController.getAllRecords(req, res),
);
router.get("/people/enrollment/all", (req, res) =>
  peopleController.getAllEnrollment(req, res),
);
router.get("/people/:id", (req, res) => peopleController.getById(req, res));
router.get("/people/:student_id/enrollment", (req, res) =>
  peopleController.getActiveEnrollment(req, res),
);
router.get("/people/:student_id/enrollment/actives", (req, res) =>
  enrollmentController.getEnrollmentStudent(req, res),
);
router.get("/people/:student_id/enrollment/:id", (req, res) =>
  enrollmentController.getByParams(req, res),
);
router.post("/people", (req, res) => peopleController.create(req, res));
router.post("/people/enrollment", (req, res) =>
  enrollmentController.create(req, res),
);
router.put("/people/enrollment/:id", (req, res) =>
  enrollmentController.update(req, res),
);
router.put("/people/:id", (req, res) => peopleController.update(req, res));
router.delete("/people/enrollment/:id", (req, res) =>
  enrollmentController.delete(req, res),
);
router.delete("/people/:id", (req, res) => peopleController.delete(req, res));

module.exports = router;
