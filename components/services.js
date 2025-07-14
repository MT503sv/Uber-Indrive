class Services extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        
        <section>
            <div class="text-white flex items-center justify-center mt-16">
                <button class="bg-black hover:bg-gray-800 text-white font-[18px] font-bold py-2 px-4 rounded-full">Uber app</button>
            </div>
            <div class="flex items-center justify-center mt-3">
                <h1 class="text-[62px] font-bold font-manrope">One app, many services</h1>
            </div>

            <div class="flex flex-wrap justify-center gap-8 mt-10">
                <div class="bg-white shadow-md p-4 rounded-lg w-64 h-[370px] flex flex-col">
                    <div class="w-full flex justify-center">
                        <img class="w-40" src="img/uber.car.png" alt="">
                    </div>
                    <h2 class="font-bold text-[22px] mt-3">City rides</h2>
                    <h3 class="text-[14px] mt-2">Choose your ride, get a fair deal</h3>
                    <div class="mt-auto pt-5 space-x-2">
                        <button class="bg-white border border-black text-[15px] px-3 py-1 rounded-full">Passengers</button>
                        <button class="bg-white border border-black text-[15px] px-3 py-1 rounded-full">Drivers</button>
                    </div>
                </div>

                <div class="bg-white shadow-md p-4 rounded-lg w-64 h-[370px] flex flex-col">
                    <div class="w-full flex justify-center">
                        <img class="w-40" src="img/uber.moto.png" alt="">
                    </div>
                    <h2 class="font-bold text-[22px] mt-3">City to City</h2>
                    <h3 class="text-[14px] mt-2">Comfortable rides to other cities: on your schedule and for a fair price</h3>
                    <div class="mt-auto pt-5 space-x-2">
                        <button class="bg-white border border-black text-[15px] px-3 py-1 rounded-full">Passengers</button>
                        <button class="bg-white border border-black text-[15px] px-3 py-1 rounded-full">Drivers</button>
                    </div>
                </div>

                <div class="bg-white shadow-md p-4 rounded-lg w-64 h-[370px] flex flex-col">
                    <div class="w-full flex justify-center">
                        <img class="w-40" src="img/uber.cartel.png" alt="">
                    </div>
                    <h2 class="font-bold text-[22px] mt-3">Courier delivery</h2>
                    <h3 class="text-[14px] mt-2">Express courier delivery for individuals and businesses</h3>
                    <div class="mt-auto pt-5 space-x-2">
                        <button class="bg-white border border-black text-[15px] px-3 py-1 rounded-full">Clients</button>
                        <button class="bg-white border border-black text-[15px] px-3 py-1 rounded-full">For Business</button>
                    </div>
                </div>

                <div class="bg-white shadow-md p-4 rounded-lg w-64 h-[370px] flex flex-col mb-20">
                    <div class="w-full flex justify-center">
                        <img class="w-40" src="img/uber.cargador.png" alt="">
                    </div>
                    <h2 class="font-bold text-[22px] mt-3">Freight delivery</h2>
                    <h3 class="text-[14px] mt-2">Transporting and tracking cargo for people and companies</h3>
                    <div class="mt-auto pt-5 space-x-2">
                        <button class="bg-white border border-black text-[15px] px-3 py-1 rounded-full">Clients</button>
                        <button class="bg-white border border-black text-[15px] px-3 py-1 rounded-full">For Business</button>
                    </div>
                </div>
            </div>
        </section>


        `
    }
}

customElements.define('ser-vices', Services)