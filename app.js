function bigImg(x) {
  x.style.height = "120px";
  x.style.width = "100px";
}

function nrmlImg(x) {
  x.style.height = "69px";
  x.style.width = "55px";
}
var arr = { h: 0, d: 0, j: 0, bg: 0, sc: 0, sg: 0 };

var d1 = 0,
  h1 = 0;
function compareFunction1() {
  if (arr.d === 6 && arr.h === 2) {
    document.getElementById("level1").innerHTML = "Awesome!! They are Twins  ";
    document.getElementById("nextLevel").style.visibility = "visible";
    return true;
  } else {
    document.getElementById("level1").innerHTML =
      "Oops! They are cousin. Try Again ";
  }
}

function compareFunction2() {
  if (arr.d === 20 && arr.h === 12 && arr.sg === 8) {
    document.getElementById("level2").innerHTML =
      "You are Really Amazing!!! They are Twins. ";
    document.getElementById("nextLevel").style.visibility = "visible";
    return true;
  } else {
    document.getElementById("level2").innerHTML =
      "Oops!! You Made Them Sister. Try Again.";
  }
}

function compareFunction3() {
  if (arr.d === 0 && arr.h === 0 && arr.sg === 9 && arr.j === 7) {
    document.getElementById("level3").innerHTML =
      "Ohhooo! You Are Too Good. They are Twins. ";
    document.getElementById("nextLevel").style.visibility = "visible";
    return true;
  } else {
    document.getElementById("level3").innerHTML =
      "Sorry. You Made Them Siblings. Try Again. ";
  }
}

function compareFunction4() {
  if (
    arr.d === 3 &&
    arr.h === 7 &&
    arr.sg === 7 &&
    arr.j === 2 &&
    arr.bg === 4
  ) {
    document.getElementById("level4").innerHTML =
      "Hoo Yaaa !! You are Fabulous. They are Twins.  ";
    document.getElementById("nextLevel").style.visibility = "visible";
    return true;
  } else {
    document.getElementById("level4").innerHTML =
      "Sorry.. You made Them Friends. ";
  }
}

function compareFunction5() {
  if (
    arr.d === 11 &&
    arr.h === 4 &&
    arr.sg === 6 &&
    arr.j === 3 &&
    arr.bg === 5 &&
    arr.sc === 3
  ) {
    document.getElementById("level5").innerHTML =
      "Awesome !!! You are Tremendous... They are Twins. ";
    return true;
  } else {
    document.getElementById("level5").innerHTML =
      "Oops! You made Them Best Friends. ";
  }
}

//var name = prompt("Please enter your name ...");
//document.write("Hello " + name + "  Lets play... ");

//let hair_click = document.getElementById("hairstyle");
//hair_click.onclick = nextHair;
//console.log(hair_click);

//functionNextHair
function nextHair() {
  //console.log("inside function nexthair");
  var hair = document.getElementById("hairstyle");
  //console.log(arr.h);
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
    arr.h++;
    console.log(arr.h);
  } else if (arr.h === 6) {
    hair.setAttribute("class", "hairstyle7");
    arr.h++;
    console.log(arr.h);
  } else if (arr.h === 7) {
    hair.setAttribute("class", "hairstyle8");
    arr.h++;
    console.log(arr.h);
  } else if (arr.h === 8) {
    hair.setAttribute("class", "hairstyle9");
    arr.h++;
    console.log(arr.h);
  } else if (arr.h === 9) {
    hair.setAttribute("class", "hairstyle10");
    arr.h++;
    console.log(arr.h);
  } else if (arr.h === 10) {
    hair.setAttribute("class", "hairstyle11");
    arr.h++;
    console.log(arr.h);
  } else if (arr.h === 11) {
    hair.setAttribute("class", "hairstyle12");
    arr.h++;
    console.log(arr.h);
  } else if (arr.h === 12) {
    hair.setAttribute("class", "hairstyle13");
    arr.h = 0;
    console.log(arr.h);
  }
}

//dressCode

//let dress_click = document.getElementById("dress");
//dress_click.onclick = nextDress;
function nextDress() {
  //console.log("inside dress function");
  var dress = document.getElementById("dress");
  if (arr.d === 0) {
    dress.setAttribute("class", "dress1");
    arr.d++;
  } else if (arr.d === 1) {
    dress.setAttribute("class", "dress2");
    arr.d++;
  } else if (arr.d === 2) {
    dress.setAttribute("class", "dress3");
    arr.d++;
  } else if (arr.d === 3) {
    dress.setAttribute("class", "dress4");
    arr.d++;
  } else if (arr.d === 4) {
    dress.setAttribute("class", "dress5");
    arr.d++;
  } else if (arr.d === 5) {
    dress.setAttribute("class", "dress6");
    arr.d++;
  } else if (arr.d === 6) {
    dress.setAttribute("class", "dress7");
    arr.d++;
  } else if (arr.d === 7) {
    dress.setAttribute("class", "dress8");
    arr.d++;
  } else if (arr.d === 8) {
    dress.setAttribute("class", "dress9");
    arr.d++;
  } else if (arr.d === 9) {
    dress.setAttribute("class", "dress10");
    arr.d++;
  } else if (arr.d === 10) {
    dress.setAttribute("class", "dress11");
    arr.d++;
  } else if (arr.d === 11) {
    dress.setAttribute("class", "dress12");
    arr.d++;
  } else if (arr.d === 12) {
    dress.setAttribute("class", "dress13");
    arr.d++;
    console.log(arr.d);
  } else if (arr.d === 13) {
    dress.setAttribute("class", "dress14");
    arr.d++;
  } else if (arr.d === 14) {
    dress.setAttribute("class", "dress15");
    arr.d++;
  } else if (arr.d === 15) {
    dress.setAttribute("class", "dress16");
    arr.d++;
  } else if (arr.d === 16) {
    dress.setAttribute("class", "dress17");
    arr.d++;
  } else if (arr.d === 17) {
    dress.setAttribute("class", "dress18");
    arr.d++;
  } else if (arr.d === 18) {
    dress.setAttribute("class", "dress19");
    arr.d++;
  } else if (arr.d === 19) {
    dress.setAttribute("class", "dress20");
    arr.d++;
  } else if (arr.d === 20) {
    dress.setAttribute("class", "dress21");
    arr.d++;
  } else if (arr.d === 21) {
    dress.setAttribute("class", "dress22");
    arr.d++;
  } else if (arr.d === 22) {
    dress.setAttribute("class", "dress23");
    arr.d++;
  } else if (arr.d === 23) {
    dress.setAttribute("class", "dress24");
    arr.d = 0;
  }
}

