
const numbers = Array.from({ length: 16 }, (_, i) => i + 1);




let boxs=document.querySelectorAll('#box');


let list=[]

boxs.forEach(i => {
    const m=i.getBoundingClientRect()
    list.push([m.left,m.top])
});



function move() {
    for (let i = numbers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }
    
    console.log(numbers);

    boxs.forEach((box,i)=>{
        box.innerHTML=numbers[i];
    })
}