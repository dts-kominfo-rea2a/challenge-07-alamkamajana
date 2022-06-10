const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emotion) => {
  let hasil = (await promiseTheaterIXX()).concat((await promiseTheaterVGC()));
  return hasil.filter(data => (data.hasil === emotion)).length;
};

module.exports = {
  promiseOutput,
};
