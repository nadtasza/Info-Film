
/*window.alert("hello user, Selamat Datang di Info Film");*/




function fungsiTombolMovie(){
 
  let baca=document.getElementById("baca");
  let btnText=document.getElementById("myBtn");
  if(baca.style.display=="none"){
    baca.style.display="block";
    btnText.innerHTML="SEMBUNYIKAN";
  }
  else{
    baca.style.display="none";
    btnText.innerHTML="LANJUT BACA";
  }
}

function fungsiTombolAnimasi(){
  let baca2=document.getElementById("baca2");
  let btnText2=document.getElementById("myBtn2");
  if(baca2.style.display=="none"){
    baca2.style.display="block";
    btnText2.innerHTML="SEMBUNYIKAN";
  }
  else{
    baca2.style.display="none";
    btnText2.innerHTML="LANJUT BACA";
  }
}


function fungsiTombolDramaKorea(){
  let baca3=document.getElementById("baca3");
  let btnText3=document.getElementById("myBtn3");
  if(baca3.style.display=="none"){
    baca3.style.display="block";
    btnText3.innerHTML="SEMBUNYIKAN";
  }
  else{
    baca3.style.display="none";
    btnText3.innerHTML="LANJUT BACA";
  }
}

function fungsiTombolDramaMandarin(){
  let baca4=document.getElementById("baca4");
  let btnText4=document.getElementById("myBtn4");
  if(baca4.style.display=="none"){
    baca4.style.display="block";
    btnText4.innerHTML="SEMBUNYIKAN";
  }
  else{
    baca4.style.display="none";
    btnText4.innerHTML="LANJUT BACA";
  }
}

var i=0;
function fungsiTombolaside(){
  
  let img1=document.querySelector("#img1");
  let imgAll=["assets/image/pokemon2.jpg","assets/image/joker.jpg","assets/image/aladdin.jpg","assets/image/spiderman.jpg"];  

  let btnAside=document.querySelector("#btnAside");
  img1.setAttribute("src",imgAll[i]);
  
    let captionAll=["Pokemon : Detective Pikachu","JOKER","ALADDIN","Spiderman : Far From Home"];
    let caption=document.querySelector("#caption");
  caption.innerHTML=captionAll[i];
  i++;
  if(i==imgAll.length){
    i=0;
  }
}
