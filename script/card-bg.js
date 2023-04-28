const cards=document.getElementsByClassName('card');
for(const card of cards){
  card.addEventListener('mouseenter',function(e){
    rgba=changeBackground();
    e.target.style.background=changeBackground();
    
  });
  card.addEventListener('mouseleave',function(e){
    e.target.style.background="white"; 
  });
}
