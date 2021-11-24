// const fruits = ["apple", "banana", "orange", "kiwi"]; //배열
// console.log(fruits);
// console.log(fruits.length);
// console.log(fruits[0]);
// console.log(fruits[fruits.length - 1]); //배열을 0부터 시작하지만 length는 총 길이(갯수)를 보여주므로 -1 해야 마지막 것을 볼 수 있음
// fruits.push("plum"); // push 를 통해 배열을 추가할 수 있음
// console.log(fruits);

// // primitive - 기본값 (숫자, 불, 문자열 등) 메모리에 저장된 값을 복사해서 출력
// let num = 10;
// let isOk = true;
// let myName = "one";

// let newNum = num;
// console.log(newNum);
// num = 20; // 저장된 값을 복사하므로 새로 지정한 num = 20 이라는 공간이 새로 생성됨
// console.log(num, "===", newNum); // 20 === 10

// reference - 참조값 (array, object) 메모리의 특정 장소만을 표시함
let colors = ["red", "green", "blue"];
// let newColors = colors; // colors 에만 push 를 해도 newColors도 같은 메모리를 보기 때문에 동일한 내용 출력
// colors.push("yellow"); //push - 배열의 제일 뒤쪽으로 새로운 배열값 추가 가급적 뒤로 밀어 넣는게 좋다.
// console.log(colors[0]);
// const lastItem = colors.pop(); // pop - 배열의 제일 뒤에 있는 배열값을 제거
// colors.unshift("black"); // unshift - 배열의 제일 앞쪽으로 새로운 배열값 추가
// console.log(colors[0]);
// const firstItem = colors.shift(); // shift - 배열의 제일 앞에 있는 배열값을 제거
// console.log(lastItem, "===", firstItem);
// console.log(colors);
const selectItem = colors.splice(1, 1); // 배열 중간에 위치한 배열값을 뽑아서 새로운 배열로 돌려줌
console.log(selectItem);
console.log(colors);

// colors = ["aaa", "bbb"]; 새로운 값을 할당하는 행동은 불가능
// console.log(newColors, "===", colors);
// 특정 장소만을 바라보고 있으므로 배열 추가가 가능
