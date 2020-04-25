class showProv extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
       <style>
       .search-container {
           max-width: 300px;
           box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
           padding: 16px;
           border-radius: 8px;
           display: flex;
           margin: 30px auto 0 auto;
           color: #fcfcfd41;
       }
      

        button{
             padding: 16px;
             border-radius : 24px;
             border: 2px solid white;
             background-color: rgba(4, 121, 39, 0);
             color: white;
         }
         button:hover {
             background-color:white;
             color: black;
         }

      
       </style>
      
       <div id="tampil">
       <button id="semuaprov">Tampilkan Semua Provinisi</button>
       </div>
        `;

    this.shadowDOM
      .querySelector("#semuaprov")
      .addEventListener("click", this._clickEvent);
  }
}

customElements.define("show-prov", showProv);
