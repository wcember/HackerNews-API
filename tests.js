var hn = require('./hackernews');

var assert = require('assert')

//Test getItem
var pull = hn.getItem(8863);
assert.equal(pull.by, 'dhouston');
assert.equal(pull.descendants, 71);
assert.equal(pull.id, 8863);
assert.equal(pull.score, 111);
assert.equal(pull.time, 1175714200);
assert.equal(pull.title, 'My YC app: Dropbox - Throw away your USB drive');
assert.equal(pull.type, 'story');
assert.equal(pull.url, 'http://www.getdropbox.com/u/2/screencast.html');

var pull = hn.getItem('8863');
assert.equal(pull.by, 'dhouston');
assert.equal(pull.descendants, 71);
assert.equal(pull.id, 8863);
assert.equal(pull.score, 111);
assert.equal(pull.time, 1175714200);
assert.equal(pull.title, 'My YC app: Dropbox - Throw away your USB drive');
assert.equal(pull.type, 'story');
assert.equal(pull.url, 'http://www.getdropbox.com/u/2/screencast.html');

assert.equal(hn.getItem(99999999999999999999999999999999999999999999), null)
assert.equal(hn.getItem(0), null)
assert.equal(hn.getItem(-1), null)

//Test getUser
pull = hn.getUser('wcember');
assert.equal(pull.id, 'wcember');
assert.equal(pull.created, 1382846640);
assert.equal(typeof(pull.about), 'string');
assert.equal(typeof(pull.delay), 'number');
assert.equal(typeof(pull.karma), 'number');
assert.equal(typeof(pull.submitted), 'object');

assert.equal(hn.getUser('sdfasdfasdfkjbsadflkjbasdf8rpqbldfkasdfs'), null)

//Test remaining functions
assert.equal(typeof(hn.getMaxItem()), 'number');
assert.equal(typeof(hn.getTopStories()[0]), 'number');
assert.equal(typeof(hn.getNewStories()[0]), 'number');
assert.equal(typeof(hn.getAskStories()[0]), 'number');
assert.equal(typeof(hn.getShowStories()[0]), 'number');
assert.equal(typeof(hn.getJobStories()[0]), 'number');

var pull = hn.getUpdates()
assert.equal(typeof(pull.items[0]), 'number');
assert.equal(typeof(pull.profiles[0]), 'string');

