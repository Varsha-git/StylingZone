var arr = { h: 0, d: 0, j: 0 };
console.log(arr.h);
console.log(arr.d);
console.log(arr.j);
//let hair_click = document.getElementById("hairstyle");
//hair_click.onclick = nextHair;
//console.log(hair_click);

function nextHair() {
  console.log("inside function nexthair");
  var hair = document.getElementById("hairstyle");
  console.log(arr.h);
  if (arr.h === 0) {
    hair.setAttribute("class", "hairstyle1");
    arr.h++;
    console.log(arr.h);
  } else if (arr.h === 1) {
    hair.setAttribute("class", "hairstyle2");
    arr.h++;
    console.log(arr.h);
  } else if (arr.h === 2) {
    hair.setAttribute("class", "hairstyle3");
    arr.h++;
    console.log(arr.h);
  } else if (arr.h === 3) {
    hair.setAttribute("class", "hairstyle4");
    arr.h++;
    console.log(arr.h);
  } else if (arr.h === 4) {
    hair.setAttribute("class", "hairstyle5");
    arr.h++;
    console.log(arr.h);
  } else if (arr.h === 5) {
    hair.setAttribute("class", "hairstyle6");
    arr.h = 0;
    console.log(arr.h);
  }
}

//dressCode

//let dress_click = document.getElementById("dress");
//dress_click.onclick = nextDress;
function nextDress() {
  console.log("inside dress function");
  var dress = document.getElementById("dress");
  if (arr.d === 0) {
    dress.setAttribute("class", "dress1");
    arr.d++;
    console.log(arr.h);
  } else if (arr.d === 1) {
    dress.setAttribute("class", "dress2");
    arr.d++;
    console.log(arr.d);
  } else if (arr.d === 2) {
    dress.setAttribute("class", "dress3");
    arr.d++;
    console.log(arr.d);
  } else if (arr.d === 3) {
    dress.setAttribute("class", "dress4");
    arr.d++;
    console.log(arr.d);
  } else if (arr.d === 4) {
    dress.setAttribute("class", "dress5");
    arr.d++;
    console.log(arr.d);
  } else if (arr.d === 5) {
    dress.setAttribute("class", "dress6");
    arr.d = 0;
    console.log(arr.d);
  }
}

function nextJewel() {
  console.log("inside function nextJewel");
  var hair = document.getElementById("jewel");
  console.log(arr.j);
  if (arr.j === 0) {
    hair.setAttribute("class", "jewel1");
    arr.j++;
    console.log(arr.j);
  } else if (arr.j === 1) {
    hair.setAttribute("class", "jewel2");
    arr.j++;
    console.log(arr.j);
  } else if (arr.j === 2) {
    hair.setAttribute("class", "jewel3");
    arr.j++;
    console.log(arr.j);
  } else if (arr.j === 3) {
    hair.setAttribute("class", "jewel4");
    arr.j++;
    console.log(arr.j);
  } else if (arr.j === 4) {
    hair.setAttribute("class", "jewel5");
    arr.j++;
    console.log(arr.j);
  } else if (arr.j === 5) {
    hair.setAttribute("class", "jewel6");
    arr.j++;
    console.log(arr.j);
  } else if (arr.j === 6) {
    hair.setAttribute("class", "jewel7");
    arr.j++;
    console.log(arr.j);
  } else if (arr.j === 7) {
    hair.setAttribute("class", "jewel8");
    arr.j = 0;
    console.log(arr.j);
  }
}
