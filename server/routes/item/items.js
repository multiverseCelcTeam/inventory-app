const express = require("express");
const router = express.Router();
const { Item } = require("../../models");

// GET /sauce
router.get("/", async (req, res, next) => {
  try {
    const items = await Item.findAll();
    res.send(items);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const item = await Item.findByPk(req.params.id);
    res.send(item);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req,res, next) => {
  try{
    const newItem = await Item.create(req.body);
    res.json(newItem);
  }
  catch(error){
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const item = await Item.findByPk(req.params.id);
    const updatedItem = await item.update(req.body, { where:{ id: req.params.id } });
    res.send(updatedItem);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try{
    const item = await Item.findByPk(req.params.id);
    await item.destroy();
    res.sendStatus(200);
  }
  catch(error){
    next(error);
  }
});

module.exports = router;
