const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

canvas.height = 300;
canvas.width = 300;
ctx.beginPath();
ctx.moveTo(100,50);
ctx.lineTo(300,50);
ctx.stroke();




// going to come back to animate later and figure out why the border for my cavas is not showing
// up but for now I am goig to figure out what the fuck is goig on with the fundamentals

ctx.fillStyle = 'salmon';
// function that keeps randomly choosing color possible or every pixel in that rectangle
// randomly chooses colors
// or smartly chooses color would be really cool
// or choosing colors for the 10x10 squares would be sick

// let x =0;
// function animate(){
     ctx.fillRect(50,50,10,10);
//     x+=1;
   
//     requestAnimationFrame(animate);
// }

// ok now we can draw lets freaking animate
// first we can use a for loop

const size = 20;
let x =0;
// const id = setInterval(() =>{
//     for (let x = 0; x < canvas.width; x += size)
//         {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     ctx.fillRect(x,50,size-15,size);
    
// }},1000)

// this  just jumps from our first state to our second state we need time in between
// the fucking drawing

const id = setInterval(() =>{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillRect(x,50,size-15,size);
    x+=20
    
},1000)