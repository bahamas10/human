/**
 * Print a human readable timestamp to the terminal
 * given a number representing seconds
 *
 * Author: Dave Eddy <dave@daveeddy.com>
 * Date: 8/18/2014
 * License: MIT
 */

var util = require('util');

module.exports = human;

function human(seconds) {
  if (seconds instanceof Date)
    seconds = Math.round((Date.now() - seconds) / 1000);
  var suffix = seconds < 0 ? 'from now' : 'ago';
  seconds = Math.abs(seconds);

  var times = [
    seconds / 60 / 60 / 24 / 365, // years
    seconds / 60 / 60 / 24 / 30,  // months
    seconds / 60 / 60 / 24 / 7,   // weeks
    seconds / 60 / 60 / 24,       // days
    seconds / 60 / 60,            // hours
    seconds / 60,                 // minutes
    seconds                       // seconds
  ];
  var names = ['year', 'month', 'week', 'day', 'hour', 'minute', 'second'];

  for (var i = 0; i < names.length; i++) {
    var time = Math.floor(times[i]);
    if (time > 1)
      return util.format('%d %ss %s', time, names[i], suffix);
    else if (time === 1)
      return util.format('%d %s %s', time, names[i], suffix);
  }
  return util.format('0 seconds %s', suffix);
}
