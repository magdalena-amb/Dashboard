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
  // element.value = today();
    });

  // Modal //
    function closeModal() {
      document.getElementById('overlay').classList.remove('show')
    }
  //zamykanie poprzez kliknięcie elementu z klasą .js--close-modal //
    document.querySelectorAll('#overlay .js--close-modal').forEach(function(btn) {
      btn.addEventListener('click', function(e) {
        e.preventDefault()
        closeModal()
      })
    })

  //zamykanie poprzez kliknięcie w overlay 
    document.querySelector('#overlay').addEventListener('click', function(e) {
      if(e.target === this) {
        closeModal()
      }
    })
  
  //zamykanie poprzez kliknięcie esc na klawiaturze
    document.addEventListener('keyup', function(e) {
      if(e.keyCode === 27) {
        closeModal()
      }
    })
  
  // Otwieranie Modala
  function openModal(modal) {
    document.querySelectorAll('#overlay > *').forEach(function(modal) {
      modal.classList.remove('show')
    })
    document.querySelector('#overlay').classList.add('show')
    document.querySelector(modal).classList.add('show')
  }
  
  openModal('#myModal');
//Podpięcie otwierania modali pod konkretny element
 document.querySelector('#alert').addEventListener('click', function(e) {
  e.preventDefault;
   openModal('#myModal');
   }
 );

 //Wykres Chart.js / canvas
 var ctx = document.getElementById('myChart').getContext('2d');

 var chart = new Chart(ctx, {
  // 1
  type: 'bar',
  data: {
      // 2
      labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
      // 3
      datasets: [{
          // 4
          label: "Signups",
          // 5
          backgroundColor: '#8DBEC8',
          borderColor: '#8DBEC8',
          // 6
          data: [ 52, 51, 41, 94, 26, 6, 72, 9, 21, 88 ],
      },
      {
          label: "FTD",
          backgroundColor: '#F29E4E',
          borderColor: '#F29E4E',
          data: [ 6, 72, 1, 0, 47, 11, 50, 44, 63, 76 ],
      },
      {
          label: "Earned",
          backgroundColor: '#71B374',
          borderColor: '#71B374',
          data: [ 59, 49, 68, 90, 67, 41, 13, 38, 48, 48 ],
          // 7
          hidden: true,
      }]
  },
});