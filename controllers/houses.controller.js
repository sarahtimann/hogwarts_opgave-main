import * as housesRepository from "../repositories/houses.repository.js";

import HTTPError from "../errorhandling/HTTPError.js";

// ALL HOUSES
export const getAllHouses = async (req, res) => {
  const allHouses = await housesRepository.getAllHouses();
  console.log("allHouses:", allHouses);
  res.json(allHouses);
};

// SINGLE HOUSE
export async function getSingleHouse(req, res) {
  const id = req.params.id;
  const house = await housesRepository.getHouseById(id);

  if (house) {
    return res.status(200).json(house);
  }
  throw new HTTPError(404, "House not found.");
}
