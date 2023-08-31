// import { createStacks } from './createStacks';

// createStacks({
//     stacks: [

//     ],
//     queues: [
//     ]
// })


// setTimeout - web API에서 사용 -> 가장 마지막에 실행됨
// Task Queue에 쌓여있다가 JS Call Stack으로 넘어옴

setTimeout(() => {
    console.log(1)
}, 0)

for (let i = 0; i < 100; i++) {
    console.log(2)
}


function a() {
    console.log('a')
    function b() {
        setTimeout(() => {
            console.log('b1')
            console.log('b2')
        })
    }
    b()
}

function c() {
    console.log('c')
}

function first() {
    a()
    c()
}

function second() {
    c()
}

first()
second()