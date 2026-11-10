import express from "express";
import * as houseController from "../controllers/houses.controller.js";

const router = express.Router();

// GET all houses
router.get("/", houseController.getAllHouses);

// GET single house by ID
router.get("/:id", houseController.getSingleHouse);

export default router;
