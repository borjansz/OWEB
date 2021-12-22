let like = document.querySelector('#like0');
let brojac = document.querySelector('#inputs0');

like.addEventListener('click', () => {
    brojac.value = parseInt(brojac.value) + 1;
    like.style.color = "red";
})

let like1 = document.querySelector('#like1');
let brojac1 = document.querySelector('#inputs1');

like1.addEventListener('click', () => {
    brojac1.value = parseInt(brojac1.value) + 1;
    like1.style.color = "red";
})

let like2 = document.querySelector('#like2');
let brojac2 = document.querySelector('#inputs2');

like2.addEventListener('click', () => {
    brojac2.value = parseInt(brojac2.value) + 1;
    like2.style.color = "red";
})

let like3 = document.querySelector('#like3');
let brojac3 = document.querySelector('#inputs3');

like3.addEventListener('click', () => {
    brojac3.value = parseInt(brojac3.value) + 1;
    like3.style.color = "red";
})

let like4 = document.querySelector('#like4');
let brojac4 = document.querySelector('#inputs4');

like4.addEventListener('click', () => {
    brojac4.value = parseInt(brojac4.value) + 1;
    like4.style.color = "red";
})

let like5 = document.querySelector('#like5');
let brojac5 = document.querySelector('#inputs5');

like5.addEventListener('click', () => {
    brojac5.value = parseInt(brojac5.value) + 1;
    like5.style.color = "red";
})

let like6 = document.querySelector('#like6');
let brojac6 = document.querySelector('#inputs6');

like6.addEventListener('click', () => {
    brojac6.value = parseInt(brojac6.value) + 1;
    like6.style.color = "red";
})

let like7 = document.querySelector('#like7');
let brojac7 = document.querySelector('#inputs7');

like7.addEventListener('click', () => {
    brojac7.value = parseInt(brojac7.value) + 1;
    like7.style.color = "red";
})

let like8 = document.querySelector('#like8');
let brojac8 = document.querySelector('#inputs8');

like8.addEventListener('click', () => {
    brojac8.value = parseInt(brojac8.value) + 1;
    like8.style.color = "red";
})
let like9 = document.querySelector('#like9');
let brojac9 = document.querySelector('#inputs9');

like9.addEventListener('click', () => {
    brojac9.value = parseInt(brojac9.value) + 1;
    like9.style.color = "red";
})


