class News extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <section class="font-sans relative w-full min-h-screen overflow-hidden mt-16">

            <div class="flex justify-center mt-4 mb-2">
                <button class="bg-black hover:bg-gray-800 text-white font-[18px] font-bold py-2 px-4 rounded-full">News</button>
            </div>

            <div>
                <div class="text-black flex items-center justify-center">
                    <h2 class="text-[62px] font-bold font-manrope">
                        Right now at Uber
                    </h2>
                </div>
            </div>

            <div class="max-w-7xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
               
                <div class="md:col-span-2 space-y-2">
                    <img src="https://marketing4ecommerce.net/wp-content/uploads/2024/06/imagen-2.jpg" alt=".." class="rounded-lg shadow-md w-full">
                    <div class="flex items-center gap-2 text-sm">  
                    <span class="bg-white text-black border border-black font-[18px] font-bold py-1 px-4 rounded-full">corporate</span>
                        <span>March 2009</span>
                    </div>
                    <p class="text-lg max-w-3xl">In 2009, UberCab was launched by Travis Kalanick with the help of co-founder Garret Camp. In its first year, the company focused on providing premium vehicles with a single click in certain metropolitan areas of San Francisco.</p>
                </div>

                <div class="space-y-6">
                    <div class="flex gap-3">
                        <img src="https://cdn.goconqr.com/uploads/media/image/27136356/desktop_43ff9de2-c498-47a3-b7cd-a383243bda1e.png" alt="Gitex Africa" class="rounded-md w-32 h-24 object-cover">
                        <div class="w-full max-w-xl">
                            <div class="flex items-center gap-2 text-m">
                                <span class="bg-white text-black border border-black font-[18px] font-bold py-1 px-4 rounded-full">corporate</span>
                                <span>July 2012</span>
                            </div>
                            <p class="text-base leading-normal text-justify">In 2012, the company announced Uber X, a low-cost transportation service that allows people to drive under the name of Uber with their own vehicle.</p>
                        </div>
                    </div>

                    <div class="flex gap-3">
                        <img src="https://resize.prod.femina.ladmedia.fr/rblr/1200,806/img/var/2022-08/istock-1160878535-1-.jpg" alt="Uber's crisis during the pandemic" class="rounded-md w-32 h-24 object-cover">
                        <div class="w-full max-w-xl">
                            <div class="flex items-center gap-2 text-m">
                                <span class="bg-white text-black border border-black font-[18px] font-bold py-1 px-4 rounded-full">Impact</span>
                                <span>January to March 2020</span>
                            </div>
                            <p class="text-base leading-normal text-justify">During the first three months of 2020, Uber had a major challenge with the arrival of the pandemic.</p>
                        </div>
                    </div>

                    <div class="flex gap-3">
                        <img src="https://elceo.com/wp-content/uploads/2023/02/uber.jpg" alt="Uber becomes a profitable company" class="rounded-md w-32 h-24 object-cover">
                        <div class="w-full max-w-xl">
                            <div class="flex items-center gap-2 text-m">
                                <span class="bg-white text-black border border-black font-[18px] font-bold py-1 px-4 rounded-full">Impact</span>
                                <span>October to December 2023</span>
                            </div>
                            <p class="text-base leading-normal text-justify">In 2023, the company Uber achieved consecutive operating profits, enabling it to definitively surpass the break-even point and thus recover the lost revenue from the year 2020.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        `;
    }
}

customElements.define('new-s', News);
