class SerchbarContainer extends HTMLElement {
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

  get value() {
    return this.shadowDOM.querySelector("#searchElement").value;
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
      
       .search-container > input {
           width: 68%;
           padding: 16px;
           font-weight: bold;
           border-radius : 8px;
           border: 2px solid white;
           background-color: rgba(4, 121, 39, 0);
           color: white;
       }
      
       .search-container > input:focus {
           outline: 0;
           border: 2px solid rgb(4, 121, 39);
       }
      
       .search-container > input:focus::placeholder {
           font-weight: bold;
       }
      
       .search-container >  input::placeholder {
           color: white;
           font-weight: normal;
       }
      
       .search-container > button {
           width: 30%;
           cursor: pointer;
           margin-right: auto;
           padding: 16px;
           border-radius : 8px;
           border: 2px solid white;
           background-color: rgba(4, 121, 39, 0);
           color: white;
           text-transform: uppercase;
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

      
       @media screen and (max-width: 550px){
           .search-container {
               flex-direction: column;
               position: static;
           }
      
           .search-container > input {
               width: 100%;
               margin-bottom: 12px;
           }
      
           .search-container > button {
               width: 100%;
           }
       }
       </style>
       <div id="search-container" class="search-container">
            <button id="searchButtonElement" type="submit">Search</button>
           <input placeholder="Input nama Provinsi" id="searchElement" type="search">
           
       </div>
        `;

    this.shadowDOM
      .querySelector("#searchButtonElement")
      .addEventListener("click", this._clickEvent);
  }
}

customElements.define("serch-bar", SerchbarContainer);
