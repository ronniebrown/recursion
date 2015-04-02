// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// You should use document.body, element.childNodes, and element.classList

// But instead we're going to implement it from scratch:



var walk_the_DOM = function walk(node, func) {
  func(node);
  node = node.firstChild;
  while (node) {
    walk(node, func);
    node = node.nextSibling;
  }
};

var getElementsByClassName = function(className){
  var classes = [];

  walk_the_DOM(document.body, function (node) {
    if (node.className) {
      var nodes = node.className.split(' '); 
      for (var i = 0; i < nodes.length; i++) {
        if (nodes[i] ===  className) {
          classes.push(node);
        }
      }
    }
  });
  
  return classes;
};






