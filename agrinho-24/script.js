// inicio adicional ao carrinho
var buttons = document.querySelectorAll('.product button');
buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        alert('Produto adicionado ao carrinho!');
    });
    
  });
  
let count = 0;
function increment() {
    count++;
    
    document.getElementById("counter").innerText = count;
  }
  // final adicionar ao carrinho

  // inicio scroll top
document.addEventListener("DOMContentLoaded", function() {
    var scrollTopBtn = document.getElementById('scroll-top-btn');
  
    window.addEventListener('scroll', function() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTopBtn.style.display = 'block';
      } else {
        scrollTopBtn.style.display = 'none';
      }
    });
  
    scrollTopBtn.addEventListener('click', function() {
      document.body.scrollTop = 0; // Para Safari
      document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE e Opera
      
    });
  });
  // final scroll top

  // inicio modo noturno
  var toggleThemeBtn = document.getElementById('toggle-theme-btn');
  toggleThemeBtn.addEventListener('click', function() {
      document.body.classList.toggle('dark-mode');
  });

  
  document.getElementById("modoNoturnoBtn").addEventListener("click", function() {
    var div = document.getElementById("minhaDiv");
    div.classList.toggle("divNormal");

    div.classList.toggle("divModoNoturno");
  });
  // final modo noturno


