const str = "Hello World!"

// .length
// 문자 길이 반환
console.log(str.length)


// .includes()
// 대상 문자에 주어진 문자가 포함되어있는지 확인
console.log(str.includes('Hello'))  // true
console.log(str.includes('hello'))  // false - 대소문자 구별

// 0번째 지점부터 주어진 문자가 들어있는지 판단
console.log(str.includes('Hello', 0))  // true
console.log(str.includes('Hello', 1))  // false(e부터 검사하므로)


// .indexOf() 
// 대상문자에서 주어진 문자와 일치하는 첫 번째 인덱스 반환
// 일치하는 문자가 없으면 -1 반환
console.log(str.indexOf('World'))   // 6
console.log(str.indexOf('jioh'))    // -1

if(!str.includes("jioh")) {
    console.log("jioh가 없습니다!")
}

if(str.indexOf("jioh") === -1) {
    console.log("jioh가 없습니다!")
}


// .padEnd() 
// 대상문자의 길이가 지정된 길이보다 작으면.
// 주어진 문자를 지정된 길이까지 끝에 붙여 새로운 문자 반환

// 총 길이가 10인 문자열을 만들건데 길이가 10이 안되면 '0'을 붙여서 길이 10을 만듦
const str2 = '1234567'
console.log(str2.padEnd(10, '0'))   // 1234567000

const str3 = '1234567891011'
console.log(str3.padEnd(10, '0'))   // 주어진 문자열이 길이가 10보다 크므로 변화 x


// .padStart()
// 대상 문자의 길이가 지정된 길이보다 작으면,
// 주어진 문자를 지정된 길이까지 앞에 붙여 새로운 문자 변환
const str4 = '1234567'
console.log(str4.padStart(10, '0'))  // 0001234567

