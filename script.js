'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const search  = document.querySelector('#search') ; 
const searchbtn = document.querySelector('#search-btn') ;
///////////////////////////////////////
const getCountryData = function (country){ 
    const request = new XMLHttpRequest() ; 
request.open('GET' , `https://restcountries.com/v2/name/${country}`) ; 
 request.send( ) ; 
request.addEventListener('load' , function ( ){ 
    let html = ''; 
     const data = JSON.parse(this.responseText)[0] ; 
      
      
      html  = ` <article class="country">
     <img class="country__img" src="${data.flag}" />
     <div class="country__data">
       <h3 class="country__name">${data.name}</h3>
       <h4 class="country__region">${data.region}</h4>
       <p class="country__row"><span>👫</span>${data.population} </p>
       <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
       <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
     </div>
   </article>`
   countriesContainer.innerHTML= html ; 
   
})
}


    
    
    
    searchbtn.addEventListener('click' , function ( e ){ 
       
        e.preventDefault( ); 
        let search_value = search.value.toLowerCase() ;
        if ( search_value === 'india'){ 
            search_value = 'bharat';
        }
        getCountryData(search_value); 
       
        
        
   })
 
 
   
   





 