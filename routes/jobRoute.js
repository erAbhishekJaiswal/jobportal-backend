const express = require("express");
const router = express.Router();
const { getAllJobs, createJob, getAllJobsForAdmin, getJobById, updateJob, deleteJob } = require("../controllers/jobcontroller");
const { protect } = require("../middleware/authMiddleware");

router.get("/", getAllJobs);
router.get("/admin", protect, getAllJobsForAdmin);
router.post("/", protect, createJob);
router.get("/:id", getJobById);
router.put("/:id", protect, updateJob);
router.delete("/:id", protect, deleteJob);

module.exports = router;