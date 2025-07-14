class Information extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        
        <section class="flex items-center justify-center min-h-screen">
            <div class="flex overflow-x-auto space-x-4 scroll-snap-x snap-mandatory px-6 w-full max-w-[calc(100vw-48px)] mx-auto py-12">

                <div class="flex flex-col justify-between items-start snap-center shrink-0 h-[400px] w-[300px]">
                    <img src="img/Uber.webp" alt="Imagen 1" class="w-90 h-[300px] snap-center shrink-0 object-cover rounded-lg">
                    <p class="mt-2 text-[17px] text-black flex-1 font-bold">
                        Uber connects riders and drivers in over 70 countries, helping millions move safely and efficiently every day.
                    </p>
                    <button class="mt-20 bg-black hover:bg-[#0D0D0D] text-white text-[16px] font-semibold py-2 px-4 rounded-xl cursor-pointer">
                        Learn more
                    </button>
                </div>

                <div class="flex flex-col justify-between items-start snap-center shrink-0 h-[400px] w-[300px]">
                    <img src="img/Uber2.webp" alt="Imagen 2" class="snap-center shrink-0 w-90 h-[300px] object-cover rounded-lg">
                    <p class="mt-2 text-[17px] text-black flex-1 font-bold">
                        Get food from your favorite restaurants delivered fast and affordably with Uber Eats—your cravings, just a tap away.
                    </p>
                    <button class="mt-20 bg-black hover:bg-[#0D0D0D] text-white text-[16px] font-semibold py-2 px-4 rounded-xl cursor-pointer">
                        Learn more
                    </button>
                </div>

                <div class="flex flex-col items-start snap-center shrink-0 h-[400px] w-[300px]">
                    <img src="img/Travel more.webp" alt="Imagen 3" class="snap-center shrink-0 w-90 h-[300px] object-cover rounded-lg">
                    <p class="mt-2 text-[17px] text-black flex-1 font-bold">
                        Uber is committed to becoming a zero-emission platform by 2040, offering rides in electric vehicles, on public transit, or with micromobility options.
                    </p>
                    <button class="mt-[55px] bg-black hover:bg-[#0D0D0D] text-white text-[16px] font-semibold py-2 px-4 rounded-xl cursor-pointer">
                        Learn more
                    </button>
                </div>

                <div class="flex flex-col items-start snap-center shrink-0 h-[400px] w-[300px]">
                    <img src="img/Uberimg.avif" alt="" class="snap-center shrink-0 w-90 h-[300px] object-cover rounded-lg">
                    <p class="mt-2 text-[17px] text-black flex-1 font-bold">
                        Safety is at the heart of Uber's platform. From in-app features to partnerships with safety advocates, we're committed to protecting riders and drivers.
                    </p>
                    <button class="mt-[55px] bg-black hover:bg-[#0D0D0D] text-white text-[16px] font-semibold py-2 px-4 rounded-xl cursor-pointer">
                        Learn more
                    </button>
                </div>

                <div class="flex flex-col items-start snap-center shrink-0 h-[400px] w-[300px]">
                    <img src="img/projectDrive.webp" alt="" class="snap-center shrink-0 w-90 h-[300px] object-cover rounded-lg">
                    <p class="mt-2 text-[17px] text-black flex-1 font-bold">
                        An international project consisting of film awards and training workshops aimed at supporting filmmakers in the film industries of developing countries.
                    </p>
                    <button class="mt-[55px] bg-black hover:bg-[#0D0D0D] text-white text-[16px] font-semibold py-2 px-4 rounded-xl cursor-pointer">
                        Learn more
                    </button>
                </div>

                <div class="flex flex-col items-start snap-center shrink-0 h-[400px] w-[300px]">
                    <img src="img/Uberchicago.webp" alt="" class="snap-center shrink-0 w-90 h-[300px] object-cover rounded-lg">
                    <p class="mt-2 text-[17px] text-black font-bold">
                        Uber Freight connects shippers with carriers through a powerful logistics platform, making freight booking faster and more transparent.
                    </p>
                    <button class="mt-20 bg-black hover:bg-[#0D0D0D] text-white text-[16px] font-semibold py-2 px-4 rounded-xl cursor-pointer">
                        Learn more
                    </button>
                </div>

                <div class="flex flex-col items-start snap-center shrink-0 h-[400px] w-[300px]">
                    <img src="img/Uber1.webp" alt="" class="snap-center shrink-0 w-90 h-[300px] object-cover rounded-lg">
                    <p class="mt-2 text-[17px] text-black font-bold">
                        Earn on your schedule. Drive with Uber and access flexible income opportunities in thousands of cities worldwide.
                    </p>
                    <button class="mt-20 bg-black hover:bg-[#0D0D0D] text-white text-[16px] font-semibold py-2 px-4 rounded-xl cursor-pointer">
                        Learn more
                    </button>
                </div>
                
            </div>
        </section>

        `
    }
}  

customElements.define('in-formation', Information);