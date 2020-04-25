import {prov, provsemua} from "../script/prov";
import tanggal from "../comp/tanggal";

const provinsi = (keyword) => {
  const update = document.querySelector("#update");
  const sini = document.querySelector("#sini");

  fetch("https://indonesia-covid-19.mathdro.id/api/provinsi/")
    .then((res) => res.json())
    .then((resJson) => {
      if (!keyword) {
        renderAllProv(resJson.data);
      } else {
        let tes = resJson.data.filter(
          (item) => item.provinsi.toUpperCase() == keyword.toUpperCase()
        );
        if (!tes.length) {
          update.innerHTML = `<serch-bar></serch-bar>    
                              <h3>${keyword} tidak ditemukan</h3>`;
                              provsemua();
        } else {
          renderPro(tes[0]);
        }
        prov();
      }
      prov();
    })
    .catch((err) => {
      console.log(err);
      prov();
    });

  const renderAllProv = (provs) => {
    update.innerHTML = `<serch-bar></serch-bar>
                       <p id="tgl">Hari Ini,Tanggal </p>
                       `;
    tanggal();

    provs.forEach((pro) => {
      sini.innerHTML += `<div id="card" class="col-lg-4 col-md-6 col-sm-12" style="margin-top: 12px;">
                              <div class="card">
                                  <div class="card-body">
                                    <h1 style="font-weight: bold;">${pro.provinsi}</h1>
                                      <p id="tgl">Hari Ini </p>                   
                                      <table>
                                          <tr>
                                              <td id="kasus">${pro.kasusPosi}</td>
                                              <td id="sehat">${pro.kasusSemb}</td>
                                              <td id="mati">${pro.kasusMeni}</td>
                                          </tr>
                                          <tr>
                                              <td>Positif</td>
                                              <td>Sembuh</td>
                                              <td>Meninggal</td>
                                          </tr>
                                      </table>   
                                  </div>
                              </div>
                            </div>
                        
                        `;
    });
  };

  const renderPro = (pro) => {
    sini.innerHTML = ``;
    update.innerHTML = `<serch-bar></serch-bar>                            
                          <h4>Atau</h4>
                          <show-prov></shpw-prov>
                          `;
    update.innerHTML += `<div id="card"  style="margin-top: 12px;">
                            <div class="card">
                                <div class="card-body">
                                  <h1 style="font-weight: bold;">${pro.provinsi}</h1>
                                    <p id="tgl">Hari Ini, Tanggal </p>                   
                                    <table>
                                        <tr>
                                            <td id="kasus">${pro.kasusPosi}</td>
                                            <td id="sehat">${pro.kasusSemb}</td>
                                            <td id="mati">${pro.kasusMeni}</td>
                                        </tr>
                                        <tr>
                                            <td>Positif</td>
                                            <td>Sembuh</td>
                                            <td>Meninggal</td>
                                        </tr>
                                    </table>   
                                </div>
                            </div>
                          </div>        
                         `;
    tanggal();
  };
};

export default provinsi;
