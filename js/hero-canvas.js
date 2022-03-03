const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const Particles_array =[];
let hue = 0;
let n_particles = 3;


			//avoid stretching
window.addEventListener('resize', ()=>{
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;	
})
// -----------------------------------

const mouse = { x: undefined, y: undefined};

document.addEventListener("mousemove", (event)=>{
	mouse.x = event.x;
	mouse.y = event.y;

	for(let i = 0; i<n_particles; i++) Particles_array.push(new Particle());
})



class Particle {
	constructor(){
		this.x= mouse.x;
		this.y= mouse.y;
		this.size = Math.random() * 15+1;
		this.speedX = Math.random() * 3 -1.5; //random btw 1.5 and -1.5
		this.speedY = Math.random() * 3 -1.5;
		this.color = `hsl(${hue}, 100%, 50%)`;
	}
	
				// Methods
	update(){
		this.x += this.speedX;	
		this.y += this.speedY;
		if(this.size > .2) this.size-=.1;
	}
	draw(){
		ctx.fillStyle = this.color;
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2 );
		ctx.fill()
		ctx.closePath();
	}
}

animate();


function handleParticles(){
	for(let i=0; i<Particles_array.length; i++){
		Particles_array[i].update();
		Particles_array[i].draw();


			//first looping, after splice, KEEP THIS ORDET TO AVOID UNDEFINED
		for(let j=i; j<Particles_array.length; j++){
					//pythagorean theory
			const dx = Particles_array[i].x - Particles_array[j].x;
			const dy = Particles_array[i].y - Particles_array[j].y;
			const distance = Math.sqrt(dx * dx + dy * dy);
		
			if(distance < 100){
				ctx.strokeStyle = Particles_array[i].color;
				// ctx.lineWidth = Particles_array[i].size;
				ctx.lineWidth = 1;
				ctx.beginPath();
				ctx.moveTo(Particles_array[i].x, Particles_array[i].y);
				ctx.lineTo(Particles_array[j].x, Particles_array[j].y);
				ctx.stroke();
				ctx.closePath();
			}
		}

		if(Particles_array[i].size<=.3){
			Particles_array.splice(i,1);
			i--;
		}		
	}
}

function animate(){
	ctx.clearRect(0,0, canvas.width, canvas.height);
	handleParticles();
	hue= hue+5;
	requestAnimationFrame(animate);
}