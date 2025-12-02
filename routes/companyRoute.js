const express = require("express");
const router = express.Router();
const { createCompany, getCompanies,getCompany, updateCompany, deleteCompany, searchCompanies} = require("../controllers/companyController");
const { protect } = require("../middleware/authMiddleware");

router.get("/", protect, getCompanies);
router.post("/", protect, createCompany);
router.get("/search", searchCompanies);
router.get("/:id", protect, getCompany);
router.put("/:id", protect, updateCompany);
router.delete("/:id", protect, deleteCompany);

module.exports = router;