var map;
      function initMap() {
      	myLatlng = {lat: 41.725381, lng: 44.7438818}
        map = new google.maps.Map(document.getElementById('maps'), {
          center: myLatlng, 
          zoom: 16

        });

        marker = new google.maps.Marker({
          position: myLatlng,
          map: map,
          title: 'Hello World!',
          icon: '/assets/images/static/Pin.png'
        });
      }

function bookClicked(){
  document.getElementById('book-li').className += ' opened';
  document.getElementById('header').className += ' white';

  hide(document.getElementById('book')); //hide book
  show(document.getElementById('close')); //show close
  show(document.getElementById('booking-form-wrapper')); // show wrapper
}

function closeClicked(){
  const bookLi = document.getElementById('book-li');
  const header = document.getElementById('header');
  show(document.getElementById('book')); //show book
  hide(document.getElementById('close')); //hide close
  hide(document.getElementById('booking-form-wrapper')); //hide wrapper

  hide(document.getElementById('booking-success')); //success
  show(document.getElementById('booking-form')); // form


  bookLi.className = bookLi.className.replace('opened','');
  header.className = header.className.replace('white','');

}

function submitClicked(){
  show(document.getElementById('booking-success')); //success
  hide(document.getElementById('booking-form')); // form
}

function contactSubmitClicked(){
  show(document.getElementById('booking-success')); //success
  hide(document.getElementById('input-form-wrapper')); // form
}

function show(el){
   el.style.display = 'block'
}

function hide(el){
  el.style.display = 'none';
}
