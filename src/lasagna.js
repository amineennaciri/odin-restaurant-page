export function lasagnaLoad(){
    const divContent = document.querySelector('#content')
    if(divContent.firstChild){
            divContent.innerHTML = '';//empty the parent element
        }
    const headOne = document.createElement('h1');
    headOne.innerText = 'Lasagna';
    const imgOne = document.createElement('img');
    imgOne.setAttribute('src',"../lasagna.jpg");
    imgOne.setAttribute('alt',"image of lasagna");
    const pOne = document.createElement('p');
    pOne.innerText = `This lasagna recipe takes a little work, but it is so satisfying and filling that it's worth it!
    Making lasagna can be time-consuming, but the results are well worth the wait. You'll find a detailed ingredient list and step-by-step instructions in the recipe below.`;
    const spanOne = document.createElement('span');
    spanOne.innerText = `Offer running during the holidays!`;
    const ulOne = document.createElement('ul');
    //
    const ilOne = document.createElement('il');
    ulOne.appendChild(ilOne);
    const aOne = document.createElement('a');
    ilOne.appendChild(aOne);
    aOne.setAttribute('href','#');
    aOne.innerText = 'Meat | Onion and garlic | Tomato products | Sugar | Spices and seasonings | Lasagna noodles | Cheeses | Egg';
    aOne.style.fontWeight= 'bold';
    //
    // appending to div content
    divContent.appendChild(headOne);
    divContent.appendChild(imgOne);
    divContent.appendChild(pOne);
    divContent.appendChild(spanOne);
    divContent.appendChild(ulOne);
}   