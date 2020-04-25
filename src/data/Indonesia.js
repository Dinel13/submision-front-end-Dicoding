const indonesia = () => {
  const kasus = document.querySelector("#kasus");
  const sehat = document.querySelector("#sehat");
  const mati = document.querySelector("#mati");
  const update = document.querySelector("#update");

  fetch("https://covid19.mathdro.id/api/countries/indonesia")
    .then((res) => res.json())
    .then((resJson) => {
      kasus.innerHTML += resJson.confirmed.value;
      sehat.innerHTML += resJson.recovered.value;
      mati.innerHTML += resJson.deaths.value;
    })
    .catch((error) => {
      update.innerHTML = `<H5>Perikasa koneksi jaringan anda</h5>
            `;

      console.log(error);
    });
};

export default indonesia;
