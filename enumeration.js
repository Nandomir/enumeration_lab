var Enumeration = function() {}

Enumeration.prototype = {

  find: function(array,callback){
    for (var i =0; i <array.length; i++){
      if (callback(array[i])){
        console.log(array[i])
        return array[i]
      }
    }
  }

}

module.exports = Enumeration;