function nextJewel() {
  console.log("inside function nextJewel");
  var jewellery = document.getElementById("jewel");
  console.log(arr.j);
  if (arr.j === 0) {
    jewellery.setAttribute("class", "jewel1");
    arr.j++;
  } else if (arr.j === 1) {
    jewellery.setAttribute("class", "jewel2");
    arr.j++;
  } else if (arr.j === 2) {
    jewellery.setAttribute("class", "jewel3");
    arr.j++;
  } else if (arr.j === 3) {
    jewellery.setAttribute("class", "jewel4");
    arr.j++;
  } else if (arr.j === 4) {
    jewellery.setAttribute("class", "jewel5");
    arr.j++;
  } else if (arr.j === 5) {
    jewellery.setAttribute("class", "jewel6");
    arr.j++;
  } else if (arr.j === 6) {
    jewellery.setAttribute("class", "jewel7");
    arr.j++;
  } else if (arr.j === 7) {
    jewellery.setAttribute("class", "jewel8");
    arr.j = 0;
  }
}

function nextBag() {
  console.log("inside function nextBag");
  var bag = document.getElementById("bag");
  console.log(arr.bg);
  if (arr.bg === 0) {
    bag.setAttribute("class", "bag1");
    arr.bg++;
  } else if (arr.bg === 1) {
    bag.setAttribute("class", "bag2");
    arr.bg++;
  } else if (arr.bg === 2) {
    bag.setAttribute("class", "bag3");
    arr.bg++;
  } else if (arr.bg === 3) {
    bag.setAttribute("class", "bag4");
    arr.bg++;
  } else if (arr.bg === 4) {
    bag.setAttribute("class", "bag5");
    arr.bg++;
  } else if (arr.bg === 5) {
    bag.setAttribute("class", "bag6");
    arr.bg++;
  } else if (arr.bg === 6) {
    bag.setAttribute("class", "bag7");
    arr.bg++;
  } else if (arr.bg === 7) {
    bag.setAttribute("class", "bag8");
    arr.bg = 0;
  }
}

function nextScarf() {
  var scarf = document.getElementById("scarf");
  if (arr.sc === 0) {
    scarf.setAttribute("class", "scarf0");
    arr.sc++;
  } else if (arr.sc === 1) {
    scarf.setAttribute("class", "scarf1");
    arr.sc++;
  } else if (arr.sc === 2) {
    scarf.setAttribute("class", "scarf2");
    arr.sc++;
  } else if (arr.sc === 3) {
    scarf.setAttribute("class", "scarf3");
    arr.sc++;
  } else if (arr.sc === 4) {
    scarf.setAttribute("class", "scarf4");
    arr.sc = 0;
  }
}

function nextSunglass() {
  console.log("inside nextSunglass");
  var sunglass = document.getElementById("sunglass");
  if (arr.sg === 0) {
    sunglass.setAttribute("class", "sunglass1");
    arr.sg++;
  } else if (arr.sg === 1) {
    sunglass.setAttribute("class", "sunglass2");
    arr.sg++;
  } else if (arr.sg === 2) {
    sunglass.setAttribute("class", "sunglass3");
    arr.sg++;
  } else if (arr.sg === 3) {
    sunglass.setAttribute("class", "sunglass4");
    arr.sg++;
  } else if (arr.sg === 4) {
    sunglass.setAttribute("class", "sunglass5");
    arr.sg++;
  } else if (arr.sg === 5) {
    sunglass.setAttribute("class", "sunglass6");
    arr.sg++;
  } else if (arr.sg === 6) {
    sunglass.setAttribute("class", "sunglass7");
    arr.sg++;
  } else if (arr.sg === 7) {
    sunglass.setAttribute("class", "sunglass8");
    arr.sg++;
  } else if (arr.sg === 8) {
    sunglass.setAttribute("class", "sunglass9");
    arr.sg++;
  } else if (arr.sg === 9) {
    sunglass.setAttribute("class", "sunglass10");
    arr.sg = 0;
  }
}
