var array = [];

function start() {
var rows = prompt( "Number of rows", 1 ),
cols = prompt( "Number of columns", 1 ), inAr;
inAr = inputArray(rows, cols);
sumAll( inAr );
rowAvg( inAr, rows, cols );
colSum( inAr );
}

function inputArray(r, c) {
  var tobj = document.getElementById("input");
  array.push(tobj);
  for(var i = 0; i < r; i++) {
    array[i] = [];
    for(var k = 0; k < c; k++) {
      array[i][k] = Number(prompt("Enter a number"));
      //tobj.innerHTML += "<tr><td>"+array[i][k]+"</td></tr>";
    }
  }
  var myTable = document.getElementById("input");
  for(var j = 0; j < array.length; j++) {
    var row = array[j];
    var y = document.createElement('tr');
    for (var o = 0; o < row.length; o++) {
      myTable.appendChild(y);
      var detail = document.createElement('td');
      var data = document.createTextNode(row[o]);
      detail.appendChild(data);
      y.appendChild(detail);
    }
  }
  return array;
}

function sumAll(sArray) {
  var add = 0;
  for(var u = 0; u < sArray.length; u++) {
    var row = sArray[u];
    for (var e = 0; e < row.length; e++) {
      add += row[e];
    }
  }
  var sNum = String(add);
  var pobj = document.getElementById("sum");
  pobj.textContent += sNum;
  return sum;
}

function rowAvg(raArray, r, c) {
  var rArray = [];
  var avg = 0;
  console.log(r);
  console.log(c);
  for(var q = 0; q < c; q++) {
    var sum = 0;
    let w = 0;
    for(w = 0; w < r; w++) {
      sum += raArray[w][q];
    }
    avg = sum/w;
    rArray[q] = avg;
  }
  var table = document.getElementById("rowS");
  for(var h = 0; h < rArray.length; h++) {
    var y = document.createElement('td');
    table.appendChild(y);
    //var x = document.createElement('td');
    var v = document.createTextNode(rArray[h]);
    //x.appendChild(v);
    y.appendChild(v);
  }
  return avg;
}

function colSum(csArray) {
  var colsArray = [];
  var sum = 0;
  for(var q = 0; q < csArray.length; q++) {
    sum = 0;
    for(var w = 0; w < csArray[q].length; w++) {
      sum += csArray[q][w];
    }
    colsArray[q] = sum;
  }
  var table = document.getElementById("colS");
  for(var h = 0; h < colsArray.length; h++) {
    var y = document.createElement('tr');
    table.appendChild(y);
    var x = document.createElement('td');
    var v = document.createTextNode(colsArray[h]);
    x.appendChild(v);
    y.appendChild(x);
  }
  return sum;
}
