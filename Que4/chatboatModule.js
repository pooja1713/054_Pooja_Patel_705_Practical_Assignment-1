module.exports.ChatbotReply = function (message) {
  this.Bot_Age_rep = 21;
  this.Bot_Name_rep = "pooja";
  this.Bot_University_rep = "VNSGU";
  this.Bot_Country_rep = "India";

  if (
    message.indexOf("hi") > -1 ||
    message.indexOf("hello") > -1 ||
    message.indexOf("welcome") > -1
  ) {
    return "Hi!";
  } else if (
    message.indexOf("what") > -1 &&
    message.indexOf("is") &&
    message.indexOf("your") &&
    message.indexOf("name")
  ) {
    return "I'm " + this.Bot_Name_rep;
  } else if (message.indexOf("your") > -1 && message.indexOf("age")) {
    return "I'm " + this.Bot_Age_rep;
  } else if (
    message.indexOf("how") > -1 &&
    message.indexOf("are") &&
    message.indexOf("you")
  ) {
    return "I'm fine ^_^";
  } else if (
    message.indexOf("where") > -1 &&
    message.indexOf("are") &&
    message.indexOf("you") &&
    message.indexOf("live")
  ) {
    return "I live in " + this.Bot_Country_rep;
  } else if (message.indexOf("bye") > -1) {
    return "Thank You For use My chat boat ";
  }
  return "Sorry, I didn't get it :( ";
};
