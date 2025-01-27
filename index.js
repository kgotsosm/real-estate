import { placeholderPropertyObj } from "./properties/placeholderPropertyObj.js";
import { propertyForSaleArr } from "./properties/propertyForSaleArr.js";

function getPropertyHtml(propertiesArr = [placeholderPropertyObj]) {

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

document.getElementById('container').innerHTML = getPropertyHtml(propertyForSaleArr)
