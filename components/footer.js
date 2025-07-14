class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer class="bg-black text-white px-20 py-20 text-sm mt-16">
          <div class="grid grid-cols-2 md:grid-cols-5 gap-8 mb-10">
            <div class="space-y-10 flex flex-col">
              <img src="img/Uber-White-Logo.wine.svg" alt="" class="w-20 h-10">
              <p class="text-white text-base mt-2">Visit Help Center</p>
            </div>
          </div>

          <div class="grid grid-cols-4 gap-8 mb-8 justify-center">
            <div>
              <h4 class="font-semibold text-lg mb-3">Company</h4>
              <ul class="space-y-4">
                <li><a href="#" class="hover:underline">About Us</a></li>
                <li><a href="#" class="hover:underline">Our offering</a></li>
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

          <div class="flex justify-between items-start flex-wrap gap-6 mb-8">
            <div class="flex items-start">
              <button class="py-3 bg-black text-white rounded-full self-start">English</button>
            </div>

            <div class="flex flex-col items-end">
              <div class="flex space-x-6 items-center mb-6">
                <a href="#" aria-label="Facebook" class="hover:opacity-75 transition">
                  <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg" class="h-6 invert" alt="Facebook">
                </a>
                <a href="#" aria-label="X (Twitter)" class="hover:opacity-75 transition">
                  <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/x.svg" class="h-6 invert" alt="Twitter">
                </a>
                <a href="#" aria-label="LinkedIn" class="hover:opacity-75 transition">
                  <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg" class="h-6 invert" alt="LinkedIn">
                </a>
                <a href="#" aria-label="Instagram" class="hover:opacity-75 transition">
                  <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg" class="h-6 invert" alt="Instagram">
                </a>
              </div>

              <div class="flex space-x-3">
                <a href="#">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" class="h-10">
                </a>
                <a href="#">
                  <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" class="h-10">
                </a>
              </div>
            </div>
          </div>


          <div class="text-sm text-gray-400">
            <p class="mb-4">
              Go anywhere with Uber <br>
              We reimagine the way the world moves for the better
            </p>
          </div>

          <div class="flex space-x-4 justify-between flex-wrap gap-4">
            <div class="self-start">
              <p class="mt-4">© 2025 Uber Technologies Inc.</p>
            </div>
            <div class="self-end ml-4 flex gap-4">
              <p>Privacy</p>
              <p>Accessibility</p>
              <p>Terms</p>
            </div>
          </div>
        </footer>

    `;
  }
}

customElements.define('foo-ter', Footer);