// 정규식.test(문자열) - 일치 여부 반환
// 문자열.match(정규식) - 일치하는 문자의 배열 반환
// 문자열.replace(정규식, 대체문자) - 일치하는 문자를 대체

const str = `
010-1234-5678
thesecon@gmail.com
ckaquz98@naver.com
The quick brown fox jumps over the lazy dog
hello world
http://www.naver.com/
`

const regexp = /fox/gi

console.log(regexp.test(str))
console.log(str.match(regexp))
console.log(str.replace(regexp, 'cat'))