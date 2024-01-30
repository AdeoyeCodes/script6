function calculate() {
 var radius = document.getElementById('radiusInput').value;

 var area = (4 * Math.PI * Math.pow(radius, 2)).toFixed(3);
 var volume = ((4 / 3) * Math.PI * Math.pow(radius, 3)).toFixed(3);

 if(radius.trim()== "" || radius.trim() == "0") {
 alert('Hey, you have started again! Put in some my Friend.');
return false; 
}
 
 var displayarea = ''+area+' is the area of the entered radius';
 var displayvolume = ''+volume+' is the volume of the entered radius';
 
 document.getElementById('Sarea').innerHTML = displayarea
 document.getElementById('Svolume').innerHTML = displayvolume;
 document.getElementById('Sarea').style.display = 'block';
 document.getElementById('Svolume').style.display = 'block';
 document.getElementById('Sarea').style.fontFamily = 'calibri';
 document.getElementById('Svolume').style.fontFamily = 'Georgia';
}