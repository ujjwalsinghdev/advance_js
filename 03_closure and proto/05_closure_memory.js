
function heavyDuty(index){
    const bigArr = new Array(7000).fill('😆')
    console.log('created');
    
    return bigArr[index]
}


console.log(heavyDuty(2000));
console.log(heavyDuty(2000));
console.log(heavyDuty(2000));

const getHeavy = heavyDuty2();

getHeavy(788)
getHeavy(90)

function heavyDuty2(){
    const bigArr = new Array(7000).fill('😆')
    console.log('created AGAIN');
    
    return function(index){
        return bigArr[index]
    }
}




// const arr = [1, 2, 3, 4];

// for (let i = 0; i < arr.length; i++) {
//   setTimeout(() => {
//     console.log(`I am at index ${i}`);
//   }, 3000);
// }
