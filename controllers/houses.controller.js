import * as housesRepository from "../repositories/houses.repository.js";

// ALL HOUSES
export const getAllHouses = async (req, res) => {
  try {
    const allHouses = await housesRepository.getAllHouses();
    console.log("allHouses:", allHouses);
    res.json(allHouses);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error", code: err.code });
  }
};

// SINGLE HOUSE
export async function getSingleHouse(req, res) {
  try {
    const id = req.params.id;
    const house = await housesRepository.getHouseById(id);

    if (house) {
      res.status(200).json(house);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Database error" });
  }
}
