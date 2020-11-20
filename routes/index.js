const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

router.use("/api", apiRoutes);

router.use(function(request, response) {
    response.sendFile(path.join(_dirname, "../client/build/index.html"))
});

module.exports = router;