// Resolve, Reject 그리고 에러 핸들링

// 서버로 movieName 요청
// 응답이 오면,
// 첫 번째 then 메소드는 일단 생략하고
// 거기서 나온 결과를 두 번째 then 메소드를 통해 받아서, resolve 메소드를 통해 사용
const getMovies = movieName => {
    return new Promise(resolve => {
        fetch(`https://www.omdbapi.com/?apikey=7035c60c&s=${movieName}`)
            .then(res => res.json())
            .then(res => resolve(res))
    })
}

const titles = ['frozen', 'avengers', 'avatar']

// forEach를 사용해 배열 아이템들 반복순회
// forEach의 콜백에서는 반복되는 배열의 아이템들을 title이라는 매개변수로 받아서 내부에서 사용
// getMovies라는 함수 실행하고 title을 인수로 넣어줌
// 처음 호출 때는 frozen, 두 번째는 avengers, 세 번째는 avatar가 들어감
// await 키워드로 기다려서 나온 결과를 movies라는 변수로 받아서 콘솔로 출력

titles.forEach(async title => {
    const movies = await getMovies(title)
    console.log(title, movies)
})


// 출력순서가 계속 바뀜
// -> forEach라는 메소드 내부에서는 getMovies라는 함수의 동작을 기다렸다가 다음 콜백으로 넘어가는 것 불가능
// 해당하는 함수를 한 번 기다렸다가 다음 콜백을 진행하는게 아니라,
// 콜백을 배열의 아이템만큼 쭉 진행하고 각각의 콜백 내부에서 await 키워드만큼 기다림!!!
// titles 배열의 순서대로 출력이 안될 수 있다!!!
// => 반복을 기다리면서 수행하려면 forEach 사용 x -> for 반복문 사용해야 함!


const wrap = async () => {
    for (const title of titles) {
        const movies2 = await getMovies(title)
        console.log(title, movies2)
    }
}

wrap()
// frozen, avengers, avatar -> 순서대로 잘 나옴!
// 다음 반복으로 넘어가기전에 await 키워드를 통해 기다림


// 비동기 코드를 매 반복마다 기다렸다 사용해야한다면, forEach가 아닌 for 반복문을 사용해야 함!!!