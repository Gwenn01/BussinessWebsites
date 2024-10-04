const express = require("express");
const router = express.Router();

// this the data form database
// make a connection
const dbCon = require("./connection");
// then get the select category file
const SelectCategory = require("./selectCategory");
// make a instance of the select category object
const selectCategoryInstance = new SelectCategory(dbCon);

router.get("/display", (req, res) => {
  // call the displayAll function
  selectCategoryInstance.displayAll((err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

module.exports = router;
