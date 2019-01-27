const fs = require('fs');
const path = require('path');

const DATA_PATH = './data/'
const FILE_TYPE = '.json'
const resourcePathfor = (name) => { return './' + path.join('data', (name + '.json')) }

const CATEGORIES_RESOURCE = resourcePathfor('Categories')
const TYPES_RESOURCE = resourcePathfor('Types')
const SUBJECTS_RESOURCE = resourcePathfor('Subjects')
const EVENTS_RESOURCE = resourcePathfor('Events')
const USERS_RESOURCE = resourcePathfor('Users')
const USER_DEFAULTS_RESOURCE = resourcePathfor('UserDefaults')
const TIMESPAN_RESOURCE = resourcePathfor('Timespans')

module.exports.categories = () => { return readEntries(CATEGORIES_RESOURCE) }
module.exports.types = () => { return readEntries(TYPES_RESOURCE) }
module.exports.subjects = () => { return readEntries(SUBJECTS_RESOURCE) }
module.exports.timespans = () => { return readEntries(TIMESPAN_RESOURCE) }
module.exports.events = () => { return readEntries(EVENTS_RESOURCE) }
module.exports.users = () => { return readEntries(USERS_RESOURCE) }

module.exports.category = (id) => { return forID(CATEGORIES_RESOURCE, id) }
module.exports.type = (id) => { return forID(TYPES_RESOURCE, id) }
module.exports.subject = (id) => { return forID(SUBJECTS_RESOURCE, id) }
module.exports.timespan = (id) => { return forID(TIMESPAN_RESOURCE, id) }
module.exports.user = (id) => { return forID(USERS_RESOURCE, id);}
module.exports.userForLoginID = (loginID) => { return forAttribute(USERS_RESOURCE, 'loginID', loginID);}
module.exports.defaultsForUser = (userID) => { return forAttribute(USER_DEFAULTS_RESOURCE, 'userID', userID) }

readEntries = (resource) => {
  console.log('readEntries: ' + resource)
  return JSON.parse(fs.readFileSync(resource, 'utf8'))
}

readEntry = (resource) => {
  console.log('readEntry: ' + resource)
  return readEntries(resource)
}

forAttribute = (resource, attribute, value) => {
  console.log('forAttribute: ' + resource + ', ' + attribute + ', ' + value)
  return readEntries(resource).entries.filter( entry => entry[attribute] === value )[0]
}

forID = (resource, id) => {
  console.log('forID: ' + resource + ', ' + id)
  return forAttribute(resource, 'ID', id)
}

writeEntry = (resource, entry) =>{

  console.log('writeEntry: ' + resource + ', ' + entry)

  var data = readEntries(resource)
  data.entries.push(entry)

  fs.writeFileSync(resource, JSON.stringify(data), "utf8", function(err) {
      if (err) throw err
  })

  return data
}
