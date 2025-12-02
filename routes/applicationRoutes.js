const express = require("express");
const {
  submitApplication,
  getAllApplications,
  getApplicationsByJob,
  updateApplicationStatus,
  deleteApplication,
  getSignedResumePdfLink,
  deleteAllApplications,
  getApplicationsByUser,
  getDetailsOfApplication
} = require("../controllers/applicationController");
const fileUpload = require("express-fileupload");
const {protect} = require("../middleware/authMiddleware");
const router = express.Router();

router.use(fileUpload({
  useTempFiles: true,
  tempFileDir: "/tmp",
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  abortOnLimit: true,
  responseOnLimit: "File size too large"
}));

// Routes
router.post("/", submitApplication);
router.get("/email/:email", protect, getApplicationsByUser);
router.get("/:id", protect, getDetailsOfApplication);
router.get("/pdf/:publicId", protect, getSignedResumePdfLink);
router.get("/", protect, getAllApplications);
router.delete("/deleteall", protect, deleteAllApplications);
router.get("/job/:jobId", protect, getApplicationsByJob);
router.put("/:id/status", protect, updateApplicationStatus);
router.delete("/:id", protect, deleteApplication);


module.exports = router;