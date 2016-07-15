var require = meteorInstall({"both":{"posts.js":function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// both/posts.js                                                     //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
Posts = new Mongo.Collection('posts');                               // 1
                                                                     //
Meteor.methods({                                                     // 3
  'addPost': function addPost() {                                    // 4
    Posts.insert({ title: 'Post ' + Random.id() });                  // 5
  },                                                                 // 6
                                                                     //
  'deletePost': function deletePost() {                              // 8
    var post = Posts.findOne();                                      // 9
    if (post) {                                                      // 10
      Posts.remove({ _id: post._id });                               // 11
    }                                                                // 12
  }                                                                  // 13
});                                                                  // 3
///////////////////////////////////////////////////////////////////////

}},"server":{"app.js":function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// server/app.js                                                     //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
Meteor.startup(function () {                                         // 1
  if (Posts.find().count() === 0) {                                  // 2
    for (i = 1; i <= 10; i++) {                                      // 3
      Posts.insert({ title: 'Post ' + Random.id() });                // 4
    }                                                                // 5
  }                                                                  // 6
});                                                                  // 7
                                                                     //
Meteor.publish('posts', function () {                                // 9
  return Posts.find();                                               // 10
});                                                                  // 11
///////////////////////////////////////////////////////////////////////

}}},{"extensions":[".js",".json"]});
require("./both/posts.js");
require("./server/app.js");
//# sourceMappingURL=app.js.map
