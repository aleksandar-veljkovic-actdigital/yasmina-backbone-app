# Max dimension percentage

In some circumstances CSS max-height and max-width given by percents are not working. This jQuery plugin can fix that problem.

## Usage

**$('TARGET_SELECTOR').maxDimensionPercentage({pct:PERCENTAGE, $source:$SOURCE})**
* TARGET_SELECTOR: selector for element on which max-height is applyed
* pct: max-height and max-width in percents to apply
* $source: jQuery object to get as relatve parent for percentage calculations

## Example
``` html

<div calss="parent-source">
  <div calss="target">
    some content
  </div>
</div>

<!-- include script file to your project -->
<script src="local/thumbor.js"></script>

<!-- initialize jQuer plugin on element -->
<script>
  var RETURNED_OBJECT = $('.target').maxHeightPercentage({pct:100, $source:$('.parent-source')})
</script>


````

## Public methods

**process**
Used to manuali triger calcilations. Notice thet calculations are automatically triggered on $(document).ready, $(window).load, $(window).resize .

``` javascript
  RETURNED_OBJECT.process();
```

##Requirements

jQuery

