```css
/** @define utilities */

/* Applies to flex container
   ========================================================================== */

/**
 * Container
 */

.u-flex {
  display: flex !important;
}

.u-flexInline {
  display: inline-flex !important;
}

/**
 * Direction: row
 */

.u-flexRow {
  flex-direction: row !important;
}

.u-flexRowReverse {
  flex-direction: row-reverse !important;
}

/**
 * Direction: column
 */

.u-flexCol {
  flex-direction: column !important;
}

.u-flexColReverse {
  flex-direction: column-reverse !important;
}

/**
 * Wrap
 */

.u-flexWrap {
  flex-wrap: wrap !important;
}

.u-flexNoWrap {
  flex-wrap: nowrap !important;
}

.u-flexWrapReverse {
  flex-wrap: wrap-reverse !important;
}

/**
 * Align items along the main axis of the current line of the flex container
 */

.u-flexJustifyStart {
  justify-content: flex-start !important;
}

.u-flexJustifyEnd {
  justify-content: flex-end !important;
}

.u-flexJustifyCenter {
  justify-content: center !important;
}

.u-flexJustifyBetween {
  justify-content: space-between !important;
}

.u-flexJustifyAround {
  justify-content: space-around !important;
}

/**
 * Align items in the cross axis of the current line of the flex container
 * Similar to `justify-content` but in the perpendicular direction
 */

.u-flexAlignItemsStart {
  align-items: flex-start !important;
}

.u-flexAlignItemsEnd {
  align-items: flex-end !important;
}

.u-flexAlignItemsCenter {
  align-items: center !important;
}

.u-flexAlignItemsStretch {
  align-items: stretch !important;
}

.u-flexAlignItemsBaseline {
  align-items: baseline !important;
}

/**
 * Aligns items within the flex container when there is extra
 * space in the cross-axis
 *
 * Has no effect when there is only one line of flex items.
 */

.u-flexAlignContentStart {
  align-content: flex-start !important;
}

.u-flexAlignContentEnd {
  align-content: flex-end !important;
}

.u-flexAlignContentCenter {
  align-content: center !important;
}

.u-flexAlignContentStretch {
  align-content: stretch !important;
}

.u-flexAlignContentBetween {
  align-content: space-between !important;
}

.u-flexAlignContentAround {
  align-content: space-around !important;
}

/* Applies to flex items
   ========================================================================== */

/**
 * Override default alignment of single item when specified by `align-items`
 */

.u-flexAlignSelfStart {
  align-self: flex-start !important;
}

.u-flexAlignSelfEnd {
  align-self: flex-end !important;
}

.u-flexAlignSelfCenter {
  align-self: center !important;
}

.u-flexAlignSelfStretch {
  align-self: stretch !important;
}

.u-flexAlignSelfBaseline {
  align-self: baseline !important;
}

.u-flexAlignSelfAuto {
  align-self: auto !important;
}

/**
 * Change order without editing underlying HTML
 */

.u-flexOrderFirst {
  order: -1 !important;
}

.u-flexOrderLast {
  order: 1 !important;
}

.u-flexOrderNone {
  order: 0 !important;
}

/**
 * Specify the flex grow factor, which determines how much the flex item will
 * grow relative to the rest of the flex items in the flex container.
 *
 * Supports 1-5 proportions
 *
 * 1. Provide all values to avoid IE10 bug with shorthand flex
 *    https://github.com/philipwalton/flexbugs#6-the-default-flex-value-has-changed
 *
 *    Use `0%` to avoid bug in IE10/11 with unitless flex basis
 *    https://github.com/philipwalton/flexbugs#4-flex-shorthand-declarations-with-unitless-flex-basis-values-are-ignored
 */

.u-flexGrow1 {
  flex: 1 1 0% !important; /* 1 */
}

.u-flexGrow2 {
  flex: 2 1 0% !important;
}

.u-flexGrow3 {
  flex: 3 1 0% !important;
}

.u-flexGrow4 {
  flex: 4 1 0% !important;
}

.u-flexGrow5 {
  flex: 5 1 0% !important;
}

/**
 * Specify the flex shrink factor, which determines how much the flex item will
 * shrink relative to the rest of the flex items in the flex container.
 */

.u-flexShrink0 {
  flex-shrink: 0 !important;
}

.u-flexShrink1 {
  flex-shrink: 1 !important;
}

.u-flexShrink2 {
  flex-shrink: 2 !important;
}

.u-flexShrink3 {
  flex-shrink: 3 !important;
}

.u-flexShrink4 {
  flex-shrink: 4 !important;
}

.u-flexShrink5 {
  flex-shrink: 5 !important;
}

/**
 * Aligning with `auto` margins
 * http://www.w3.org/TR/css-flexbox-1/#auto-margins
 */

.u-flexExpand {
  margin: auto !important;
}

.u-flexExpandLeft {
  margin-left: auto !important;
}

.u-flexExpandRight {
  margin-right: auto !important;
}

.u-flexExpandTop {
  margin-top: auto !important;
}

.u-flexExpandBottom {
  margin-bottom: auto !important;
}

/**
 * Basis
 */

.u-flexBasisAuto {
  flex-basis: auto !important;
}

.u-flexBasis0 {
  flex-basis: 0 !important;
}

/*
 * Shorthand
 *
 * Declares all values instead of keywords like 'initial' to work around IE10
 * https://www.w3.org/TR/css-flexbox-1/#flex-common
 *
 * 1. Fixes issue in IE 10 where flex-basis is ignored
 *    https://github.com/philipwalton/flexbugs#13-importance-is-ignored-on-flex-basis-when-using-flex-shorthand
 *    This ensures it overrides flex-basis set in other utilities.
 */

/*
 * Sizes the item based on the width/height properties
 */

.u-flexInitial {
  flex: 0 1 auto !important;
  flex-basis: auto !important; /* 1 */
}

/*
 * Sizes the item based on the width/height properties, but makes them fully
 * flexible, so that they absorb any free space along the main axis.
 */

.u-flexAuto {
  flex: 1 1 auto !important;
  flex-basis: auto !important; /* 1 */
}

/*
 * Sizes the item according to the width/height properties, but makes the flex
 * item fully inflexible. Similar to initial, except that flex items are
 * not allowed to shrink, even in overflow situations.
 */

.u-flexNone {
  flex: 0 0 auto !important;
  flex-basis: auto !important; /* 1 */
}
```