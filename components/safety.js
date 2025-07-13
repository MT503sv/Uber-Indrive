
class Safety extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        

 <div class="bg-white p-8 rounded-lg w-full max-w-4xl">

 
<div class="text-center mb-6">
 <span class="bg-black text-white px-3 py-1 rounded-full text-sm font-inter font-bold">Safety</span>
 <h1 class="text-3xl mt-4 font-manrope font-bold">
 Your safety <span class="text-black">is our priority</span>
 </h1>
 <p class="text-gray-600 mt-2 font-inter">Stay on the safe side with Uber</p>
 </div>

 <div class="flex flex-col md:flex-row items-center gap-8">


<div class="w-full md:w-1/2 flex justify-center">
Imagen de muchacho
 </div>
 
<div class="w-full md:w-1/2 space-y-4 text-center md:text-left">
 <h2 class="text-xl font-bold font-inter">We want all of us to be on the same page about safety</h2>


        
        `
    }
}
customElements.define('sa-fety', Safety);