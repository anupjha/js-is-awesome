function getElementById(id) {
  const result = [];

  function getEachIDNode(node) {
    if (node.id === id) {
      result.push(node);
    }
    for (let i = 0; i < node.childNodes.length; i++) {
      getEachIDNode(node.childNodes[i]);
    }
  }
  getEachIDNode(document.body);
  return result;
}
console.log(getElementById("subchild")[0].innerHTML);
/*

But if you actually want to replicate getElementById, don't try to return an array, return a single element :

*/
function getElementById(id) {
  let match = null;
  const doFind = (node) => {
    if (!match && node.id === id) match = node;
    if (!match) return [...node.childNodes].find(doFind);
  };
  doFind(document.body);
  return match;
}
console.log(getElementById("subchild").innerHTML);

<div id="parent">
  <div id="child1"></div>
  <div id="child2">
    <div id="subchild">subchild!</div>
  </div>
</div>;
