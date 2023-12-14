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

// Pull data into ultag container
const suggestions = [
  'Sistema contra incendios',
  'Sistemas de alarmas',
  'CCTV Circuito cerrado de televisión',
  'Servicio de electricidad',
  'Control de acceso',
  'Camaras',
  'Contacto',
  'Clientes',
  'Sobre Nosotros'
];

// Map suggestions to page links
const pageLinks = {
  'Sistema contra incendios': 'incendios.html',
  'Sistemas de alarmas': 'alarmas.html',
  'CCTV Circuito cerrado de televisión': 'cctv.html',
  'Servicio de electricidad': 'electricidad.html',
  'Control de acceso': 'acceso.html',
  'Camaras': 'cctv.html',
  'Contacto': 'contacto.html',
  'Sobre Nosotros': 'Nosotros.html'
};

// Loop through the suggestions array
for (var i = 0; i < suggestions.length; i++) {
  const ultag = document.getElementById('ultag');
  const pageLink = pageLinks[suggestions[i]];
  ultag.insertAdjacentHTML('afterbegin', `
      <li><a href='${pageLink}'>${suggestions[i]}</a></li>
  `);
}

// Hide suggestions 
function hide_sugg() {
  document.getElementById('suggestions_container').style.top = "-100%";
}


//funciones de whatsapp
function openform() {
  document.getElementById("myForm").style.display = "block";
}
function closeform() {
  document.getElementById("myForm").style.display = "none";
}



