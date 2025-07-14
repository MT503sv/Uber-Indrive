class Navbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section
        class="relative text-white w-full h-screen overflow-hidden font-sans px-6 flex flex-col justify-between bg-cover bg-center transition-[background-image] duration-1000 ease-in-out"
      >
       <header class="fixed top-0 left-0 w-full flex items-center justify-between py-4 z-50 bg-black bg-opacity-80 px-6">
  <div class="flex items-center">
    <img src="img/Uber-White-Logo.wine.svg" class="h-10" />
  </div>
  <div class="flex items-center gap-4">
    <button class="text-sm border border-white px-3 py-1 rounded-full hover:bg-white hover:text-black transition">
      ES
    </button>
    <button class="text-sm border border-white px-3 py-1 rounded-full hover:bg-white hover:text-black transition">
      Menu
    </button>
  </div>
</header>



        <div class="relative z-10 mt-20 max-w-3xl mx-auto text-flex">
          <h1 class="text-4xl md:text-6xl font-bold leading-tight mb-6 bg-white text-black px-2" ">
            Changing how the world moves<br/>
          </h1>
        </div>

        <div class="relative z-10 px-6 mb-10">
          <button
            class="bg-white text-black font-semibold py-3 px-6 rounded-full text-lg hover:bg-gray-200 transition"
          >
            Download the app
          </button>
        </div>

        <div
          class="absolute bottom-0 left-0 h-1 bg-white z-20"
          style="animation: progressAnim 5s linear infinite;"
        ></div>

        <style>
          @keyframes progressAnim {
            from { width: 0%; }
            to { width: 100%; }
          }
        </style>
      </section>
    `;

    const images = [
      'img/ubercarucel.jpg',
      'img/ubercarucel2.jpg',
      'img/ubercarucel3.jpg',
    ];

    let current = 0;
    const section = this.querySelector('section');

    const updateBackground = () => {
      section.style.backgroundImage = `url('${images[current]}')`;
      current = (current + 1) % images.length;
    };

    updateBackground();
    setInterval(updateBackground, 5000);
  }
}

customElements.define('nav-bar', Navbar);