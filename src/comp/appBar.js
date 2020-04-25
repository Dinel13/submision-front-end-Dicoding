class AppBar extends HTMLElement {
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

  set clickEventHome(event) {
    this._clickEventHome = event;
    this.render();
  }

  set clickEventMe(event) {
    this._clickEventMe = event;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            :host {
                display: block;
                width: 100%;
                background-color: rgb(4, 121, 39);
                opacity: 0.7;
                color: white;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                padding: 24px;
            }

            h2, nav {
                padding: 16px;
                display: inline;                
            }

            li{
                margin: 24px;
                text-decoration : none;
                display : inline;
            }
            a{
                text-decoration :none;
                color:white;
            }
            a:hover{
                font-weight: bold;
                color:  #1a6fee;
            }

            
            @media screen and (max-width: 396px) {
                h2{
                    display: block;;
                    width: 100%;
                }
                li{
                    margin: 0 5px;
                }
            }
         </style>
             <h2><a href="#" id="home">Corona Info</a></h2>
            <nav>
                <li><a href="#" id="prov">Povinsi </a></li>
                <li><a href="#" id="me">About me</a> </li>
            </nav>
            `;
    this.shadowDOM
      .querySelector("#prov")
      .addEventListener("click", this._clickEvent);
    this.shadowDOM
      .querySelector("#me")
      .addEventListener("click", this._clickEventMe);
    this.shadowDOM
      .querySelector("#home")
      .addEventListener("click", this._clickEventHome);
  }
}

customElements.define("app-bar", AppBar);
