// Show selected section, hide others
function showSection(id){
  document.querySelectorAll('main > section').forEach(s => s.style.display='none');
  const target = document.getElementById(id);
  if(target) target.style.display='block';
  window.scrollTo(0,0);

  // Animate skill bars if skills section
  if(id==='skills'){
    document.querySelectorAll('.bar').forEach(bar=>{
      const percent = bar.getAttribute('data-percent');
      bar.firstElementChild.style.width = percent + '%';
    });
  } else {
    document.querySelectorAll('.bar div').forEach(bar=>bar.style.width='0');
  }
}

// Show home by default
document.addEventListener('DOMContentLoaded', ()=>{
  showSection('home');

  // Set current year
  const y = new Date().getFullYear();
  const el = document.getElementById('year');
  if(el) el.textContent = y;
});
