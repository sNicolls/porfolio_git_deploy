var moment = require('moment');
require('moment-immutable');

var nowMoment = moment();

const DEFAULT = "DEFAULT"
const TODAY = "TODAY"
const ALLSHIFTS = "ALLSHIFTS"
const THIS_WEEK = "THIS_WEEK"
const SHIFT1 = "SHIFT1"
const SHIFT2 = "SHIFT2"
const SHIFT3 = "SHIFT3"
const WORKDAY = "WORKDAY"

module.exports.defaultTimespan = () => { return this.for(TODAY) }

module.exports.for = (name) => {

  let tsResult =
    (name === TODAY) ? today() :
    (name === ALLSHIFTS) ? today() :
    (name === TODAY) ? today() :
    (name === ALLSHIFTS) ? today() :
    (name === THIS_WEEK) ? today() :
    (name === SHIFT1) ? today() :
    (name === SHIFT2) ? today() :
    (name === SHIFT3) ? today() :
    (name === WORKDAY) ? today() :
    today() // DEFAULT

    return tsResult
};

const today = () => {
      return timespan(todayStart(), todayEnd())
}

const todayStart = () => {
    return nowMoment.utc().startOf('day')
}

const todayEnd = () => {
    return nowMoment.utc().endOf('day')
}

const timespan = (start, end) => {
      return { start: start.utc().format(), end: end.utc().format() }
}
