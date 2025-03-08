const express = require("express");
const {
  getTrips,
  detailTrip,
  addTrip,
  editTrip,
  deleteTrip,
} = require("./controller/trip");

const router = express.Router();

router.get("/trips", getTrips); // ambil semua trip
router.get("/trips/:id", detailTrip); // ambil trip berdasarkan id
router.post("/trips", addTrip); // tambah trip
router.put("/trips/:id", editTrip); // edit trip berdasarkan id
router.delete("/trips/:id", deleteTrip); // hapus trip berdasarkan id

module.exports = router;
