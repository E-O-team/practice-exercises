
// Input

var a;
function inputData(){
    a=prompt("hay nhap day so cach nhau boi dau cach");
    var a=a.split(" ");
    return a;
}
a=inputData();


// Comparing

function max(a){
  var max=Number(a[0]);
  for (var i=0;i<a.length;i++){

    // Convert to Number

      a[i]=Number(a[i]);

    // Compare

    if (max<a[i]){
      max=a[i];
    }
  }

  // Alert

  alert("Số lớn nhất là: " + max);
}

max(a);
