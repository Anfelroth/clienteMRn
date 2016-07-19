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

}}},{"extensions":[".js",".json"]});
require("./both/posts.js");
//# sourceMappingURL=app.js.map
