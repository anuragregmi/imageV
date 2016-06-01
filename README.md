# imageV
A image viewer generator for webpage.

#Installation
  Just few steps and you are using this thing.
  
1.Download imageV.css and imageV.js .<br>
2.Include our css file to your web page <br>
```html
      <link rel="stylesheet" href="imageV.css">
```
3.Put your image in your web page and give the class name ```imageV``` (put all of your images in a div)
```html
      <img src="image.jpg" class="imageV">
```
4.All the styles that you want to give to your image, define it in ```img``` class
```css
      .img{width:123px;height:123px;}
```
5.At the end of your webpge run ```imageV.js```
```html
      <script type="text/javascript" src="imageV.js"></script>
```

As a whole your webpage is should be like this
```html
    <html>
      <head>
        <link rel="stylesheet" href="imageV.css">
        <style>
          .img{ height:400px; }//your css
        </style>
      </head>
      <body>
        <div>
          <img src="image1.jpg" class="imageV">
          <img src="image2.jpg" class="imageV">
          <img src="image3.jpg" class="imageV">
        </div>  
        <script type="text/javascript" src="imageV.js"></script>
      </body>
    </html>
```
## Customization 
### Editing your images in webpage</h2>
	


   You can also add a select button to your image by uncommenting some comments in imageV.js 
   <br>in line 33
```
/* + "<button class=\"btn-floating round\" onclick=\"myfunction(slideIndex)\" style=\"position:absolute;top:90%;left:45%;width:10%\">Select</button>\"*/
```
  in 71
```
/* else if (event.keyCode == 13)//for enter
                {
                    
                    myfunction(slideIndex);
                    
                }
			*/
```

  and in line 75
```
/*function myfunction()
{
	//define your function here
}
*/
```
