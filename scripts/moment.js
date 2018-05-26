const $ = require('jquery'),
      moment = require('moment');

  const ShowData = (clock, item) => {
  let value = "";
    try {
        value = eval(item);
    } catch (err) {
        value = "*parse error*";
    }
  const msg =  "<span class='span_desc'>" + value + "</span>";
  $(clock).append(msg);
};

module.exports = ShowData;

