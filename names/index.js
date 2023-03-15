const peopleNameList = require("../country/state/city/index.js");
const peopleFirstNames = require("../utilities/utils/index.js");

const getPeopleInCity = (peopleNameList) => {
  return peopleFirstNames(peopleNameList);
};
module.exports = getPeopleInCity;
