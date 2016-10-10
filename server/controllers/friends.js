console.log('friends controller');

var mongoose = require('mongoose');
var Friend = mongoose.model('Friend') 

module.exports={
  session: function(request, response){
    if(!request.session.user) return response.send({err: ' you are not logged in'})
      return response.send(request.session.user)
  },


  index: function(req, res){
    Friend.find({}).populate('_user').exec(function(err, friends){
      res.json(friends);
    })
  },


  show: function(req, res) {
    Friend.find({}, function(err, friends) {
      res.json(friends)
    })
  },



  create: function(req, res){
    Friend.findOne({name: req.body.name}, function(err, friend){
      if(friend){
        res.json(friend)
      }else{
      var friend= new Friend({
        name: req.body.name,
        age: req.body.age
      })
 
      friend.save(function(err, friend){
        console.log('made it to server cont')
        res.json(friend);
      })
    }
    })
  },
  
  
  delete: function(request, response){
    Friend.remove({_id: request.params.id}, function(err, friend){
     if(err) {
          console.log(err);
        } else {
          console.log(friend);
          response.json(friend);
        }
    })
  },
  

  update: function(req, res) {
      // console.log(req.params.name, "name");
      // console.log(req.body.option, "in here");
     Friend.update({_id: req.params.id}, {name: req.body.name, age: req.body.age}, function(err, result){
        res.send('updated!')
    })
},



  populate: function(req,res){
    var friend= new Friend({name: 'keya', age:25})
    var friend2= new Friend({name: 'sara', age:21})
    var friend3= new Friend({name: 'john', age:44})
    friend.save(function(err, friend){
      friend2.save(function(err,friend){
        friend3.save(function(err, friend){
          res.send('success!sent!')
        })
      })
    })
  },
  

  showone: function(req, res) {
      Friend.findOne({_id: req.params.id}, function(err, result){
        if(err) {
          console.log(err);
        } else {
          res.json(result);
        }
      })
    },


  

  logout : function(request, response){
    request.session.destroy();
    return response.send({message: 'Youa re now logged out'})
  }
}
  
