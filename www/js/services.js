// Modelklassen

var Werkvorm = function(idd, ttl)
{
   this.id    = idd;
   this.title = ttl;
}

Werkvorm.prototype.toon = function()
{
   console.log("id " + this.id + " title " + this.title);
}

/*
var p1 = new Persoon("Jan", "Jans");
p1.toon();
var p2 = new Persoon("Peter", "Peters");
p2.toon();
*/








angular.module('t2l.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
  }];

  return {
    all: function() 
    {
      console.log("Chats.all()");
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})

.factory('Learn', function($http)
{
  // Might use a resource here that returns a JSON array
  $http.get('https://cors-test.appspot.com/test').then(function(resp) 
  {
    console.log('Success', resp);
    // For JSON responses, resp.data contains the result
  },
  function(err) 
  {
    console.error('ERR', err);
    // err.status will contain the status code
  })
  // Some fake testing data
  var werkvormen = 
  [
    new Werkvorm(9, "Denken"),
    new Werkvorm(8, "Schrijven")
  ];

  return {
    all: function() 
    {
      console.log("Learn.all()");
      var wv = new Werkvorm(7, "lezen");
      wv.toon();
      return werkvormen;
    }
  };
});
