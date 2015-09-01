// Modelklassen

// Werkvorm klasse

var Werkvorm = function(idd, ttl, bdy)
{
   this.id      = idd;
   this.title   = ttl;
   this.body    = bdy;
   this.woorden = new Vocabulaire();
}

Werkvorm.prototype.toon = function()
{
   console.log("Werkvorm id " + this.id + " title " + this.title);
   this.woorden.toon();
}

// wo is geen String maar wel een Object
Werkvorm.prototype.addWoord = function(wo)
{
   //console.log("      woord bijvoegen2 (" + wo + ")");
   //wo.toon();
   return this.woorden.addObjWoord(wo);
}

Werkvorm.prototype.getEnabled = function()
{
   //console.log("Werkvorm.getEnabled() " + this.title);
   return this.woorden.getEnabled();
}


// Woord klasse

var Woord = function(wrd)
{
   this.tekst      = wrd;
   this.enabled    = true;
   this.werkvormen = [];
}

Woord.prototype.toon = function()
{
   console.log("Woord " + this.tekst + " " + this.enabled);
}

Woord.prototype.addWerkvorm = function(wvrm)
{
   this.werkvormen.push(wvrm);
}

Woord.prototype.toggle = function()
{
   console.log("Woord toggle() " + this.tekst + " " + this.enabled);
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
   this.teller  = 0;
   this.woorden = {};  
}

Vocabulaire.prototype.toon = function()
{
   console.log("Vocabulaire woorden #" + this.teller);
   
   for (var w in this.woorden)
   {
      console.log("  w " + w);
      console.log("  woord " + this.woorden[w].tekst + " " +
         this.woorden[w].enabled);
      this.woorden[w].toon();
   }
}

Vocabulaire.prototype.addWoord = function(w)
{
   //console.log("      intentie bijvoegen3 (" + w + ")");
   if (this.woorden.hasOwnProperty(w))
   {
      //console.log("      intentie bijvoegen4a (" + w + ")");
      return this.woorden[w];
   }
   else
   {
      //console.log("      intentie bijvoegen4b (" + w + ")");
      var woord = new Woord(w);
      this.woorden[w] = woord;
      this.teller++;
      return woord;
   }
}

Vocabulaire.prototype.addObjWoord = function(wo)
{
   var wt = wo.tekst;
   //console.log("Vocabulaire.addObjWoord(" + wt + ")");
   this.woorden[wt] = wo;
   this.teller++;
}

Vocabulaire.prototype.hasWoord = function(w)
{
   return this.woorden.hasOwnProperty(w);
}

Vocabulaire.prototype.alleWoorden = function()
{
   console.log("alleWoorden()");
   var wrden = [];
   for (var w in this.woorden)
   {
      console.log("  w " + w);
      var wrd = this.woorden[w];
      wrden.push(wrd);
   }
   console.log("alleWoorden #" + wrden.length);
   return wrden;
}

Vocabulaire.prototype.getEnabled = function()
{
   //console.log("getEnabled()");
   for (var w in this.woorden)
   {
      var wrd = this.woorden[w];
      //console.log("    wrd.enabled " + wrd.enabled);
      if (wrd.enabled == true)
      {
         //console.log("    true");
         return true;
      }
   }
   //console.log("    false");
   return false;
}




// TouchInfo klasse

var TouchInfo = function()
{
   this.werkvormen    = [];
   this.intenties     = new Vocabulaire();
   this.begeleidingen = new Vocabulaire();
}

TouchInfo.prototype.toon = function()
{
   console.log("TouchInfo #werkvormen " + this.werkvormen.length);
   //this.intenties.toon();
}

TouchInfo.prototype.addWerkvorm = function(wvrm)
{
   this.werkvormen.push(wvrm);
}

TouchInfo.prototype.addIntentie = function(intnt)
{
   //console.log("      intentie bijvoegen2 (" + intnt + ")");
   return this.intenties.addWoord(intnt);
}

TouchInfo.prototype.addBegeleiding = function(begl)
{
   //console.log("      begeleiding bijvoegen2 (" + begl + ")");
   return this.begeleidingen.addWoord(begl);
}

/*
TouchInfo.prototype.alleWerkvormen = function()
{
   console.log("werkvormen #" + this.werkvormen.length);
   
   return this.werkvormen;
}
 */

