var stringifyJSON = function(obj) {
  
  var type = typeof (obj);
  if (obj === null) {
    return 'null';
  }
  else if (type === 'number' || type === 'boolean') {
    return String(obj);
  }
  else if (type === 'string') {
    return '"' + obj + '"';
  }
  else if (Array.isArray(obj)) {
    var result = [];
    for (var i = 0; i < obj.length; i++) {
      result.push(stringifyJSON(obj[i]));
    }
    return '[' + result.join(',') + ']';
  }
  else if (type === 'object') {
    var strObj = '';
    for (var key in obj) {
      var val = obj[key];
      if (typeof val === 'function' || val === undefined){
        continue;
      }
     strObj = strObj + stringifyJSON(key) + ':' + stringifyJSON(val) + ',';
   }
   return '{' + strObj.slice(0, strObj.length -1) + '}';
  }
};
  

