const router = require("express").Router();
const axios = require("axios")
const googleRoutes = require("./google")

// google routes
router.use("/google", googleRoutes);

module.exports = router