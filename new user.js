const d = require('discord.js');

module.exports = {
  "newUser": function (member) {
    member = member.user;
    return {
      "username": member.username,
      "id": member.id,
      "credits": 0,
      "xp": 0,
      "level": 1
            }
  }
}