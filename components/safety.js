class Safety extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="min-h-screen bg-gray-100 flex flex-col items-center p-6">

            <div class="text-center mb-10">
                <div class="text-white flex items-center justify-center mt-40">
                    <button class="bg-black hover:bg-gray-800 text-white font-[18px] font-bold py-2 px-4 rounded-full">Safety</button>
                </div>
                <div class="flex items-center justify-center mt-3">
                <h1 class="text-[62px] font-bold font-manrope">
                    Your safety is our priority
                </h1>
                </div>
                <p class="text-black font-inter mt-2">Stay on the safe side with Uber</p>
            </div>

            <div class="bg-white rounded-lg w-full max-w-5xl px-10 pt-10 pb-0 flex md:flex-row items-end">

                <div class="w-full md:w-1/2 flex justify-center">
                    <img 
                        src="img/img.jpg"
                        alt="Imagen de hombre"
                        class="w-70 h-auto rounded-t-lg object-contain"
                    >
                </div>

                <div class="w-full md:w-1/2 p-6 space-y-4 text-center md:text-left">
                    <h2 class="text-3xl font-bold font-inter">
                        We want all of us to be on the same page about safety
                    </h2>
                    <p class="text-gray-700 font-inter">
                        And so, we're calling this page our <strong>safety pact</strong> —
                        a 3-sided alliance between passengers, drivers and Uber,
                        with mutual responsibilities for every single ride.
                    </p>
                    <button class="bg-black text-white font-inter font-bold px-5 py-2 rounded hover:bg-gray-800 transition">
                        Learn more
                    </button>
                </div>
                
            </div>

        </div>

        `
    }
}

customElements.define('sa-fety', Safety);