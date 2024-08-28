const Roadmap = require('../models/RoadmapModel')

const createRoadmap = async (req, res, next) => {
    const newRoadmap = new Roadmap(req.body);
    try {
        const savedRoadmap = await newRoadmap.save();
        res.status(200).json(savedRoadmap)
    } catch (err) {
        next(err);
    }
}

const updateRoadmap = async (req, res, next) => {
    try {
        const updatedRoadmap = await Roadmap.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.status(200).json(updatedRoadmap)
    } catch (err) {
        next(err);
    }
}

const deleteRoadmap = async (req, res, next) => {
    try {
        await Roadmap.findByIdAndDelete(req.params.id);
        res.status(200).json("Roadmap has been deleted")
    } catch (err) {
        next(err);
    }
}

const getRoadmap = async (req, res, next) => {
    try {
        const roadmap = await Roadmap.findById(req.params.id);
        res.status(200).json(roadmap)
    } catch (err) {
        next(err);
    }
}

const getAllRoadmap = async (req, res, next) => {
    // const failed = true;
    // if(failed) return next(createError(401,"You are not authenticated"));
    try {
        const roadmaps = await Roadmap.find();
        res.status(200).json(roadmaps)
    } catch (err) {
        next(err)
    }
}

module.exports = { getAllRoadmap, getRoadmap, deleteRoadmap, updateRoadmap, createRoadmap }