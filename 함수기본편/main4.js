'use strict';

class Counter{
    constructor(runEveryFiveTimes){
        this.counter = 0;
        this.callback = runEveryFiveTimes;

    }

    increase(){
        this.counter++;
        console.log(this.counter);
        if(this.counter % 5 === 0){
            this.callback && this.callback(this.counter);
            //위의 코드와 같음 
            // if (this.callback){
            //     this.callback(this.counter);
            // }
        }
    }

}

const coolCounter = new Counter();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();



function printSomething(num){
    console.log(`5의 배수 ${num}`);
}
function alertNum(num){
    alert(`wow! ${num}`);
}
//아래와 같이 할 경우 재사용이 더 쉽다 
const printCounter = new Counter(printSomething);
const alertCounter = new Counter(alertNum);


