import { placeholderPropertyObj } from "./properties/placeholderPropertyObj.js";
import { propertyForSaleArr } from "./properties/propertyForSaleArr.js";

function getPropertyHtml(propertiesArr = placeholderPropertyObj) {
  /*
    SUPER CHALLENGE 💪
    
    Render out a card for each of the properties in the propertyForSaleArr array (in the 'properties' folder). Each card should have an image, a property location, a price, a comment and the TOTAL property size in square metres (each object has an array with the size in square metres of the individual rooms).
    
    If no array of properties is passed to getPropertyHtml, the placeholder property stored in placeholderPropertyObj (in the 'properties' folder) should be rendered instead.
    
    This is the JS I want you to use to complete this challenge 👇
    - import/export DONE
    - .map() DONE
    - .join() DONE
    - Object destructuring DONE
    - .reduce() DONE
    - Default parameters DONE
    */

  const propertyCard = propertiesArr.map((property) => {

    const { propertyLocation, priceGBP, roomsM2, comment, image } = property;

    const totalM2 = property.roomsM2.reduce((total, m2) => total + m2, 0)
    
    return `
            <section class="card">
        <img src="/images/${image}" alt="${propertyLocation}">
        <div class="card-right">
            <h2>${propertyLocation}</h2>
            <h3>£${priceGBP}</h3>
            <p>${comment}</p>
            <h3>${totalM2} m&sup2;</h3>
            
        </div>
    </section> `
  })
   return propertyCard.join('');
}

/***** Modify 👇 by adding an argument to the function call ONLY. *****/
document.getElementById('container').innerHTML = getPropertyHtml(propertyForSaleArr)
