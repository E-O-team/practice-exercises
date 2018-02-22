
// Comparing

function max(var a){
  var max=a[0];
  for (var i=0;i<a.length;i++){

    // Convert to Number

    if(isNaN(a[i])){
      a[i]=Number(a[i]);
    }

    // Compare

    if (max<a[i]){
      max=a[i];
    }
  }

  // Alert

  alert(`Số lớn nhất là: ${max}`);
}
