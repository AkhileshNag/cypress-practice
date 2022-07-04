let marks2 =Array(6)
var marks = new Array(20,25,30,12,37,80)

var marks = [20,25,30,12,37,80]
console.log(marks[2])
marks[3]=35
console.log(marks[3])
console.log(marks)
console.log(marks.length)
marks.push(45)// add element at the end of the array
console.log(marks)
marks.pop()//remove the element from the end
console.log(marks)
marks.unshift(100)// to add element at the starting of the array
console.log(marks)
console.log("index of ele--->"+marks.indexOf(37))
console.log("Ele present ?-->"+marks.includes(120))// checks whether the given element is present in the array or not
var subArray = marks.slice(2,5)
console.log(subArray)
let n=0
for(let i=0;i<marks.length;i++){
    n++
    console.log("subject "+n+"="+marks[i])
}
//reduce on array
let total=marks.reduce((sum,mark)=>sum+mark,0)
console.log(total)
var scores=[12,13,14,16]
var evenScores = []
for(let j=0;j<scores.length;j++){
    if(scores[j]%2==0){
        evenScores.push(scores[j])
    }
}
console.log(evenScores)
//filter on array
let filterEvencores = scores.filter(ele=>ele%2==0)
console.log(filterEvencores)
//map example-->[12,14,16]->[36,42,48]
let newMultipleScores = scores.map(ele=>ele*3)
console.log(newMultipleScores)
let sumOfNewScores = newMultipleScores.reduce((sum,arrEle)=>sum+arrEle,0)
console.log(sumOfNewScores)
//chaining
var scores1=[12,13,14,16]
let chainingvalue = scores1.filter(ele=>ele%2==0).map(ele=>ele*3).reduce((sum,arrEle)=>sum+arrEle,0)
console.log(chainingvalue)
//sorting
let unsortedArr = ["fruits","vegetables","flowers","leafies"]
console.log(unsortedArr.sort())
console.log(unsortedArr.reverse())
var scores1=[12,003,13,14,16]
console.log(scores1.sort())
console.log(scores1.sort((a,b)=>a-b))
