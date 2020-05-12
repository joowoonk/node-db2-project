const express = require("express");
const knex = require("knex");

const db = require("../data/dbConnection.js");

const router = express.Router();

router.get("/", (req, res) => {
  db("cars")
    .then((cars) => {
      res.json(cars);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to retrieve cars" });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  db("cars")
    .where({ id })
    .first()
    .then((car) => {
      res.json(car);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to retrieve car" });
    });
});

router.post("/", (req, res) => {
  const carsData = req.body;
  console.log("post");
  db("cars")
    .insert(carsData)
    .then((ids) => {
      db("cars").then((newCarEntry) => {
        res.status(201).json({ data: newCarEntry });
      });
    })
    .catch((err) => {
      console.log("POST error", err);
      res.status(500).json({ message: "Failed to store data" });
    });
});

module.exports = router;
