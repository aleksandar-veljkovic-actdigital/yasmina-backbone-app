# gallery-captions

Simply change displayed content by fading. Fixing hight difference by css transition animation. 
Designed for displaying titles and captions in conjuction with corousels and sliders.

### Requirements:

 * [ jQuery ](http://jquery.com/download/)
 
### Usage

```html

...

<!-- Include js plugin -->
<script src="[YOUR PATH TO JQUEYR]/jQuery.js"></script>
 
<!-- Include js plugin -->
<script src="[YOUR PATH TO GALLERY CAPTION]/gallery-captions.js"></script>

...

<!-- Content -->
<div class="captions">
  <div>caption 1</div>
  <div>caption 2</div>
  <div>caption 3</div>
  <div>caption N</div>
</div>

<!-- Initialization -->
<script>
  var captions = $('.captions').galleryCaption(/*settings and options*/);
</script>


<!-- DO THE BUSINESS  -->
<script>
  captions.goTo(2); // method: goTO; parameter: caption to display;
  //OR
  //$('.captions').data('galleryCaption').goTo(2);
</script>


```

### Config

```javascript

$('.captions').galleryCaption({
  rtl: false, // reorder elements for RTL
  autoHeight: false // true: resize container height after change;
                    // false: set containers  height on init
});

```
