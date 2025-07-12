class valores extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        
        <div class="flex items-center justify-center ">
       <button class="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-full">Our values</button>
        </div>

        <div class="flex items-center justify-center mt-3">
        <h1 class="text-7xl font-bold font-manrope">The values that light our path</h1>
        </div>
        `
    }
}
customElements.define('pa-ge', valores);