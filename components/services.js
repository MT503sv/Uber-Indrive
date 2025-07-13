class Services extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        
        <section class="">
            <div class="text-white flex items-center justify-center mt-3">
                <button class="bg-black hover:bg-gray-800 text-white font-[18px] font-bold py-2 px-4 rounded-full">Uber app</button>
            </div>
            <div class="flex items-center justify-center mt-3">
                <h1 class="text-[62px] font-bold font-manrope">One app, many services</h1>
            </div>

            <div>
                <div>
                    <img src="" alt="">
                </div>
                <div>
                    <h2>City rides</h2>
                </div>
                <div>
                    <h3>Choose your ride, get a fair deal</h3>
                </div>
                <div>
                    <button>Passangers</button>
                    <button>Drivers</button>
                </div>
            </div>

            <div>
                <div>
                    <img src="" alt="">
                </div>
                <div>
                    <h2>City to City</h2>
                </div>
                <div>
                    <h3>Comfortable rides to other cities: on your schedule and for a fair price</h3>
                </div>
                <div>
                    <button>Passangers</button>
                    <button>Drivers</button>
                </div>
            </div>

            <div>
                <div>
                    <img src="" alt="">
                </div>
                <div>
                    <h2>Courier delivery</h2>
                </div>
                <div>
                    <h3>Express courier delivery for individual and businesses</h3>
                </div>
                <div>
                    <button>Passangers</button>
                    <button>Drivers</button>
                </div>
            </div>

            <div>
                <div>
                    <img src="" alt="">
                </div>
                <div>
                    <h2>Freight delivery</h2>
                </div>
                <div>
                    <h3>Transporting and tracking cargo for people and companies</h3>
                </div>
                <div>
                    <button>Passangers</button>
                    <button>Drivers</button>
                </div>
            </div>
        </section>
        `
    }
}

customElements.define('ser-vices', Services)