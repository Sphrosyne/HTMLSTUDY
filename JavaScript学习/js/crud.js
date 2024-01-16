function addData() {
  var tableData = document.getElementsByTagName("table")[0];
  var xx = document.createElement("tr");
  var col = tableData.children[0].appendChild(xx);

  let a = document.createElement("td");
  a.append(document.createTextNode("未命名"));
  let b = document.createElement("td");
  b.append(document.createTextNode("未知"));
  let c = document.createElement("td");
  let button1 = document.createElement("button");
  button1.setAttribute("style", "width: 100px");
  button1.setAttribute("onclick", "editData(this)");
  button1.append(document.createTextNode("编辑"));
  c.append(button1);
  let button2 = document.createElement("button");
  button2.setAttribute("style", "width: 100px;background-color: red");
  button2.setAttribute("onclick", "deleteData(this)");
  button2.append(document.createTextNode("删除"));
  c.append(button2);

  xx.appendChild(a);
  xx.appendChild(b);
  xx.appendChild(c);
}

function deleteData(xx) {
  let row = xx.parentNode.parentNode;
  row.parentNode.removeChild(row);
}

function editData(xx) {
  let inputName = prompt("请输入姓名");
  let inputPhone = prompt("请输入联系方式");

  //方法一
  //   let data = xx.parentNode.parentNode;
  //   data.cells[0].innerHTML = inputName;
  //   data.cells[1].innerHTML = inputPhone;

  //方法二
  let data = xx.parentNode.parentNode;
  data.getElementsByTagName("td")[0].innerHTML = inputName;
  data.getElementsByTagName("td")[1].innerHTML = inputPhone;
}
