class Controller {
  constructor(entityService) {
    this.entityService = entityService;
  }

  async getAll(req, res) {
    try {
      const data = await this.entityService.getAll();
      return res.status(200).json({ status: 200, message: "found", data });
    } catch (e) {
      return res.status(500).json({ status: 500, message: e.message });
    }
  }

  async getById(req, res) {
    const { id } = req.params;
    try {
      const data = await this.entityService.getById(Number(id));
      if (!data) {
        return res
          .status(400)
          .json({ status: 400, message: "has not been found" });
      }
      return res.status(200).json({ status: 200, message: "found", data });
    } catch (e) {
      return res.status(500).json({ status: 500, message: e.message });
    }
  }

  async create(req, res) {
    const createData = req.body;
    try {
      const data = await this.entityService.create(createData);
      const db = await this.entityService.getById(Number(data.id));
      return res
        .status(201)
        .json({ status: 201, message: "created", data: db });
    } catch (e) {
      return res.status(500).json({ status: 500, message: e.message });
    }
  }

  async update(req, res) {
    const { id } = req.params;
    const updateData = req.body;
    try {
      const data = await this.entityService.update(updateData, Number(id));
      if (!data) {
        return res
          .status(400)
          .json({ status: 400, message: "has not been updated" });
      }
      const db = await this.entityService.getById(Number(id));
      return res
        .status(200)
        .json({ status: 200, message: "updated", data: db });
    } catch (e) {
      return res.status(500).json({ status: 500, message: e.message });
    }
  }

  async delete(req, res) {
    const { id } = req.params;
    try {
      await this.entityService.delete(Number(id));
      return res.status(200).json({ status: 200, message: "deleted" });
    } catch (e) {
      return res.status(500).json({ status: 500, message: e.message });
    }
  }
}

module.exports = Controller;
