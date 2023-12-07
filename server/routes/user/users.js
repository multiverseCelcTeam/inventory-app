const express = require("express");
const usersRouter  = express.Router();
const { User } = require("../../models");
const { check, validationResult } = require('express-validator');
const { use } = require("../item/items");

usersRouter.get("/", async (req, res, next) => {
    try {
      const users = await User.findAll();
      res.send(users);
    } catch (error) {
      next(error);
    }
  });
  
  usersRouter.get("/:id", async (req, res, next) => {
    try {
      const user = await User.findByPk(req.params.id);
      res.send(user);
    } catch (error) {
      next(error);
    }
  });


  usersRouter.post("/", async (req, res, next) => {
      try{
        const newUser = await User.create(req.body);
        res.json(newUser);
      }
      catch(error){
        next(error);
      }
  });


  usersRouter.delete("/:id", async (req, res, next) => {
    try{
      const user = await User.findByPk(req.params.id);
      await user.destroy();
      res.json({ message: "Deleted user with id: " + req.params.id });
    }
    catch(error){
      next(error);
    }
  });


  module.exports = usersRouter;

