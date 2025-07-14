class FraseCEO extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="relative bg-black text-white h-screen flex items-center justify-between px-8 py-8 overflow-hidden font-sans">
        <div id="text" class="max-w-md">
          <h1 class="text-4xl font-bold leading-tight">
            Leading Uber into<br>
            <span class="bg-white text-black px-2 py-0.5 inline-block rounded-sm">the future</span>
          </h1>
          <p class="mt-5 text-gray-300">
            Dara Khosrowshahi is transforming Uber into a platform for all kinds of movement.
          </p>
          <button class="mt-5 px-6 py-2 bg-white text-black rounded-full cursor-pointer hover:bg-gray-200 transition">
            Meet the CEO
          </button>
        </div>

        <div>
          <img id="image" src="img/Frase3.jpg" alt="Uber CEO" class="w-[500px] h-[500px] rounded-xl object-contain" />
        </div>

        <div id="bar" class="absolute bottom-0 left-0 h-1 bg-white w-0 transition-all"></div>
      </section>
    `;

    const slides = [
      {
        title: "Leading Uber into",
        highlight: "the future",
        desc: "Dara Khosrowshahi is transforming Uber into a platform for all kinds of movement.",
        button: "Meet the CEO",
        img: "img/Frase3.jpg",
      },
      {
        title: "Redefining",
        highlight: "urban mobility",
        desc: "Uber’s technology helps cities reduce traffic and emissions.",
        button: "Explore",
        img: "img/Frase1.jpeg",
      },
      {
        title: "More than rides:",
        highlight: "Uber’s services",
        desc: "Food, freight, and more — Uber is shaping the future of delivery.",
        button: "See more",
        img: "img/Frase2.jpg",
      },
    ];

    let current = 0;
    const text = this.querySelector("#text");
    const img = this.querySelector("#image");
    const bar = this.querySelector("#bar");

    const updateSlide = () => {
      const slide = slides[current];

      text.innerHTML = `
        <h1 class="text-4xl font-bold leading-tight">
          ${slide.title}<br>
          <span class="bg-white text-black px-2 py-0.5 inline-block rounded-sm">${slide.highlight}</span>
        </h1>
        <p class="mt-5 text-gray-300">${slide.desc}</p>
        <button class="mt-5 px-6 py-2 bg-white text-black rounded-full cursor-pointer hover:bg-gray-200 transition">
          ${slide.button}
        </button>
      `;

      img.src = slide.img;

      bar.style.transition = "none";
      bar.style.width = "0%";
      void bar.offsetWidth; 
      bar.style.transition = "width 5s linear";
      bar.style.width = "100%";
    };

    updateSlide();

    setInterval(() => {
      current = (current + 1) % slides.length;
      updateSlide();
    }, 5000);
  }
}

customElements.define("fra-seceo", FraseCEO);
