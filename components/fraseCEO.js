class FraseCEO extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <style>
        .progress-bar {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 4px;
          background: white;
          width: 0%;
          transition: width 5s linear;
        }
      </style>

      <section style="background-color: black; color: white; height: 100vh; display: flex; align-items: center; justify-content: space-between; padding: 30px; font-family: sans-serif; position: relative; overflow: hidden;">
        
        <div id="text" style="max-width: 500px;">
          <h1 style="font-size: 40px; font-weight: bold; line-height: 1.2;">
            Leading Uber into<br>
            <span style="background: white; color: black; padding: 2px 6px;">the future</span>
          </h1>
          <p style="margin-top: 20px; color: #ccc;">
            Dara Khosrowshahi is transforming Uber into a platform for all kinds of movement.
          </p>
          <button style="margin-top: 20px; padding: 10px 20px; background: white; color: black; border: none; border-radius: 20px; cursor: pointer;">
            Meet the CEO
          </button>
        </div>

        <div>
          <img id="image" src="img/Frase3.jpeg" alt="Uber CEO" style="width: 500px ; border-radius: 500 px;">
        </div>

        <div id="bar" class="progress-bar"></div>
      </section>
    `;

    const slides = [
      {
        title: "Leading Uber into",
        highlight: "the future",
        desc: "Dara Khosrowshahi is transforming Uber into a platform for all kinds of movement.",
        button: "Meet the CEO",
        img: "img/Frase3.jpg"
      },
      {
        title: "Redefining",
        highlight: "urban mobility",
        desc: "Uber’s technology helps cities reduce traffic and emissions.",
        button: "Explore",
        img: "img/Frase1.jpeg"
      },
      {
        title: "More than rides:",
        highlight: "Uber’s services",
        desc: "Food, freight, and more — Uber is shaping the future of delivery.",
        button: "See more",
        img: "img/Frase2.jpg"
      }
    ];

    let current = 0;
    const text = this.querySelector('#text');
    const img = this.querySelector('#image');
    const bar = this.querySelector('#bar');

    const updateSlide = () => {
      const slide = slides[current];

      text.innerHTML = `
        <h1 style="font-size: 40px; font-weight: bold; line-height: 1.2;">
          ${slide.title}<br>
          <span style="background: white; color: black; padding: 2px 6px;">${slide.highlight}</span>
        </h1>
        <p style="margin-top: 20px; color: #ccc;">${slide.desc}</p>
        <button style="margin-top: 20px; padding: 10px 20px; background: white; color: black; border: none; border-radius: 20px; cursor: pointer;">
          ${slide.button}
        </button>
      `;
      img.src = slide.img;

      
      bar.style.transition = 'none';
      bar.style.width = '0%';
      void bar.offsetWidth; 
      bar.style.transition = 'width 5s linear';
      bar.style.width = '100%';
    };

    updateSlide();
    setInterval(() => {
      current = (current + 1) % slides.length;
      updateSlide();
    }, 5000);
  }
}

customElements.define('fra-seceo', FraseCEO);
