const lotto = [];
for (let i = 1; i < 46; i++) {
    lotto.push(i);
}

for (let i = 0; i < 6; i++) {
    const random = Math.ceil(Math.random() * lotto.length - 1);
    console.log(lotto.splice(random, 1)[0]);
}
// const random01 = Math.ceil(Math.random() * 45); // static 객체, 메서드
// console.log(random01);
// const random02 = Math.ceil(Math.random() * 45); // static 객체, 메서드
// console.log(random02);
// const random03 = Math.ceil(Math.random() * 45); // static 객체, 메서드
// console.log(random03);
// const random04 = Math.ceil(Math.random() * 45); // static 객체, 메서드
// console.log(random04);
// const random05 = Math.ceil(Math.random() * 45); // static 객체, 메서드
// console.log(random05);
// const random06 = Math.ceil(Math.random() * 45); // static 객체, 메서드
// console.log(random06);
// console.log(Math.round(1.5)); //반올림
// console.log(Math.floor(1.9)); //버림
// console.log(Math.ceil(1.1)); //올림
