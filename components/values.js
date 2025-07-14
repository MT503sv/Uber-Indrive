class valores extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="mt-15">
            <div class="flex items-center justify-center mt-4">
                <button class="bg-black hover:bg-gray-800 text-white font-[18px] font-bold py-2 px-4 rounded-full">
                Our values
                </button>
            </div>

            <div class="flex items-center justify-center mt-3">
                <h1 class="text-[62px] font-bold font-manrope">
                The values that light our path
                </h1>
            </div>

            <div class="flex justify-center flex-wrap mt-15 gap-6">
                <div class="relative w-80 h-[28rem] rounded-lg overflow-hidden shadow-lg">
                <img src="img/1.jpeg" alt="people" class="w-full h-full object-cover" />
                <div class="absolute top-4 left-4 text-white text-4xl font-bold">People</div>
                <button class="absolute bottom-4 left-4 bg-black text-white font-semibold py-1 px-3 rounded-full">
                    Learn more
                </button>
                </div>

                <div class="relative w-80 h-[28rem] rounded-lg overflow-hidden shadow-lg">
                <img src="img/2.png" alt="purpose" class="w-full h-[450px] object-cover" />
                <div class="absolute top-4 left-4 text-white text-4xl font-bold">Purpose</div>
                <button class="absolute bottom-4 left-4 bg-black text-white font-semibold py-1 px-3 rounded-full">
                    Learn more
                </button>
                </div>

                <div class="relative w-80 h-[28rem] rounded-lg overflow-hidden shadow-lg">
                <img src="img/3.jpg" alt="Perfomance" class="w-full h-[450px] object-cover" />
                <div class="absolute top-4 left-4 text-white text-4xl font-bold">Perfomance</div>
                <button class="absolute bottom-4 left-4 bg-black text-white font-semibold py-1 px-3 rounded-full">
                    Learn more
                </button>
                </div>
            </div>
        </div>
        `
    }
}
customElements.define('va-lues', valores);