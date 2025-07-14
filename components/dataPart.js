class DataPart extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <div class="w-full flex flex-col items-center py-12 px-4 mt-16">
        <div class="text-center font-manrope max-w-3xl">
          <h1 class="text-4xl md:text-5xl font-bold leading-snug">
            Challenging injustice to make<br>
            the world a fairer place for one billion people
          </h1>
        </div>

        <div class="bg-white rounded-lg w-full max-w-5xl mx-auto mt-10 px-10 py-8 flex flex-col md:flex-row justify-around items-center gap-8 text-center shadow-md">
          <div class="flex flex-col items-center w-40">
            <h1 class="text-4xl font-bold">+10k</h1>
            <p class="text-lg">Cities</p>
          </div>
          <div class="flex flex-col items-center w-40">
            <h1 class="text-4xl font-bold">+70</h1>
            <p class="text-lg">Countries</p>
          </div>
          <div class="flex flex-col items-centerw-40">
            <h1 class="text-4xl font-bold">+500M</h1>
            <p class="text-lg text-center">Million app downloads</p>
          </div>
        </div>
      </div>
      `;
    }
  }
  customElements.define('data-part', DataPart);
   