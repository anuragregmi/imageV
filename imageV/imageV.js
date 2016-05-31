/* 
Name : Anurag Regmi
E-mail: anurag1234565@gmail.com
github: github.com/anurag1234565
*/
window.onkeydown = onKeypress;
var i;


var z = document.getElementsByClassName("imageV");
var l = z.length;
var parent = z[0].parentNode


//creating elements <a> <img></a>
for( i=0 ; i<l ; i++ )
{
    a = document.createElement('a');
    a.setAttribute("href","#");
    a.setAttribute("onclick","show("+i+")");
    a.innerHTML="<img src="+z[i].src+" class=\"img\">";
    console.log(i);
    parent.appendChild(a);
}

//creating image viewer
var m = document.createElement("DIV");
var s =" <div id=\"id01\" class=\"modal\" ><div class=\"modal-content property card\"><div class=\"content\" style=\"position:relative\"><span onclick=\"document.getElementById('id01').style.display='none'\" class=\"closebtn \" style=\"position:absolute;top:0;right:0\">&times;</span>";
for(i=0; i<l; i++)
{
    s=s +"<img src="+z[i].src+" class=\"slides img\" style=\"width:100%\"> ";
}
s = s+ "<a class=\"btn-floating\" style=\"position:absolute;top:45%;left:0\" onclick=\"plusDivs(-1)\"><b><</b></a><a class=\"btn-floating\" style=\"position:absolute;top:45%;right:0\" onclick=\"plusDivs(1)\"><b>></b></a>"/* + "<button class=\"btn-floating round\" onclick=\"myfunction(slideIndex)\" style=\"position:absolute;top:90%;left:45%;width:10%\">Select</button>\"*/;             
                
m.innerHTML = s;
document.body.appendChild(m); 

//removing initial img element
for(i=0;i<l;i++)
{
    parent.removeChild(z[0]);
}

    




function onKeypress(event)//function for any key pressed
        {
            
            if ( document.getElementById('id01').style.display != 'none')  //if the image viewer is displayed
            {
                
               if (event.keyCode == 27) //foe esc key press
                {
                    
                    document.getElementById('id01').style.display = 'none';
                }
                
                else if (event.keyCode == 37)// for left arrow
                {
                    plusDivs(-1); //changing image
                }
                
                else if (event.keyCode == 39)//for right arrow
                {
                    plusDivs(1); //changing image
                }
                
               /* else if (event.keyCode == 13)//for enter
                {
                    
                    myfunction(slideIndex);
                    
                }
			*/
            }
        }
      
    
var slideIndex;
        
function show(n)
{
            slideIndex=n;
            document.getElementById('id01').style.display='block';//shows hidden image viewer
            showDivs(slideIndex);//loads image
}
    
function plusDivs(n)
{
            showDivs(slideIndex += n);//chanding the image
}
        
function showDivs(n) 
{
            var i;
            var x = document.getElementsByClassName("slides");//gets the documents
            //x.length = no of elements(images) 
            if (n > x.length) // if n is more than no of elements it goes to first one
            {
                slideIndex = 1
            }
            if (n < 1) //if n is less than no. of image then 
            {
                slideIndex = x.length //sets slideIndex to current image index 
            } 
            for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";//hides all the image
            }
            x[slideIndex-1].style.display = "block";//shows the asked image
            
            
}

/*function myfunction()
{
	
}
*/


