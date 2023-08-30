// 가비지 컬렉션(GC, 쓰레기 수집)

// 자바스크립트의 메모리 관리 방법으로 자바스크립트 엔진이 자동으로,
// 데이터가 할당된 메모리에서 더 이상 사용되지 않는 데이터를 해제하는 것
// 가비지 컬렉션은 개발자가 직접 강제 실행하거나 관리할 수 없음

let a = {x:1};
let b = a;

b.x = 2;

console.log(b)
console.log(a)


const user = {
    name: 'heropy',
    age: 85,
    emails: ['ckaquz98@naver.com', 'oodidi1998@gmail.com']
}

delete user.emails
console.log(user)   // {name: 'heropy', age: 85}