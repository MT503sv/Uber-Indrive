class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
      <footer class="bg-black text-white px-20 py-20 text-sm">
        <div class="grid grid-cols-2 md:grid-cols-5 gap-8 mb-10">
                <div class="space-y-10 flex flex-col">
                  <img src="components/Uber-White-Logo.wine.svg" alt="" class="w-20 h-10 ">
                    <p class="text-white text-base mt-2">Visit Help Center</p>
                </div>
        </div>
        <div class="grid grid-cols-4 gap-8 mb-8 justify-center">
                    <div>
                        <h4 class="font-semibold text-lg mb-3">Company</h4>
                        <ul class="space-y-4">
                            <li><a href="#" class="hover:underline">About Us</a></li>
                            <li><a href="#" class="hover:underline"></a>Our offering</li>
                            <li><a href="#" class="hover:underline">Newsroom</a></li>
                            <li><a href="#" class="hover:underline">Investors</a></li>
                            <li><a href="#" class="hover:underline">Blog</a></li>
                            <li><a href="#" class="hover:underline">Careers</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 class="font-semibold text-lg mb-3">Products</h4>
                        <ul class="space-y-4">
                            <li><a href="#" class="hover:underline">Ride</a></li>
                            <li><a href="#" class="hover:underline">Drive</a></li>
                            <li><a href="#" class="hover:underline">Deliver</a></li>
                            <li><a href="#" class="hover:underline">Eat</a></li>
                            <li><a href="#" class="hover:underline">Uber for Business</a></li>
                            <li><a href="#" class="hover:underline">Uber Freight</a></li>
                            <li><a href="#" class="hover:underline">Gift cards</a></li>
                            <li><a href="#" class="hover:underline">Uber Health</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 class="font-semibold text-lg mb-3">Global citizenship</h4>
                        <ul class="space-y-4">
                            <li><a href="#" class="hover:underline">Safety</a></li>
                            <li><a href="#" class="hover:underline">Sustainability</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 class="font-semibold text-lg mb-3">Travel</h4>
                        <ul class="space-y-4">
                            <li><a href="#" class="hover:underline">Reserve</a></li>
                            <li><a href="#" class="hover:underline">Airports</a></li>
                            <li><a href="#" class="hover:underline">Cities</a></li>
                        </ul>
                    </div>
         </div>
      </footer>
    `;
  }
}

customElements.define('foo-ter', Footer);