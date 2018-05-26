const $ = require('jquery');

const func = (prop) => {
  $('.btn').on('click', () => {
    $(prop).slideToggle(() => {
    });
  });
};

module.exports = func;
