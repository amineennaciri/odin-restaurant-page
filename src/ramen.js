export function ramenLoad(){
    const divContent = document.querySelector('#content')
    if(divContent.firstChild){
            divContent.innerHTML = '';//empty the parent element
        }
    const headOne = document.createElement('h1');
    headOne.innerText = 'Chicken Stir-Fry with Ramen';
    const imgOne = document.createElement('img');
    imgOne.setAttribute('src',"../ramen.jpg");
    imgOne.setAttribute('alt',"image of ramen");
    const pOne = document.createElement('p');
    pOne.innerText = `Stir-fried ramen with chicken or your choice of meat. you can use chopsticks to cook this with. Makes it super easy.`;
    const spanOne = document.createElement('span');
    spanOne.innerText = `Offer running during the holidays!`;
    const ulOne = document.createElement('ul');
    //
    const ilOne = document.createElement('il');
    ulOne.appendChild(ilOne);
    const aOne = document.createElement('a');
    ilOne.appendChild(aOne);
    aOne.setAttribute('href','#');
    aOne.innerText = `1(3 ounce) package ramen noodles with seasoning packet | 2 tablespoons seasame oil, divided
    | 8 ounces skinless, boneless chicken breast, diced | 2 tablespoons oyster sauce | 2 tablespoons soy sauce, divided
    | 1 1/2 cups frozen mixed vegetables | 2 teaspoons freshly grated ginger | 2 teaspoons minced garlic, divided
    | 1/2 teaspoon chili powder`;
    aOne.style.fontWeight= 'bold';
    //
    // appending to div content
    divContent.appendChild(headOne);
    divContent.appendChild(imgOne);
    divContent.appendChild(pOne);
    divContent.appendChild(spanOne);
    divContent.appendChild(ulOne);
}