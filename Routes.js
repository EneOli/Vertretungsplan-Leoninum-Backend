module.exports = function (app)
{
    var IndexController = require("./Controller/IndexController");
    var MoodleSessionController = require("./Controller/MoodleSessionController");
    var DayController = require("./Controller/DayController");
    var SecurityController = require("./Controller/Security/SecurityController");

    app.get("/moodleSession", MoodleSessionController.onMoodleSession);
    app.get("/fetch/:day",DayController.onFetchDay);
    app.get("/", IndexController.onIndex);
    app.get("/validateSession", MoodleSessionController.validateMoodleSession);
    app.post("/encryptCredentials", SecurityController.encryptCredentials);
    app.post("/decryptCredentials", SecurityController.decryptCredentials);
};