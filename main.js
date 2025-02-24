











let images = document.querySelectorAll(".image_container img");

let ul = document.createElement("ul");

let indicators = document.querySelector(".indicators");


let i=0;
images.forEach( image => { 

  image.classList.add(`image${++i}`);

  let li = document.createElement("li");

  li.id=`image${i}`;

  li.innerHTML=`${i}`;

  ul.appendChild(li);


  
});

indicators.appendChild(ul);

let lis = document.querySelectorAll(".indicators ul li");

lis[0].classList.add("active")



function showImageByNum()
{

 let activeli=document.querySelector(".indicators ul li.active");

    images.forEach(image => {

      image.style.opacity=0;
      
      if(  image.classList.contains(activeli.id))
        {
          image.style.opacity=1;
          
      };

    })

  

}





// let li = document.querySelector(".indicators ul li");

// li.addEventListener("click",function(e) {



// })




lis.forEach((li) => {

  li.addEventListener("click",function(e){
    
    lis.forEach(li => li.classList.remove("active"))
    // li.classList.remove("active");
    
    e.currentTarget.classList.add("active");
    
    showImageByNum();
    UpdateControlles();
  })
  
})




// lis.forEach((li)=> console.log(li.dataset.num));





//Pervious and next  



function PerviousImage()
{
  
  
  lis.forEach((li) => {
    
    if(!(li.id ==="image1"))
      { 
        

      // lis.forEach(li => li.classList.remove("active"))
        if(li.classList.contains("active")){

          li.classList.remove("active");

          let liNum=parseInt(li.innerHTML);
          --liNum;
          // console.log(liNum)
        let liperv = document.getElementById(`image${liNum}`);
liperv.classList.add("active");


            showImageByNum()
        }

     } 


  })


}


let Pervious = document.querySelector(".slider_controls .pervious");
let Next =document.querySelector(".slider_controls .next")

let SlideNum = document.querySelector(".slideNum");


Pervious.addEventListener("click",function () {


  if(!(document.querySelector(".active").innerHTML==="1"))
  {

      PerviousImage();
      UpdateControlles();

  }

})



// next button



function NextImage() {
  // lis.forEach((li) => {

    // let newlis= Array.from(lis);
    for (let i =0;i<lis.length;i++) {
      if (lis[i].classList.contains("active")) {
        // lis.forEach(li => li.classList.remove("active"))
        if (lis[i].classList.contains("active")) {
          lis[i].classList.remove("active");

          let liNum = parseInt(lis[i].innerHTML);
          if (liNum < 5) {
            liNum++;
          }
          // console.log(liNum);
          let liNext = document.getElementById(`image${liNum}`);
          liNext.classList.add("active");

          showImageByNum();
          break;
        }
      }
    };
}


Next.addEventListener("click",function () {


  if(!(document.querySelector(".active").innerHTML==="5"))
  {

      NextImage();
      UpdateControlles();

  }

})



function disapledpervNext() {
  if(document.querySelector("li.active").id==="image1") {
    Pervious.classList.add("disabledButton");
    Pervious.style.cursor = "default";
  } else {
    if(Pervious.classList.contains("disabledButton")) {
      Pervious.classList.remove("disabledButton");
      Pervious.style.cursor = "pointer";
    }
  }
    
  if (document.querySelector("li.active").id === "image5") {
    Next.classList.add("disabledButton");
    Next.style.cursor = "default";
  } else {
    if (Next.classList.contains("disabledButton")) {
      Next.classList.remove("disabledButton");
      Next.style.cursor = "pointer";
    }
  }
}




function changeSlideNum(){

SlideNum.textContent=`Slide #${document.querySelector("li.active").textContent}`;

}


function UpdateControlles()
{
  
  
  changeSlideNum();
  
  disapledpervNext(); 

}



window.onload = UpdateControlles();


