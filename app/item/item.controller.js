const express = require("express");
const router = express.Router();
const {
  getAllItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem,
} = require("./item.service");
const { verifyToken, isAdmin } = require("../../middlewares/authMiddleware");

router.get("/", verifyToken, async (req, res) => {
  try {
    const items = await getAllItems();
    res.json({ status: "success", data: items });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.post("/", verifyToken, isAdmin, async (req, res) => {
  try {
    const item = await createItem(req.body);
    res.status(201).json({ status: "success", data: item });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.put("/:id", verifyToken, isAdmin, async (req, res) => {
  try {
    const item = await updateItem(req.params.id, req.body);
    res.json({ status: "success", data: item });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.delete("/:id", verifyToken, isAdmin, async (req, res) => {
  try {
    await deleteItem(req.params.id);
    res.json({ status: "success", message: "Item deleted" });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
