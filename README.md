# imageV
A image viewer creator for webpage.

##Installation
  Just two steps and you are using this thing.
  
  1. Download imageV.css and imageV.js .
  2. Include our css file to your web page <br>
```html
      <link rel="stylesheet" href="imageV.css">
```
  3. Put your image in your web page and give the class name ```imageV```
```html
      <img src="image.jpg" class="imageV">
```
  4. All the styles that you want to give to your image, define it in ```img``` class
```css
      .img{width:123px;height:123px;}
```
  5. At the end of your webpge run ```imageV.js```
```html
      <script type="text/javascript" src="imageV.js"></script>
```

  As a whole your webpage is should be like this
```
    <html>
      <head>
        <link rel="stylesheet" href="imageV.css">
        <style>
          .img{ height:400px; }//your css
        </style>
      </head>
      <body>
        <img src="image1.jpg" class="imageV">
        <img src="image2.jpg" class="imageV">
        <img src="image3.jpg" class="imageV">
        
        <script type="text/javascript" src="imageV.js"></script>
      </body>
    </html>
```
