const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth; 
canvas.height = window.innerHeight; 

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth; 
    canvas.height = window.innerHeight;  
})

const mouse = {
    x: undefined,
    y: undefined,
};

class Particle{
    constructor(x, y){
        this._baseX = x;
        this._baseY = y;
        this._currX = x;
        this._currY = y;
        this._size = 5;
        this._color = 'white';
        this._dx = 0;
        this._dy = 0;
    }

    update(){
        const vectorToMouse = [mouse.x - this._currX , mouse.y - this._currY];
        const vectorToBase = [this._baseX - this._currX, this._baseY - this._currY];
        const vectorMouseToBase = [mouse.x - this._baseX, mouse.y - this._baseY];

        const distanceToMouse = Math.sqrt(vectorToMouse[0]**2 + vectorToMouse[1]**2);
        const distanceToBase = Math.sqrt(vectorToBase[0]**2 + vectorToBase[1]**2);
        const distanceMouseToBase = Math.sqrt(vectorMouseToBase[0]**2 + vectorMouseToBase[1]**2);

        if (distanceToMouse < 30 && distanceToBase < 60){
            this._dx = -vectorToMouse[0] / distanceToMouse;
            this._dy = -vectorToMouse[1] / distanceToMouse;
        } else if (distanceMouseToBase >= 30 && distanceToBase > 0.5){
            this._dx = vectorToBase[0] / distanceToBase;
            this._dy = vectorToBase[1] / distanceToBase;
        } else{
            this._dx = 0;
            this._dy = 0;
        }

        this._currX += this._dx;
        this._currY += this._dy;
    }

    draw(){
        ctx.fillStyle = this._color;
        ctx.beginPath();
        ctx.arc(this._currX, this._currY, this._size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }
}

canvas.addEventListener('mousemove', (event) => {
    mouse.x = event.x;
    mouse.y = event.y;
});


const particles = [];
for(let i = 0; i < 10; i++){
    for(let j = 0; j < 10; j++){
        particles.push(new Particle(250 + i*10, 250 + j*10));
    }
}

function mainLoop(){
    particles.forEach(particle => particle.update());

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(particle => particle.draw());

    requestAnimationFrame(mainLoop);
}

mainLoop();

document.addEventListener('click', () => {
    const distanse = Math.sqrt((mouse.x - myParticle._currX)**2 + (mouse.y - myParticle._currY)**2);
    console.log(mouse.x, mouse.y);
    console.log(myParticle._currX, myParticle._currY);
    console.log(distanse);
})