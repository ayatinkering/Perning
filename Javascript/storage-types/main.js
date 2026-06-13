localStorage.setItem('name','ayati');
console.log(localStorage.getItem('name')); 
//persistant, even on reloading tab (unlike session storage)

sessionStorage.setItem('name','john'); //can update n overwrite
sessionStorage.removeItem('name');

document.cookie='name=kyle;expires='+new Date(2030,0,1).toUTCString()
document.cookie='lastName=smith';

//ONLY WAY to view cookies is to view all cookes, no easy way like local&session storage