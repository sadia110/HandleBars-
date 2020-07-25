// IMPORT ORM CONNECTIONconnection 
config = require('../config/connection.js');

// CALL ORM FUNCTION
var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },

  // inserting a new burger logic
  create: function(objColVal, condition, cb) {
    orm.create("burgers", objColVal, condition, function(res) {
      cb(res);
    });
  },
  // updating burger logic
  update: function(cols, value, cb) {
    orm.update("burgers", cols, value, function(res) {
      cb(res);
    });
  }
};
module.exports = burger;