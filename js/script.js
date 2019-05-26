var sidebarToggler= document.getElementById('sidebar-toggler');
  var sidebar = document.getElementById('sidebar');
  function toggle(){
    sidebar.classList.toggle('hide-show');
    sidebar.classList.toggle('display');
  }
  sidebarToggler.addEventListener('click', toggle);

var dateControl = document.querySelectorAll('input[type="date"]');
  Array.from(dateControl).forEach(function(element){ 
  element.value = '2019-05-14'
  });

  //Wyświetlanie dzisiejszej daty domyślnie w input[type='date'] //
  //jaki jest sposób, bo tutaj :
  //error: ten format nie jest obsługiwany //
  //   var today = function(){
  //     var Today = new Date();
  //     var Month = Today.getMonth();
  //     var Day = Today.getDate();
  //     var Year = Today.getFullYear();
  //        if(Year <= 99)    Year += 1900
  //     return `${Day}.${Month}.${Year}`;
  //   }
  // Array.from(dateControl).forEach(function(element){ 
  //   element.value= today();
  // });