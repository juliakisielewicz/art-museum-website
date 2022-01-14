function showMore(idMore) 
        {  
            let more=document.getElementById(idMore);
            let height = more.style.maxHeight;
        
            if (height == "0px") {
                more.style.maxHeight = "200px"; 
                more.style.transition = "max-height 0.7s ease-in";
            }
            else {
              more.style.maxHeight = "0px";
              more.style.transition = "max-height 0.7s ease-out";
            }
        } 