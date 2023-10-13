function SearchNow() {
    document.getElementById('suggestions_container').style.top = "60px";
   // Declare variables
 var input, filter, ul, li, a, i, txtValue;
 input = document.getElementById('search_input');
 filter = input.value.toUpperCase();
 ul = document.getElementById("ultag");
 li = ul.getElementsByTagName('li');
 
 for (i = 0; i < li.length; i++) {
   a = li[i].getElementsByTagName("a")[0];
   txtValue = a.textContent || a.innerText;
   if (txtValue.toUpperCase().indexOf(filter) > -1) {
     li[i].style.display = "";
   } else {
     li[i].style.display = "none";
   }
 }
}

//pull data into ultag container
const suggestions = [
 'Sistema contra incendios',
 'Sistemas de alarmas',
 'CCTV Circuito cerrado de televisión',
 'Servicio de electricidad',
 'Control de acceso',
 'Camaras',
 'Contacto',
 'WhatsApp',
 'Clientes',
 'Sobre Nosotros'
 ]
 
 //loop upper array
 for (var i = 0; i < suggestions.length; i++) {
   const ultag = document.getElementById('ultag');
   ultag.insertAdjacentHTML('afterbegin', `
   <li><a href='#'>${suggestions[i]}</a></li>
   `);
 }
 
 
 //hide suggestions 
 function hide_sugg() {
   document.getElementById('suggestions_container').style.top = "-100%";
 }