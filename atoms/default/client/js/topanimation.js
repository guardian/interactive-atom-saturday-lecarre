const imageWrapper = document.querySelector('.right')
const headlineText = document.querySelector('.text-wrapper div')
console.log(headlineText)
// const image = document.querySelector('.image')


const options = {
    rootMargin: "0% 0px -10% 0px",
    threshold: 0.5
}

const firstObserver = new IntersectionObserver(function(entries) {
	if(entries[0].isIntersecting === true) {
        imageWrapper.classList.add("inView")
        console.log('in in view')
    }
    else {
        imageWrapper.classList.remove("inView")
        console.log('in NOT view')
    } 
}, options)

firstObserver.observe(headlineText)