const express = require("express");

const {
    getDonation,
    addDonation,
    getDonations,
    deleteDonation,
    updateDonation
} = require("./donation.controller");
const router = express.Router();


router.get("/", getDonations);
router.get("/:id", getDonation);
router.post("/", addDonation);
router.put("/:id", updateDonation);
router.delete("/:id", deleteDonation);

module.exports = router;