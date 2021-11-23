var num01; //변수선언 hoisting 중복선언이 가능 가급적 사용하지 말자
let num02 = 20; // 값이 변할때 사용
const num03 = 30; // 값이 변하지 않을때 사용

// console.log(num01);
// console.log(num02);
// console.log(num03);

// scope; //들여다 보기

let aa = 10;
if (true) {
    // let aa = 20; //선언하는 장소가 다를 경우 중복 선언 가능 10은 블록 밖 / 20은 블록 안
    let bb = 20;
    // console.log("🚀 ~ file: variables.js ~ line 15 ~ bb", bb);
} else {
    let cc = 30;
}
// console.log(aa); //블록 안에 선언된 내용은 볼 수 없음

//let, const 는 block scope 같은 블록 안에서만 볼 수 있음
//var 는 function scope를 따른다. 밖에 있어도 안을 볼 수 있음

var num = 20; //전역 변수 (함수 바깥에 선언된 변수)
function test() {
    //함수를 만들때 사용 ex function 제목
    //function body
    var localNum = 10; //지역 변수
    if (true) {
        // console.log("🚀 ~ file: variables.js ~ line 28 ~ test ~ num", num); //내 위치에서 가장 가까운 값을 찾아 출력 안에서는 밖을 볼 수 있음.
    } // 지역변수
    // console.log("🚀 ~ file: variables.js ~ line 29 ~ test ~ localNum", localNum);
}
test(); //함수 실행 hoisting 가능
// console.log("🚀 ~ file: variables.js ~ line 25 ~ num", num);

var num = 20;
function test() {
    var localNum = 10;
    if (true) {
        var functionNum = "나는 var로 선언된 functionNum입니다.";
        let blockNum = "나는 let로 선언된 blockNum입니다.";
        // console.log("🚀 ~ file: variables.js ~ line 43 ~ test ~ blockNum", blockNum);
    }
    // console.log("🚀 ~ file: variables.js ~ line 42 ~ test ~ functionNum", functionNum);
}
test();

// console.log(Math.round(1.6)); //Math = 객체 . round = 객체 안에 있는 함수

let age = 20;
let name = "one"; //문자열 "" , '' , `` 안에 넣어서 사용
let ok = true;
let colors = ["red", "green", "blue", "orange"]; //배열, array 규칙이 없는 데이터를 줄세움
console.log(colors[0]); //번호는 0번부터 시작
colors.push("black"); //배열을 만들면 데이터 추가가 쉬워짐 굉장히 중요 ★★★★★
console.log(colors[4]);
// console.log("나의 이름은" + name + "이고 나의 나이는" + age);
// console.log(`나의 이름은 ${name} 이고 나의 나이는 ${age}`);
