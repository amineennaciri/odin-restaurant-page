export function homepageLoad(){
    const divContent = document.querySelector('#content')
    if(divContent.firstChild){
        divContent.innerHTML = '';//empty the parent element
    }
    const headOne = document.createElement('h1');
    headOne.innerText = 'Amazing Restaurant';
    const imgOne = document.createElement('img');
    imgOne.setAttribute('src',"../homepage.jpg");
    imgOne.setAttribute('alt',"welcome");
    imgOne.style.height = '500px';
    const pOne = document.createElement('p');
    pOne.innerText = `Come try our new challenge, if you finish our premium colossal titan lasagna the bill is on us!
    We dare you to pick up the challenge!`;
    const spanOne = document.createElement('span');
    spanOne.innerText = `Offer running during the holidays!`;
    // appending to div content
    divContent.appendChild(headOne);
    divContent.appendChild(imgOne);
    divContent.appendChild(pOne);
    divContent.appendChild(spanOne);
}
