
const resource = require ('./resource');
const time = require ('./timespans');

module.exports.forSessionLoginID = (loginID) => {

  const user = resource.userForLoginID(loginID)
  const userDefaults = resource.defaultsForUser(user.ID)
  const categories = resource.categories()
  const types = resource.types()
  const subjects = resource.subjects()
  const events = resource.events()
  const timespans = resource.timespans()
  const timespanName = resource.timespan(userDefaults.context.timespanID).name
  const timespanRange = time.for(timespanName)
  timespanRange.title = '01-27-2019'

  const context = {
    category: resource.category(userDefaults.context.categoryID),
    type: resource.type(userDefaults.context.typeID),
    subject: resource.subject(userDefaults.context.subjectID),
    timespan: resource.timespan(userDefaults.context.timespanID),
    timespanRange: timespanRange
  }

  return {

    user: user,
    userDefaults: userDefaults,
    context: context,
    categories: categories,
    types: types,
    subjects: subjects,
    timespans: timespans,
    events: events
  }

}
