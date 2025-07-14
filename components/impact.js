class Impact extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="py-5 px-6 text-center mt-50">
            <div class="max-w-2xl mx-auto">
            
                <span class="bg-black text-white px-6 py-2 rounded-full text-sm">Impact</span>

                <h1 class="text-6xl font-bold mt-6">
                    Social impact: making <br>
                    a difference
                </h1>

                <p class="mt-4 text-x1 text-gray-800 font-medium">
                    To maximize our positive impact, <br>
                    we created a hub called inVision
                </p>

                <p class="mt-4 font-bold text-black">
                    <span>➤</span>
                    <a>Learn more about inVision</a>
                </p>
            
            </div>
        </div>
    `
  }
}

customElements.define('im-pact', Impact);