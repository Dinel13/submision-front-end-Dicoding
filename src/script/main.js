import indo from "../data/Indonesia.js";
import {prov} from "./prov.js";
import tanggal from "../comp/tanggal";

const main = () => {
  const update = document.querySelector("#update");
  const appbar = document.querySelector("app-bar");
  const sini = document.querySelector("#sini");


  appbar.clickEvent = () => {
    sini.innerHTML = ``;
    update.innerHTML = `<serch-bar></serch-bar>                            
                        <h4>Atau</h4>
                        <show-prov></shpw-prov>
                        `;
       prov();
  };
  appbar.clickEventMe = () => {
    sini.innerHTML = ``;
    update.innerHTML = `<section>
                                <h2>Salahuddin <span class="judul">hafid</span></h2>
                                <p>Web Developper, Programer & enterperneur</p>
                                <p>Study Informatic Engginering at <a class="judul" target="blank" href="https://unhas.ac.id/">Hasanuddin University</a></p>
                                <figure>
                                <div id="fotoku"  width="100%" height="100%"></div>
                                <figcaption class="judul">Huddin</figcaption>
                                </figure>
                                <div id="dataku"></div>
                          </section>
                        `;
  };

  appbar.clickEventHome = () => {
    sini.innerHTML = ``;
    update.innerHTML = ` <h1 style="font-weight: bold;">Indonesia Hari Ini</h1>
                            <p id="tgl">Tanggal </p>                    
                            <table>
                            <tr>
                                <td id="kasus"></td>
                                <td id="sehat"></td>
                                <td id="mati"></td>
                            </tr>
                            <tr>
                                <td>Positif</td>
                                <td>Sembuh</td>
                                <td>Meninggal</td>
                            </tr>
                            </table>`;
    indo();
    tanggal();
  };

  indo();
  tanggal();              
                    
};

export default main;
