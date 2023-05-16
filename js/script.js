searchform = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
  searchform.classList.toggle('active');
}

window.onscroll = () =>{

    searchform.classList.remove('active');

  if(window.scrollY > 80){
    document.querySelector('.header .header-2') .classList.add('active');
  }else{
    document.querySelector('.header .header-2') .classList.remove('active');
  }

}

window.onload = () =>{

    if(window.scrollY > 80){
      document.querySelector('.header .header-2') .classList.add('active');
    }else{
      document.querySelector('.header .header-2') .classList.remove('active');
    }
  
}


let menu = document.querySelector('#menu-bar');
let navmenu = document.querySelector('.nav-menu');

menu.onclick = () =>{
   menu.classList.toggle('fa-times');
  navmenu.classList.toggle('active');
}




// arrow up 

let span = document.querySelector(".up");

span.onclick = () =>{
  window.scrollTo({
    top:0,
    behavior: "smooth",
  });
}


window.onscroll = () =>{

  searchform.classList.remove('active');

if(window.scrollY >= 500){
  document.querySelector('.up') .classList.add('active');
}else{
  document.querySelector('.up') .classList.remove('active');
}

}

window.onload = () =>{

  if(window.scrollY >= 500){
    document.querySelector('.up') .classList.add('active');
  }else{
    document.querySelector('.up') .classList.remove('active');
  }

}



// detail boage image
$(document).ready(function(){

  $('.small-image img').click(function(){

      $(this).addClass('active').siblings().removeClass('active');

      let image = $(this).attr('src');
      $('.big-image img').attr('src',image);

  });

});

// detail boage awl carousel
$('.owl-carousel').owlCarousel({
  loop:true,
  rtl:true,
  autoplay:true,
  autoplayTimeout:4000,
  margin:10,
  nav:true,
  responsive:{
      0:{
          items:2
      },
      400:{
          items:3
      },
      600:{
          items:4
      },
      1000:{
          items:4
      }
  }
})