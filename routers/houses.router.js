import express from "express";
import * as houseController from "../controllers/houses.controller.js";

const housesRouter = express.Router();

// GET all houses
housesRouter.get("/houses", houseController.getAllHouses);

// GET single house by ID
housesRouter.get("/houses/:id", houseController.getSingleHouse);

export default housesRouter;
