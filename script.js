// Show sections
function showSection(id){
  document.querySelectorAll('main section').forEach(s=>s.style.display='none');
  const section=document.getElementById(id);
  if(section) section.style.display='block';
  window.scrollTo({top:0,behavior:'smooth'});
}

// Current year
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Skills graph
const canvas=document.getElementById('skillsCanvas');
const ctx=canvas.getContext('2d');
canvas.width=canvas.clientWidth;
canvas.height=canvas.clientHeight;

const skills=[
  {name:'HTML',value:90},
  {name:'CSS',value:85},
  {name:'JavaScript',value:80},
  {name:'MySQL',value:70},
  {name:'Metadata',value:95}
];

let t=0;
function drawGraph(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  const w=canvas.width,h=canvas.height,gap=w/(skills.length-1);
  ctx.beginPath();
  ctx.moveTo(0,h*(1-skills[0].value/100*Math.abs(Math.sin(t/50))));
  for(let i=1;i<skills.length;i++){
    const y=h*(1-skills[i].value/100*Math.abs(Math.sin((t+i*10)/50)));
    ctx.lineTo(i*gap,y);
  }
  ctx.strokeStyle="#ffd36e";
  ctx.lineWidth=3;
  ctx.stroke();

  for(let i=0;i<skills.length;i++){
    const y=h*(1-skills[i].value/100*Math.abs(Math.sin((t+i*10)/50)));
    ctx.beginPath();
    ctx.arc(i*gap,y,6,0,2*Math.PI);
    ctx.fillStyle="#ff6ec7";
    ctx.fill();
    ctx.font="14px Poppins";
    ctx.fillText(skills[i].name,i*gap-14,y-12);
  }
  t++;
  requestAnimationFrame(drawGraph);
}
drawGraph();

window.addEventListener('resize',()=>{
  canvas.width=canvas.clientWidth;
  canvas.height=canvas.clientHeight;
});
