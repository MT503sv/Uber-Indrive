class valores extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        
        <div class="flex items-center justify-center mt-3">
       <button class="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-full">Our values</button>
        </div>

        <div class="flex items-center justify-center mt-3">
        <h1 class="text-7xl font-bold font-manrope">The values that light our path</h1>
        </div>
        
        <div class="flex justify-center flex-wrap mt-15 gap-6 ">

        <div class="relative w-80 h-[28rem] rounded-lg overflow-hidden shadow-lg">
       <img src="img/1.jpeg" alt="people" class="w-full h-full object-cover" />
       <div class="absolute top-4 left-4 text-white text-2xl font-bold">People</div>
       <botton class="absolute bottom-4 left-4 bg-black text-white font-semibold py-1 px-3 rounded-full">Learn more</botton>
        </div>
        <div class="relative w-80 h-[28rem] rounded-lg overflow-hidden shadow-lg">
       <img src="img/2.png" alt="purpose" class="w-100 h-100 object-cover" />
       <div class="absolute top-4 left-4 text-white text-2xl font-bold">Purpose</div>
       <botton class="absolute bottom-4 left-4 bg-black text-white font-semibold py-1 px-3 rounded-full">Learn more</botton>
        </div>
       
        <div class="relative w-80 h-[28rem] rounded-lg overflow-hidden shadow-lg">
       <img src="img/3.jpeg" alt="Perfomance" class="w-100 h-100 object-cover" />
        <div class="absolute top-4 left-4 text-white text-2xl font-bold">Perfomance</div>
        <button class="absolute bottom-4 left-4 bg-black text-white font-semibold py-1 px-3 rounded-full">Learn more</button>
        </div>


       </div>
        `
    }
}
customElements.define('va-lues', valores);