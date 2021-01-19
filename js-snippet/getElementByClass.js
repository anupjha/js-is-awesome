function getElementsByClassName(className) {
  var nodeList = [];
  function test(node) {
    if (node.classList && node.classList.contains(className)) {
      nodeList.push(node);
    }

    for (var index = 0; index < node.childNodes.length; index++) {
      test(node.childNodes[index]);
    }

    return nodeList;
  }

  test(document.body);

  return nodeList;
}

console.log(getElementsByClassName("winner"));
/*
  <table>
        <tr id="test">
            <td>#</td>
            <td class="winner">aa</td>
            <td>bb</td>
            <td>cc</td>
            <td>dd</td>
        </tr>
   </table>

   <table>
        <tr>
            <td>#</td>
            <td class="winner">aa</td>
            <td>bb</td>
            <td>cc</td>
            <td>dd</td>
        </tr>
   </table>

   <table>
        <tr>
            <td>#</td>
            <td class="winner">dd</td>
            <td>cc</td>
            <td>bb</td>
            <td>aa</td>
        </tr>
   </table>
*/
