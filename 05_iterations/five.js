const coding = ["cpp", "Php", "Java", "Python", "Ruby"]

// coding.forEach ( function (val){
//     console.log(val)
// } )

// coding.forEach( (items) => {
//     console.log(items)
// } )

// function printMe(item){
//     console.log(item)
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// })


const myCoding = [
    {
        languageName : "JavaScript",
        langaugeFileName : "js"
    },
    {
        languageName : "Python",
        langaugeFileName : "py"
    },
    {
        languageName : "c++",
        langaugeFileName : "cpp"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
})