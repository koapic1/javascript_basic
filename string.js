const msg = "Hello JavaScript";
const splitMsg = msg.split(""); // split ("찢는 기준문지") 기준을 중심으로 문자를 찢어 줌
const tel = "010-7746-0281";
const splitTel = tel.split("-").join(""); //.join 배열로 리턴된 내용을 다시 문자로 합쳐줌
console.log(splitTel);
