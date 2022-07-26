const AbstractManager = require("./AbstractManager");

class UsersManager extends AbstractManager {
  static table = "user";

  insert(user) {
    return this.connection.query(
      `insert into ${UsersManager.table} (firstname, lastname, phoneNumber, email, city, question, password, role, signupDate) values (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        user.firstname,
        user.lastname,
        user.phoneNumber,
        user.email,
        user.city,
        user.question,
        user.password,
        user.role,
        user.signupDate,
      ]
    );
  }

  findByEmail(user) {
    return this.connection
      .query(`SELECT * FROM ${UsersManager.table} WHERE email = ?`, [
        user.email,
      ])
      .then((res) => res[0]);
  }

  findById(userId) {
    return this.connection
      .query(`SELECT * FROM ${UsersManager.table} WHERE id = ?`, [userId])
      .then((res) => res[0]);
  }

  updateInfos(user) {
    return this.connection.query(
      `update ${UsersManager.table} set phoneNumber = ?, email = ? where id = ?, city = ? where id = ?`,
      [user.phoneNumber, user.email, user.city, user.id]
    );
  }

  updatePassword(user) {
    return this.connection.query(
      `update ${UsersManager.table} set password = ? where id = ?`,
      [user.password, user.id]
    );
  }
}

module.exports = UsersManager;
