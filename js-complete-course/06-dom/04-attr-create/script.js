/* becode/javascript
 *
 * /06-dom/04-attr-create/script.js - 6.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // Get the value of the "data-image" attribute from the element with id "source".
    let valueSource = document.getElementById("source").getAttribute("data-image");
    //console.log(valueSource);

    // Create a new image element inside the target element
    // that displays the image referred to by the attribute value.
    let image = document.createElement("img");
    image.setAttribute("src",valueSource);
    //console.log(image);
    document.getElementById("target").appendChild(image);
    //console.log(document.getElementById("target"))

    // Then remove the original element.
    document.getElementById("source").remove();
    /*
    old way
    let byeBye = document.getElementById("source");
    byeBye.parentNode.removeChild(byeBye);
    */






})();
