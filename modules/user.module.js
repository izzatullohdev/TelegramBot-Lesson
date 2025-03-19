const pool = require("../config/db.config");

module.exports = class User {
  constructor(userid, username, phonenumber) {
    this.userid = userid;
    this.username = username;
    this.phonenumber = phonenumber;
  }

  async save() {
    await pool.query(
      `INSERT INTO users (userid, username, phonenumber) VALUES ($1, $2, $3) RETURNING *`,
      [this.userid, this.username, this.phonenumber]
    );
  }
};
