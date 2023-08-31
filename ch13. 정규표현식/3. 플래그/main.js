// g - 모든 문자 일치
// i - 영어 대소문자를 구분 않고 일치
// m - 여러 줄 일치, 각각의 줄을 시작과 끝으로 인식

const str = `
010-1234-5678
thesecon@gmail.com
ckaquz98@naver.com
The quick brown fox jumps over the lazy dog.
hello world
http://www.naver.com/
`

console.log(str.match(/the/))
console.log(str.match(/the/g))
console.log(str.match(/the/gi))
console.log(str.match(/\.$/gi)) // 백슬래시 마침표 - 마침표 찾기
console.log(str.match(/\.$/gim))