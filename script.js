function toggleDescription(descId) {
    const desc = document.getElementById(descId);
    const isVisible = desc.style.display === 'block'; 
    desc.style.display = isVisible ? 'none' : 'block'; 
}