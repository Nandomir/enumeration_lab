var Enumeration = function() {}

Enumeration.prototype = {

  find: function(array,callback){
    for (var i =0; i <array.length; i++){
      if (callback(array[i])){
        // console.log(array[i])
        return array[i]
      }
    }
  },

  map: function(array, callback) {
    var newArray = []
    for (var i = 0; i < array.length; i++) {
      newArray.push(callback(array[i])) 
    }
    return newArray
  },

  filter: function(array, callback) {
    var newFilteredArray = []
    for (var i = 0; i < array.length; i++) {
      if(callback(array[i])){
        newFilteredArray.push(array[i])
      }
    }
    return newFilteredArray
  },

  some: function(array,callback){
    var returnValue = false
    for (var i = 0 ; i < array.length; i++){
      if (callback(array[i])){
        returnValue = true
      }
    }
    return returnValue
  },

  every: function(array,callback){
    var returnValue = true
    for (var i = 0 ; i < array.length; i++){
      if (!callback(array[i])){
        returnValue = false
      }
    }
    return returnValue
  }

}

module.exports = Enumeration;