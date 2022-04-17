const express = require("express");
const router = express.Router();
const Flat = require("../models/flat_Model");
const CRUD_controller = require("./CRUD");

router.post("/", CRUD_controller(Flat).post);
router.get("/", CRUD_controller(Flat).getAll);
router.get("/:id", async (req, res) => {
  try {
    const flat = await Flat.findById(req.params.id)
      .populate([{ path: "user_tenant_id" },{ path: "user_owner_id" }])
      .lean()
      .exec();
    return res.status(201).send(flat);
  } catch (err) {
    console.log(err);
    return res.status(500).send(err);
  }
});

module.exports = router;
