setTimeout(() => {
  if (window.resize) {  
    const html = document.querySelector('html')
    const body = document.querySelector('body')
  
    html.style.overflow = 'hidden'
    html.style.margin = '0px'
    html.style.padding = '0px'
  
    body.style.overflow = 'hidden'
    body.style.margin = '0px'
    body.style.padding = '0px'
  
  window.resize()
  }
},100)



// // Pull content from sheet
// import xr from 'xr'
// import Mustache from 'mustache'

// var template = '{{#Content}}{{#paragraph}}<div class="content__main-column"><p class="{{dropcap}}">{{ paragraph }}</p>{{/paragraph}}{{#inlineImage}}<div class="inline-image"><img class="{{ imageSize }}" src="{{ inlineImage }}" alt=""></div>{{/inlineImage}}<small> {{ inlineImageCaption }} </small></div>{{#bigImage}}<div class="big-pic"><div class="big-pic__image-wrapper {{bigImagePosition}}"><img class="big-pic__image-wrapper__image" src="{{ bigImage }}"/></div><div class="big-pic__text-wrapper content__main-column"><h2><span><svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41 29"><path d="M40.498.519c-1.062 8.967-2.243 18.052-2.714 27.728H21.737c1.77-9.676 4.837-18.76 10.147-27.728h8.614Zm-21.121 0c-1.18 8.967-2.36 18.052-2.832 27.728H.498C2.15 18.57 5.336 9.487 10.528.519h8.848Z" fill="#FFE500"/></svg>{{ bigQuote }}</span></h2></div><small class="content__main-column">{{bigImageCaption}}</small></div>{{/bigImage}}{{/Content}}'

// xr.get('https://interactive.guim.co.uk/docsdata-test/1v-ZusLVRPHGR9IwEQrF7ETrIQALV-fIUn6pbLps2cAo.json').then((resp) => {
//     var sheets = resp.data.sheets;
//     console.log(sheets);
//     // render just the html for the blocks
//     var html = Mustache.render(template, sheets);

//     // delete excisting content
//     let oldContent = document.querySelector(".rendered-content")
//     console.log(oldContent)
//     oldContent.innerHTML = ""

//     // inject that rendered html into the empty div we declared in main.html
//     document.querySelector(".interactive-blocks").innerHTML = html;
// });


var el = document.createElement('script');
el.src = '<%= atomPath %>/app.js';
document.body.appendChild(el);

var elTwo = document.createElement('script');
elTwo.src = '<%= atomPath %>/topanimation.js';
document.body.appendChild(elTwo);