class News extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <section class="bg-[#fdfbea] font-sans relative w-full min-h-screen overflow-hidden">
           
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="Uber Logo" class="absolute top-4 left-12 md:top-8 md:left-16 w-24 md:w-32 z-15 filter contrast-100">

            
            <div class="relative w-full mt-6">
                <div class="flex items-center justify-center">
                    <h2 class="text-5xl md:text-6xl font-extrabold text-center text-black bg-black bg-opacity-50 px-8 py-4 rounded tracking-tight mt-2">
                        Right now at Uber
                    </h2>
                </div>
            </div>

          
            <div class="max-w-7xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
               
                <div class="md:col-span-2 space-y-2">
                    <img src="https://marketing4ecommerce.net/wp-content/uploads/2024/06/imagen-2.jpg" alt="inDrive Banner" class="rounded-lg shadow-md w-full">
                    <div class="flex items-center gap-2 text-sm">
                        <span class="bg-gray-200 text-black px-2 py-0.5 rounded-full">corporate</span>
                        <span>March 2009</span>
                    </div>
                    <p class="text-lg font-semibold max-w-3xl">In 2009, UberCab was founded by Travis Kalanick, with the assistance of co-founder Garret Camp. In its first year, the company focused on providing premium vehicles with a single click in certain metropolitan areas of San Francisco. It was an expensive service compared to the Uber we know today, How Uber was created</p>
                </div>

                
                <div class="space-y-6">
                    <div class="flex gap-3">
                        <img src="https://cdn.goconqr.com/uploads/media/image/27136356/desktop_43ff9de2-c498-47a3-b7cd-a383243bda1e.png" alt="Gitex Africa" class="rounded-md w-32 h-24 object-cover">
                        <div class="w-full max-w-xl">
                            <div class="flex items-center gap-2 text-m">
                                <span class="bg-gray-200 text-black px-2 py-0.5 rounded-full">corporate</span>
                                <span>July 2012</span>
                            </div>
                            <p class="text-base font-medium leading-normal text-justify">In 2012, the company announced Uber X, a low-cost transportation service that allows people to drive under the name of Uber with their own vehicle. The Uber we know! This new offering led to the skyrocketing success of the startup.</p>
                        </div>
                    </div>

                    <div class="flex gap-3">
                        <img src="https://resize.prod.femina.ladmedia.fr/rblr/1200,806/img/var/2022-08/istock-1160878535-1-.jpg" alt="Uber's crisis during the pandemic" class="rounded-md w-32 h-24 object-cover">
                        <div class="w-full max-w-xl">
                            <div class="flex items-center gap-2 text-m">
                                <span class="bg-gray-200 text-black px-2 py-0.5 rounded-full">Impact</span>
                                <span>January to March 2020</span>
                            </div>
                            <p class="text-base font-medium leading-normal text-justify">During the first three months of 2020, Uber lost $2.946 billion. In addition, they had to announce the layoffs of 3,700 employees, about 14% of their workforce.</p>
                        </div>
                    </div>

                    <div class="flex gap-3">
                        <img src="https://elceo.com/wp-content/uploads/2023/02/uber.jpg" alt="Uber becomes a profitable company" class="rounded-md w-32 h-24 object-cover">
                        <div class="w-full max-w-xl">
                            <div class="flex items-center gap-2 text-m">
                                <span class="bg-gray-200 text-black px-3 py-0.5 rounded-full">Impact</span>
                                <span>October to December 2023</span>
                            </div>
                            <p class="text-base font-medium leading-normal text-justify">In 2023, the company achieved consecutive operating profits, which allowed it to definitively surpass the break-even point, earning 37.281 million dollars in total revenue during 2023, a 16.9% increase compared to 2022</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        `;
    }
}

customElements.define('new-s', News);
