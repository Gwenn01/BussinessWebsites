module.exports = class SelectCategory {
  // constructor to get the connection in the database
  constructor(dbCon) {
    this.dbCon = dbCon;
  }
  // query all data in the database
  displayAll(callback) {
    this.dbCon.query("SELECT * FROM product", (err, result) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, { data: result });
      }
    });
  }
  // get the specific category in the database
  displayCategory(category, callback) {
    this.dbCon.query(
      `SELECT p.product_name, p.product_description, p.product_price, p.product_image
        FROM category AS c 
        LEFT JOIN product p ON p.category_id = c.category_id
        WHERE c.category_name = '${category}';`,
      (err, result) => {
        if (err) {
          callback(err, null);
        } else {
          callback(null, { data: result });
        }
      }
    );
  }
};
