const announcements = require("./announcements.json");
const calendar = require("./calendar.json");
const controls = require("./controls.json");
const patients = require("./patients.json");
const treatments = require("./treatments.json");
// Something more

module.exports = () => ({
  announcements: announcements,
  calendar: calendar,
  controls: controls,
  patients: patients,
  treatments: treatments,
  // Something more
});
