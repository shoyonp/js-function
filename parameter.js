function vatkhao(){
    console.log('hand wash');
    console.log('boso');
    console.log('plate e khabar nao');
    console.log('khao');
}

// vatkhao();

// 3 --> 3*3 = 9
// 4 --> 4*4 = 16

function square (number){
    // console.log(number);
    console.log('value of the number parameter', number);
    const borgo = number * number;
    console.log('square of the given number is:', borgo)
}
square(4);
console.log('-------')
square(12);
square(6);
square(147);

function add(num1,num2){
    const sum = num1 + num2;
    console.log(sum);
}
add(25,387);
add(64,31);


function addAll(a,b,c,d,e){
    const total = a + b + c + d + e;
    console.log(a,b,c,d,e);
    console.log(total);
}
addAll(4, 5, 3, 3);
addAll(4, 5, 3, 3, 2);