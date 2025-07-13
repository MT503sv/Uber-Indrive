class Absolute extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <div class="w-full flex flex-col items-center bg-[#fffbea] py-12 px-4">
          <div class="text-center font-manrope max-w-3xl">
            <h1 class="text-4xl md:text-5xl font-bold leading-snug">
              Challenging injustice to make<br>
              the world a fairer place for one billion people
            </h1>
          </div>
   
         
          <div class="bg-white rounded-lg w-full max-w-5xl mt-10 px-10 py-8 flex flex-col md:flex-row justify-around items-center gap-8 text-center shadow-md">
            <div>
              <h1 class="text-4xl font-bold">888</h1>
              <p class="text-lg">Cities</p>
            </div>
            <div>
              <h1 class="text-4xl font-bold">48</h1>
              <p class="text-lg">Countries</p>
            </div>
            <div>
              <h1 class="text-4xl font-bold">280</h1>
              <p class="text-lg">Million app downloads</p>
            </div>
          </div>
        </div>
      `;
    }
  }
  customElements.define('ab-solute', Absolute);
   