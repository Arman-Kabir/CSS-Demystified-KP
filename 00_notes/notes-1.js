/**#8 Relationships
 * **The relationships between:
 * An element and the viewport
 * An element and it's parent
 * Sibling elements
 * 
 * **If the parent has a width and we declare a width to the child, it might overflow out the side or it might be a percentage of the parent's width.
 * 
 * *These relationships are controlled by a given elements formatting context.
 * 
 * **Layouts are all about Relationships between elements.
 */


/**#9
 * The global scope of css is not a bug , it's a feature.
 * 
 */


/**#11
 * ** When we declare a width to an element,  that width is setting the width of the content. 
 *  * Margin is spacing between elements
 */

/**#12
 *Block level elements have a width 100% by default..

 when we set width to % -- it't up the parent
 */

 /**13
  * as long as u don't have margin in border-box, u won't get overflow.
  */
 
 /**15
  * every element has intrinsic height by default.
  * Means height is determined by content that is inside of it.
  */

 /**16 Inheritance
  *  Inheritance is when we declare something on an element, and it also applies that element's descendants.
  * 
  * With CSS, there is only one parent
  * 
  * ** ANything related to Typography is inherited.Such as - font-size,font-family,font-weight, line-height text-decoration,color,text-transform etc. That's why it's common to place a lot of typohraphic rules on the <html> or <body>
  * 
  * **If there is a browser default- that on certain property - that won't be inherited
  * 
  * ** Nothing related to Layout is inherited. Such as - margin,padding,height,width,position etc.
  * 
  * **Everything we see on the page is a child of the html element,so they inherit those properties.
  */

 /**22 -  cascade
  *  1. Origin and Importance
  *  2. Specificity
  *  3. Order of Appearance
  * 
  */

 /**23 - importance and origin
  *  !important
  */

 /**24 - origin-and-font-size-implications
  *  One of the reasons we don't use px for font-sizes - these are absolute numbers that potentially could cause some problems.
  *  
  *  **** some people do- set it 62.5% to make life easier to calculate the font-size they want--->
  * 
  *   html{
  *     font-size: 62.5%;
  * }
  * 
  */

 /**25 - when animations-and-transitions get involved
  *     
  */