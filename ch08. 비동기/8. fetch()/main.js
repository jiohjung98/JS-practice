// fetch(주소, 옵션)
// 네트워크를 통해 리소스의 요청(Request) 및 응답(Response)을 처리할 수 있음
// Promise 인스턴스를 반환 - then() 사용 가능

console.log(fetch(`https://www.omdbapi.com/?apikey=7035c60c&s=avengers`))   // Promise {<pending>}


// // fetch 함수는 첫 번째 then() 메소드를 사용해 응답을 받은 결과를 json이라는 메소드를 통해 분석 처리를 하고,
// // 그것을 반환해서 실제 데이터를 사용할 수 있다

fetch(`https://www.omdbapi.com/?apikey=7035c60c&s=avengers`)
    .then(res => res.json)  // Response
    .then(json => console.log(json))


// async/await로 사용해보자!
const wrap = async() => {
    const res = await fetch(`https://www.omdbapi.com/?apikey=7035c60c&s=avengers`)
    const json = await res.json()
    console.log(json)
}

wrap()


// 옵션 사용해보기
// GET: 값을 얻을 때 사용하는 메소드(일반적으로 사용하지 않아도 사용할 수 있음)
// POST, PUT, DElETE...
// headers: 서버로 전송하는 요청 정보
// body: 요청에 대한 데이터 - 바디에 쓰는 데이터는 문자화 시켜줘야 함!(JSON.stringify())
fetch(`https://www.omdbapi.com/?apikey=7035c60c&s=avengers`, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'  // json이라는 데이터타입으로 통신할 수 있다
    },
    body: JSON.stringify({
        name: "HEROPY",
        age: 85,
        email: "ckaquz98@naver.com"
    })
})
    .then(res => res.json())
    .then(json => console.log(json))