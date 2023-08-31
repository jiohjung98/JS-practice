// ^ab - 줄 시작에 있는 ab와 일치
// ab$ - 줄 끝에 있는 ab와 일치
// . - 임의의 한 문자와 일치
// a|b - a 또는 b와 일치
// ab? - b가 없거나 b와 일치

// {3} - 3개 연속 일치
// {3, } - 3개 이상 연속 일치
// {3,5} - 3개 이상 5개 이하 연속 일치
// + - 1회 이상 연속 일치

// [ab] - a 또는 b
// [a-z] - a~z 사이의 문자 구간에 일치(소문자)
// [A-Z] - A~Z 사이의 문자 구간에 일치(대문자)
// [0-9] - 0~9 사이의 문자 구간에 일치(숫자)
// [가-힣] - 가부터 힣 사이의 문자 구간에 일치(한글)

// \w - 63개 문자(word, 대소영문 52개, 숫자 10개 + _)에 일치
// \b - 63개 문자에 일치하지 않는 문자 경계
// \d - 숫자에 일치
// \s - 공백에 일치

// (?:) - 그룹 지정
// (?=) - 앞쪽 일치
// (?<=) - 뒤쪽 일치


const str = `
010-1234-5678
thesecon@gmail.com
ckaquz98@naver.com
The quick brown fox jumps over the lazy dog.
hello world
http://www.naver.com/
https://www.naver.com/
`

console.log(str.match(/^h.../gm))   // h로 시작하는 부분을 찾음 
console.log(str.match(/...\.com$/gm))

console.log(str.match(/fox|dog/g))
console.log(str.match(/https?/g)) // http는 필수고 s는 있을 수도 있고 없을 수도 있는 문자열을 찾음

console.log(str.match(/\d{3}/g))    // 숫자 연속 3개 나오는 부분 찾음
console.log(str.match(/d{3}/g))     // 문자열 d가 연속 3개 나오는 부분 찾음
