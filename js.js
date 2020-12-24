window.addEventListener('load', () =>{
    const preload=document.querySelector('.preload');
    preload.classList.add('preload-finish');
  
  });
  
  var prevScrollpos = window.pageYOffset;
          window.onscroll = function() {
  
          var mybutton = document.getElementById("myBtn");
          if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
              mybutton.style.display = "block";
          } else {
              mybutton.style.display = "none";
          }
  
          }
        
          var modal = document.getElementById("myModal");

          // Get the button that opens the modal
          var btn = document.getElementById("btn");
          
          // Get the <span> element that closes the modal
          var span = document.getElementsByClassName("close")[0];
          
          // When the user clicks on the button, open the modal
          btn.onclick = function() {
            modal.style.display = "block";
          }
          
          // When the user clicks on <span> (x), close the modal
          span.onclick = function() {
            modal.style.display = "none";
          }
          
          // When the user clicks anywhere outside of the modal, close it
          window.onclick = function(event) {
            if (event.target == modal) {
              modal.style.display = "none";
            }
          }
  

          var btn22 = document.getElementById("btn22");
          var btn33 = document.getElementById("btn33");
          var btn44 = document.getElementById("btn44");
          var btn55 = document.getElementById("btn55");
          var btn66 = document.getElementById("btn66");
          var btn77 = document.getElementById("btn77");
          var co222 = document.getElementById("co222");
          var co333 = document.getElementById("co333");
          var co444 = document.getElementById("co444");
          var co5 = document.getElementById("co5");
          var co6 = document.getElementById("co6");
          var co7 = document.getElementById("co7");

          btn22.onclick = function() {
            btn22.style.display = "none";
            btn33.style.display = "block";
            co222.style.display = "none";
            co777.style.display = "none";
            co5.style.display = "none";
            co8.style.display = "none";
          }

          btn33.onclick = function() {
            btn33.style.display = "none";
            btn22.style.display = "block";
            co222.style.display = "block";
            co777.style.display = "block";
            co5.style.display = "block";
            co8.style.display = "block";
          }

          btn44.onclick = function() {
            btn44.style.display = "none";
            btn55.style.display = "block";
            co333.style.display = "none";
            co666.style.display = "none";
            co6.style.display = "none";
            co9.style.display = "none";
          }

          btn55.onclick = function() {
            btn55.style.display = "none";
            btn44.style.display = "block";
            co333.style.display = "block";
            co666.style.display = "block";
            co6.style.display = "block";
            co9.style.display = "block";
          }


          btn66.onclick = function() {
            btn66.style.display = "none";
            btn77.style.display = "block";
            co444.style.display = "none";
            co555.style.display = "none";
            co7.style.display = "none";
          }

          btn77.onclick = function() {
            btn77.style.display = "none";
            btn66.style.display = "block";
            co444.style.display = "block";
            co555.style.display = "block";
            co7.style.display = "block";
          }

          var val = document.getElementById("valR").value;
          document.getElementById("range").innerHTML=val+"度";
          document.getElementById("img").src = "img/好珊瑚.png";
          function showVal(newVal){
            document.getElementById("range").innerHTML=newVal+"度";
            if(newVal >= 10 && newVal < 23)
              document.getElementById("img").src = "img/中珊瑚.png";
            else if(newVal >= 23 && newVal < 28)
              document.getElementById("img").src = "img/好珊瑚.png";
            else if(newVal >= 29)
              document.getElementById("img").src = "img/壞珊瑚.png";
          }



  // When the user clicks on the button, scroll to the top of the document
          function topFunction() {
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
          }
  
  
          function openNav() {
          document.getElementById("myNav").style.width = "100%";
          }
  
          function closeNav() {
          document.getElementById("myNav").style.width = "0%";
          }
  
          function closeNav() {
          document.getElementById("myNav").style.width = "0%";
          }
  
         
          gsap.registerPlugin(ScrollTrigger);
  
          gsap.to(".whale-right",{
        
            scrollTrigger: {
                trigger: ".main3",
                 // pin the trigger element while active
                start: "top 40%", // when the top of the trigger hits the top of the viewport
                end: "top 80%", // end after scrolling 500px beyond the start
                scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
                pin: true,
                // markers: true,
              },
              x:-450,
              opacity: 1,
              ease:"none",
              duration:1000,
              
            });

            
      
  
  
         
  
      $(window).mousemove(function(evt){
          var pagex=evt.pageX;
          var pagey=evt.pageY;
  
  
          $(".fish small").css("transform","translateX("+(pagex/-20+50)+"px)")
          $(".fish medium").css("transform","translateX("+(pagex/-10+50)+"px)")
          $(".fish large").css("transform","translateX("+(pagex/-15+20)+"px)")
          $(".main4-pic1").css("transform","translateX("+(pagex/-40+20)+"px)")
          // $(".main4-text1").css("transform","translateX("+(pagex/-40+20)+"px)")
      })
  

      $('#1').waypoint(function() {
        increment(1, 20);
      }, {offset: '100%'});
  
      function increment(elem, finalVal) {
        var currVal = parseInt(document.getElementById(elem).innerHTML, 10);
        if (currVal < finalVal) {
          currVal++;
          document.getElementById(elem).innerHTML = currVal + "";
      
          setTimeout(function() {
            increment(elem, finalVal);
          }, 40)
        }
      };
