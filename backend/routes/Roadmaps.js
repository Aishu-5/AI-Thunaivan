const express = require('express');
const router = express.Router();
const { createRoadmap, deleteRoadmap, getAllRoadmap, getRoadmap, updateRoadmap } = require("../controllers/RoadmapController");

// {ROADMAP}
//CREATE
router.post("/addRoadmap", createRoadmap);
//UPDATE
router.put("/:id", updateRoadmap)
//DELETE
router.delete("/:id", deleteRoadmap)
//GET
router.get("/:id", getRoadmap)
//GET ALL
router.get("/", getAllRoadmap)


module.exports = router;