TouchInfo.prototype.alleWerkvormen = function()
{
   console.log("werkvormen #" + this.werkvormen.length);
   
   var lijst = [];
   for (var j=0; j<this.werkvormen.length; j++)
   {
      var wvo = this.werkvormen[j];
      if (wvo.getEnabled() == true)
      {
         lijst.push(wvo);
      }
   }
   console.log("lijst #" + lijst.length);
   //return this.werkvormen;
   return lijst;
}


TouchInfo.prototype.alleIntenties = function()
{
   var aw = this.intenties.alleWoorden();
   for (var iw=0; iw<aw.length; iw++)
   {
      var wo = aw[iw];
      console.log("wo i " + wo);
   }
   return aw;
}

TouchInfo.prototype.alleBegeleidingen = function()
{
   var aw = this.begeleidingen.alleWoorden();
   for (var iw=0; iw<aw.length; iw++)
   {
      var wo = aw[iw];
      console.log("wo b " + wo);
   }
   return aw;
}


// Angular module

angular.module('t2l.services', [])

.factory('Chats', function() 
{
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
    remove: function(chat) 
    {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) 
    {
      for (var i = 0; i < chats.length; i++) 
      {
        if (chats[i].id === parseInt(chatId)) 
        {
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

   //$http.get('http://192.168.1.6/json-api/apps').then(
   //$http.get('http://192.168.1.6/json-api/werkvormendocent').then(
   $http.get('http://localhost:8100/werkvormendocent').then(
      function(resp) 
      {
         console.log('Success get', resp);
         // For JSON responses, resp.data contains the result
       
         var nodes = resp.data.nodes;
         for (var i=0; i<nodes.length; i++)
         {
	    // A. Haal de werkvorm
	   
            //console.log("node i ", i);
	    var node = nodes[i].node;
            //console.log("node      " + node.title);
            //console.log("node nid  " + node.nid);
            //console.log("node body ", node.body);
            //console.log("node intenties " + node.intenties);

	    // B. Maak de werkvorm
            var wv = new Werkvorm(node.nid, node.title, node.body);
            touchinfo.addWerkvorm(wv);
	    
	    // C. Verwerk de intenties
	    var intenties = node.intenties.split(",");
	    
            //console.log("intenties " + intenties);
            //console.log("intenties " + intenties.length);
	    
	    for (var j=0; j<intenties.length; j++)
	    {
               //console.log("   intentie " + intenties[j].trim());
	      
	       
	       // Hier verdergaan met bijvoegen intentie in touchinfo
	       var intntie = intenties[j].trim();
               //console.log("      intentie bijvoegen (" + intntie + ")");
	       var o_intntie = touchinfo.addIntentie(intntie);
	       o_intntie.addWerkvorm(wv);
	       //o_intntie.toon();
	       wv.addWoord(o_intntie);
	    }
    

	    // D. Verwerk de begeleiding
	    //console.log("node begeleiding " + node.begeleiding);
	    var begeleidingen = node.begeleiding.split(",");
	    for (var k=0; k<begeleidingen.length; k++)
	    {
               //console.log("   begeleiding " + begeleidingen[k].trim());
	      
	       
	       // Hier verdergaan met bijvoegen intentie in touchinfo
	       var bgl = begeleidingen[k].trim();
               //console.log("      begeleiding bijvoegen (" + bgl + ")");
	       var o_bgl = touchinfo.addBegeleiding(bgl);
	       o_bgl.addWerkvorm(wv);
	       wv.addWoord(o_bgl);
	    }
         }
         //touchinfo.toon();
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

         for (var propertyName in err) {
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
      alleWerkvormen: function() 
      {
         console.log("Learn.alleWerkvormen()");

	 //var wv = new Werkvorm(7, "lezen");
         //wv.toon();
	 
         //return touchinfo.werkvormen;
         return touchinfo.alleWerkvormen();
      },
      alleIntenties: function() 
      {
         console.log("Learn.alleIntenties()");
         //return touchinfo.intenties.alleWoorden();
         return touchinfo.alleIntenties();
      },
      alleBegeleidingen: function() 
      {
         console.log("Learn.alleBegeleidingen()");
         return touchinfo.alleBegeleidingen();
      }
   };
});
