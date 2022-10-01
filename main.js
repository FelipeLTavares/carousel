/* function testar(){
  const x = document.getElementsById('teste');

  x.scrollIntoView({behavior: "smooth", inline: "center"})
  window.alert('Ola')
}; */

addEventListener('resize', e => {
  let xxx = document.getElementById('teste');
  xxx.scrollIntoView({ inline: "center"}); 
})

function testar(){
  let xxx = document.getElementById('teste');
  xxx.scrollIntoView({behavior: "smooth", inline: "center"});  
}