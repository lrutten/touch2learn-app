// Modelklassen

// Werkvorm klasse

var Werkvorm = function(idd, ttl, bdy)
{
   this.id    = idd;
   this.title = ttl;
   this.body  = bdy;
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

// Woord klasse

var Woord = function(wrd)
{
   this.tekst = wrd;
}

Woord.prototype.toon = function()
{
   console.log("Woord " + this.tekst);
}

/*
 * Voorbeeld

 http://www.mojavelinux.com/articles/javascript_hashes.html

function HashTable(obj)
{
    this.length = 0;
    this.items = {};
    for (var p in obj) {
        if (obj.hasOwnProperty(p)) {
            this.items[p] = obj[p];
            this.length++;
        }
    }

    this.setItem = function(key, value)
    {
        var previous = undefined;
        if (this.hasItem(key)) {
            previous = this.items[key];
        }
        else {
            this.length++;
        }
        this.items[key] = value;
        return previous;
    }

    this.getItem = function(key) {
        return this.hasItem(key) ? this.items[key] : undefined;
    }

    this.hasItem = function(key)
    {
        return this.items.hasOwnProperty(key);
    }
   
    this.removeItem = function(key)
    {
        if (this.hasItem(key)) {
            previous = this.items[key];
            this.length--;
            delete this.items[key];
            return previous;
        }
        else {
            return undefined;
        }
    }

    this.keys = function()
    {
        var keys = [];
        for (var k in this.items) {
            if (this.hasItem(k)) {
                keys.push(k);
            }
        }
        return keys;
    }

    this.values = function()
    {
        var values = [];
        for (var k in this.items) {
            if (this.hasItem(k)) {
                values.push(this.items[k]);
            }
        }
        return values;
    }

    this.each = function(fn) {
        for (var k in this.items) {
            if (this.hasItem(k)) {
                fn(k, this.items[k]);
            }
        }
    }

    this.clear = function()
    {
        this.items = {}
        this.length = 0;
    }
}
        
*/


// Vocabulaire klasse

var Vocabulaire = function()
{
   this.woorden = {};  
}

Vocabulaire.prototype.toon = function()
{
   console.log("Vocabulaire woorden " + this.woorden);
}

Vocabulaire.prototype.addWoord = function(w)
{
   if (woorden.hasOwnProperty(w))
   {
      return woorden[w];
   }
   else
   {
      var woord = new Woord(w);
      woorden[w] = woord;
      return w;
   }
}





// TouchInfo klasse

var TouchInfo = function()
{
   this.werkvormen = [];
   this.intenties = new Vocabulaire();
}

TouchInfo.prototype.toon = function()
{
   console.log("TouchInfo #werkvormen " + this.werkvormen.length);
}

TouchInfo.prototype.addWerkvorm = function(wvrm)
{
   this.werkvormen.push(wvrm);
}

TouchInfo.prototype.addIntentie = function(intnt)
{
   this.intenties.addWoord(intnt);
}

TouchInfo.prototype.all = function()
{
   return this.werkvormen;
}

// Angular module

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
   var touchinfo = new TouchInfo();
   
   // lees meer over cors bij
   //     http://blog.ionic.io/handling-cors-issues-in-ionic/

   //$http.get('http://192.168.1.7/json-api/apps').then(
   $http.get('http://localhost:8100/werkvormendocent').then(
      function(resp) 
      {
         console.log('Success', resp);
         // For JSON responses, resp.data contains the result
       
         var nodes = resp.data.nodes;
         for (var i=0; i<nodes.length; i++)
         {
            console.log("node i ", i);
	    var node = nodes[i].node;
            console.log("node      ", node.title);
            console.log("node nid  ", node.nid);
            console.log("node body ", node.body);
            console.log("node intenties " + node.intenties);
	    
	    var intenties = node.intenties.split(",");
	    
            console.log("intenties " + intenties);
            console.log("intenties " + intenties.length);
	    
	    for (var j=0; j<intenties.length; j++)
	    {
               console.log("   intentie " + intenties[j].trim());
	      
	       
	       // Hier verdergaan met bijvoegen intentie in touchinfo
	    }
	    
	    
            //werkvormen.push(new Werkvorm(node.nid, node.title, node.body));
            touchinfo.addWerkvorm(new Werkvorm(node.nid, node.title, node.body));
         }
      },
      function(err) 
      {
         console.error('ERR', err);
         // err.status will contain the status code

//   err propname, data
//   err propname, status
//   err propname, headers
//   err propname, config
//   err propname, statusText

         for(var propertyName in err) 
         {
            console.error('err prop name', propertyName);
         }

         console.error('err.status     ', err.status);
         console.error('err.statusText ', err.statusText);
         console.error('err.config     ', err.config);
         console.error('err.headers    ', err.headers);
         console.error('err.status     ', err.status);
      }
   )
  
  // Some fake testing data
  /*
  var werkvormen = 
  [
    new Werkvorm(9, "Denken"),
    new Werkvorm(8, "Schrijven")
  ];
   */
  
  //werkvormen.push(new Werkvorm(9, "Denken"));
  //werkvormen.push(new Werkvorm(8, "Schrijven"));

  return {
    all: function() 
    {
      console.log("Learn.all()");
      //var wv = new Werkvorm(7, "lezen");
      //wv.toon();
      return touchinfo.werkvormen;
    }
  };
});
