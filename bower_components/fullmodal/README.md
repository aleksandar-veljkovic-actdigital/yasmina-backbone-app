# Full Modal

> v.0.9.0

This pulugin displays html `Content` by populating it in full viewport. It is cross browser and cross device compatible.

## How It Works

* **On initialization:**
  * Pull `Content` from Dom
  * Hide all first childrens of the `<body>`
  * Append desired `Content` as visible first child of the `<body>`
* **On close:**
  * Return `Content` on place where it was taken
  * Returns visibility of `<body>` first childrens
  * Scroll back window to position where initialization starts

## Benefits

This plugin obtain maximum compatibility and performance by using static positioning and native window scrolling. Content can be served as scrollable or fited to viewport.

### Requirements:

 * [ jQuery ](http://jquery.com/download/)

### Including

```html
<!-- Include js plugin -->
<script src="PATH_TO_PLUGIN/full-modal.js"></script>
```

## Usage:


#### Call Plugin:

```js
$("some-content-selector").fullModal();
```

#### Settings and options:

```js
$("some-content-selector").fullModal({
    closeText: "<span>&#215;</span>",  // [string] html of close button
    closeButton: true, // [boolean] display close button
    aditionalStyle: false // [boolean||string] css while modal
    onclose: function(){}, // [function] on close callback
});
```

#### Methods:

```js
// bind:
var fullModal = $("some-content-selector").fullModal();

// if you wish to close modal call:
fullModal.close();
```

#### Examles:

To feet to vieport (no scroll);
```js
$("some-content-selector").fullModal({
    aditionalStyle: "html,body,#dwf-fullscreen-wrap{width:100%;height:100%;overflow:hidden;position:relative;}"
});
```

License
------------
The MIT License (MIT)