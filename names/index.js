const people = require("../country/state/city/index");
const getFirstNames = require("../utilities/utils/index");

function getPeopleInCity(people) {
  return getFirstNames(people);
}

module.exports = getPeopleInCity;