var guest = prompt("Enter Your Username", "Username here");
const onLoad = () => {
    let json1 = [];
    let json2 = [];
    let string1 = "";
    let string2 = "";
    let likeNum1 = JSON.parse(localStorage.getItem('likes1')) || 0;
    let likeNum2 = JSON.parse(localStorage.getItem('likes2')) || 0;

    if (localStorage.getItem('comments1')) {
        json1 = JSON.parse(localStorage.getItem('comments1'));
        string1 = "";
        for (var i = 0; i < json1.length; i++) {
            var obj1 = json1[i];
            let st1 = JSON.stringify(obj1);
            string1 += st1;
            string1 += "<hr>";
        }
    }
    if (localStorage.getItem('comments2')) {
        json2 = JSON.parse(localStorage.getItem('comments2'));
        string2 = "";
        for (var i = 0; i < json2.length; i++) {
            var obj2 = json2[i];
            let st2 = JSON.stringify(obj2);
            string2 += st2;
            string2 += "<hr>";
        }
    }
    document.getElementById("comment1").innerHTML = string1;
    document.getElementById("comment2").innerHTML = string2;
    document.getElementById("comment3").innerHTML = string3;
    document.getElementById("comment4").innerHTML = string4;
    document.getElementById("comment5").innerHTML = string5;
    document.getElementById("comment6").innerHTML = string6;
    document.getElementById("comment7").innerHTML = string7;
    document.getElementById("comment8").innerHTML = string8;
    document.getElementById("comment9").innerHTML = string9;
    document.getElementById("comment10").innerHTML = string10;
    document.getElementById("likeCounter1").innerHTML = likeNum1;
    document.getElementById("likeCounter2").innerHTML = likeNum2;

    let arr = []
    arr = JSON.parse(localStorage.getItem('posts')) || [];
    let tempString = "";
    arr.forEach(element => {
        tempString += element
        tempString += "<hr>"
    })
    document.getElementById("submittedDiv").innerHTML = tempString;
}
function comment1() {
    event.preventDefault()
    let t1 = document.getElementById("input1").value;
    let comm1 = JSON.parse(localStorage.getItem('comments1')) || [];
    var datum1 = new Date();
    t1 = guest + ': ' + t1 + '<br>' + datum1.toUTCString();
    comm1.push(t1)
    localStorage.setItem('comments1', JSON.stringify(comm1))
    console.log(comm1)
    let newString1 = ""
    comm1.forEach(element => {
        newString1 += element
        newString1 += "<hr>"
    });
    document.getElementById("comment1").innerHTML = newString1;
}
function comment2() {
    event.preventDefault()
    let t2 = document.getElementById("input2").value;
    let comm2 = JSON.parse(localStorage.getItem('comments2')) || [];
    var datum2 = new Date();
    t2 = guest + ': ' + t2 + '<br>' + datum2.toUTCString();
    comm2.push(t2)
    localStorage.setItem('comments2', JSON.stringify(comm2))
    console.log(comm2)
    let newString2 = ""
    comm2.forEach(element => {
        newString2 += element
        newString2 += "<hr>"
    });
    document.getElementById("comment2").innerHTML = newString2;
}
function comment3() {
    event.preventDefault()
    let t3 = document.getElementById("input3").value;
    let comm3 = JSON.parse(localStorage.getItem('comments3')) || [];
    var datum3 = new Date();
    t3 = guest + ': ' + t3 + '<br>' + datum3.toUTCString();
    comm3.push(t3)
    localStorage.setItem('comments3', JSON.stringify(comm3))
    console.log(comm3)
    let newString3 = ""
    comm3.forEach(element => {
        newString3 += element
        newString3 += "<hr>"
    });
    document.getElementById("comment3").innerHTML = newString3;
}
function comment4() {
    event.preventDefault()
    let t4 = document.getElementById("input4").value;
    let comm4 = JSON.parse(localStorage.getItem('comments4')) || [];
    var datum4 = new Date();
    t4 = guest + ': ' + t4 + '<br>' + datum4.toUTCString();
    comm4.push(t4)
    localStorage.setItem('comments4', JSON.stringify(comm4))
    console.log(comm4)
    let newString4 = ""
    comm4.forEach(element => {
        newString4 += element
        newString4 += "<hr>"
    });
    document.getElementById("comment4").innerHTML = newString4;
}
function comment5() {
    event.preventDefault()
    let t5 = document.getElementById("input5").value;
    let comm5 = JSON.parse(localStorage.getItem('comments5')) || [];
    var datum5 = new Date();
    t5 = guest + ': ' + t5 + '<br>' + datum5.toUTCString();
    comm5.push(t5)
    localStorage.setItem('comments5', JSON.stringify(comm5))
    console.log(comm5)
    let newString5 = ""
    comm5.forEach(element => {
        newString5 += element
        newString5 += "<hr>"
    });
    document.getElementById("comment5").innerHTML = newString5;
}
function comment6() {
    event.preventDefault()
    let t6 = document.getElementById("input6").value;
    let comm6 = JSON.parse(localStorage.getItem('comments6')) || [];
    var datum6 = new Date();
    t6 = guest + ': ' + t6 + '<br>' + datum6.toUTCString();
    comm6.push(t6)
    localStorage.setItem('comments6', JSON.stringify(comm6))
    console.log(comm6)
    let newString6 = ""
    comm6.forEach(element => {
        newString6 += element
        newString6 += "<hr>"
    });
    document.getElementById("comment6").innerHTML = newString6;
}
function comment7() {
    event.preventDefault()
    let t7 = document.getElementById("input7").value;
    let comm7 = JSON.parse(localStorage.getItem('comments7')) || [];
    var datum7 = new Date();
    t7 = guest + ': ' + t7 + '<br>' + datum7.toUTCString();
    comm7.push(t7)
    localStorage.setItem('comments7', JSON.stringify(comm7))
    console.log(comm7)
    let newString7 = ""
    comm7.forEach(element => {
        newString7 += element
        newString7 += "<hr>"
    });
    document.getElementById("comment7").innerHTML = newString7;
}
function comment8() {
    event.preventDefault()
    let t8 = document.getElementById("input8").value;
    let comm8 = JSON.parse(localStorage.getItem('comments8')) || [];
    var datum8 = new Date();
    t8 = guest + ': ' + t8 + '<br>' + datum8.toUTCString();
    comm8.push(t8)
    localStorage.setItem('comments8', JSON.stringify(comm8))
    console.log(comm8)
    let newString8 = ""
    comm8.forEach(element => {
        newString8 += element
        newString8 += "<hr>"
    });
    document.getElementById("comment8").innerHTML = newString8;
}
function comment9() {
    event.preventDefault()
    let t9 = document.getElementById("input9").value;
    let comm9 = JSON.parse(localStorage.getItem('comments9')) || [];
    var datum9 = new Date();
    t9 = guest + ': ' + t9 + '<br>' + datum9.toUTCString();
    comm9.push(t9)
    localStorage.setItem('comments9', JSON.stringify(comm9))
    console.log(comm9)
    let newString9 = ""
    comm9.forEach(element => {
        newString9 += element
        newString9 += "<hr>"
    });
    document.getElementById("comment9").innerHTML = newString9;
}

function comment10() {
    event.preventDefault()
    let t10 = document.getElementById("input10").value;
    let comm10 = JSON.parse(localStorage.getItem('comments10')) || [];
    var datum10 = new Date();
    t10 = guest + ': ' + t10 + '<br>' + datum10.toUTCString();
    comm10.push(t10)
    localStorage.setItem('comments10', JSON.stringify(comm10))
    console.log(comm10)
    let newString10 = ""
    comm10.forEach(element => {
        newString10 += element
        newString10 += "<hr>"
    });
    document.getElementById("comment10").innerHTML = newString10;
}

