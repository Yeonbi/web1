var Links = {
  setColor:function(color){
    // var alist = document.querySelectorAll('a');
    // var i = 0;
    // while(i < alist.length){
    //   alist[i].style.color = color;
    //   i = i + 1;
    // }
    $('a').css('color', color);
  }
}
var Body = {
  setColor:function(color){
    // document.querySelector('body').style.color = color;
    $('body').css('color', color);
  },
  setBackgroundColor:function(color){
    // document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor', color);
  }
}

function nightDayhandler(self){
  var target=document.querySelector('body');
  if(self.value === 'night'){
    // target.style.backgroundColor = 'black';
    Body.setBackgroundColor('black')
    // target.style.color = 'white';
    Body.setColor('white');
    self.value = 'day';

    Links.setColor('powderblue');
    }
    else{
    // target.style.backgroundColor = 'white';
    Body.setBackgroundColor('white')
    // target.style.color = 'black';
    Body.setColor('black');
    self.value = 'night';

    Links.setColor('blue');
    }
  }
