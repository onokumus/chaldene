```css
/**
 * @define utilities
 * Display-type utilities
 */

.u-block {
  display: block !important;
}

.u-hidden {
  display: none !important;
}

/**
 * Completely remove from the flow but leave available to screen readers.
 */

.u-hiddenVisually {
  border: 0 !important;
  clip: rect(1px, 1px, 1px, 1px) !important;
  height: 1px !important;
  overflow: hidden !important;
  padding: 0 !important;
  position: absolute !important;
  width: 1px !important;
}

.u-inline {
  display: inline !important;
}

/**
 * 1. Fix for Firefox bug: an image styled `max-width:100%` within an
 * inline-block will display at its default size, and not limit its width to
 * 100% of an ancestral container.
 */

.u-inlineBlock {
  display: inline-block !important;
  max-width: 100%; /* 1 */
}

.u-table {
  display: table !important;
}

.u-tableCell {
  display: table-cell !important;
}

.u-tableRow {
  display: table-row !important;
}
```