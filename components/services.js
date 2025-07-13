class Services extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        
        <section>
            <div>
                <button>Uber app</button>
            </div>
            <div>
                <h1>One app, many services</h1>
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