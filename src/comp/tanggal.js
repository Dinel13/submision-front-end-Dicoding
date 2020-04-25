const tanggal = () => {
  const tgal = document.querySelector("#tgl");

  const date = new Date();
  const tgl = date.getDate();
  const bln = date.getMonth();
  const thun = date.getFullYear();

  tgal.innerHTML += ` ${tgl} - ${bln} - ${thun}`;
};

export default tanggal;
