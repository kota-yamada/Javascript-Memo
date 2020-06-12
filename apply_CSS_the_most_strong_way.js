var styleStr = '.class {border-top: initial;}'; //css or js contens
var node = document.createElement('style');
node.innerHTML = styleStr;
node.id = 'ascend-style';
document.body.appendChild(node);