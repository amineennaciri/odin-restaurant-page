/* alert('hello world') */
import {homepageLoad} from './homepage';
import {lasagnaLoad} from './lasagna';
import {ramenLoad} from './ramen';
/* pageLoad(); */
const divContent = document.querySelector('#content');
const divHeader = document.createElement('div');
divHeader.setAttribute('class','header');
document.body.insertBefore(divHeader,divContent);
//appending buttons to divHeader
const btnOne = document.createElement('button');
btnOne.innerText = 'Homepage';
divHeader.appendChild(btnOne);
const btnTwo = document.createElement('button');
btnTwo.innerText = 'Lasagna';
divHeader.appendChild(btnTwo);
const btnThree = document.createElement('button');
btnThree.innerText = 'Chicken Stir-Fry with Ramen';
divHeader.appendChild(btnThree);
// some css style
divHeader.style.display = 'flex'
divHeader.style.gap = '15px';


// event listeners

btnOne.addEventListener('click',homepageLoad);
btnTwo.addEventListener('click',lasagnaLoad);
btnThree.addEventListener('click',ramenLoad);

