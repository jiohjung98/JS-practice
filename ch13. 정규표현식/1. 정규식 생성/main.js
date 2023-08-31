// 정규표현식

// - 문자 검색
// - 문자 대체
// - 문자 추출

// 생성자
// new RegExp('표현', '옵션')
// new RegExp('[a-z]', 'gi')

// 리터럴(대부분은 리터럴방식 사용)
// /표현/옵션
// /[a-z]/gi

const str = `
010-1234-5678
thesecon@gmail.com
ckaquz98@naver.com
The quick brown fox jumps over the lazy dog
hello world
http://www.naver.com/
`


// 생성자 방식
// 생성자 함수를 통해 반환되는 값 - 인스턴스
const regexp = new RegExp('the', 'gi')
console.log(str.match(regexp))


// 리터럴 방식
const regexp2 = /the/gi
console.log(str.match(regexp2))