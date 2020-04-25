import provinsi from "../data/provinsi.js";

const prov = () => {
  const seerch = document.querySelector("serch-bar");
  const semuaprov = document.querySelector("show-prov");

  seerch.clickEvent = () => {
    console.log("ey");
    provinsi(seerch.value);
  };

  semuaprov.clickEvent = () => {
    console.log("test");
    provinsi();
  };
};

const provsemua = () => {
  const semuaprov = document.querySelector("show-prov");

  semuaprov.clickEvent = () => {
    console.log("test");
    provinsi();
  };
};

export { prov, provsemua};
