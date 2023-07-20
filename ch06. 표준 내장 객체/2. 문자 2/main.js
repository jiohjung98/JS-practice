// .replace()
// 대상 문자에서 패턴과 일치하는 부분을 교체한 새로운 문자를 반환
const str = "Hello, Hello?!"

console.log(str.replace("Hello", "Hi"))    // Hi, Hello?!

// 정규표현식 사용 - g(global): Hello 전부 찾아서 다 Hi로 바꿔라
console.log(str.replace(/Hello/g, "Hi"))   // Hi, Hi?!


// .slice()
// 대상 문자의 일부를 추출해 새로운 문자 반환
// 두 번째 인수 직전까지 추출하고 두 번째 인수를 생략하면 대상 문자의 끝까지 추출
const str2 = "Hello world!"

console.log(str2.slice(0,5))    // Hello
console.log(str2.slice(6,-1))   // world
console.log(str2.slice(6))      // world!


// .split()
// 대상 문자를 주어진 구분자로 나눠 배열로 반환
const str3 = 'Apple, Banana, Cherry'

console.log(str3.split(' '))    // [Apple, Banana, Cherry]
console.log(str3.split('').reverse().join(''))  //yrrehC, ananaB, elppA


// .toLowerCase(), toUpperCase()
// 대상 문자를 영어 소문자&대문자로 변환해 새로운 문자로 반환
console.log(str3.toLowerCase()) // apple, banana, cherry
console.log(str3.toUpperCase()) // APPLE, BANANA, CHERRY


// .trim()
// 대상 문자의 앞뒤 공백 문자(space, tab)를 제거한 새로운 문자 반환
const str4 = "  Heropy!    "
console.log(str4.trim())    // Heropy!

const str5 = "  HE Ro Py!   "
console.log(str5.trim())    // He Ro Py! - 문자열 중간의 공백은 제거x