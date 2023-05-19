import axios from "axios";

export const addTrabajador = async (values) =>
  await axios.post("https://libro-de-asistencias.herokuapp.com/api/crear-trabajador", values);

export const getAllTrabajadores = async () =>
  await axios.get("https://libro-de-asistencias.herokuapp.com/api/get-all-trabajadores");

export const getAllTrabajadoresOfAJornada = async (date) =>
  await axios.get(`https://libro-de-asistencias.herokuapp.com/api/obtener-jornada/${date}`);

export const deleteOneTrabajador = async (rut) =>
  await axios.delete(`https://libro-de-asistencias.herokuapp.com/api/delete-trabajador/${rut}`);

export const updateTrabajador = async (values, rut) =>
  await axios.put(
    `https://libro-de-asistencias.herokuapp.com/api/actualizar-datos-trabajador/${rut}`,
    values
  );

export const getOneTrabajador = async (rut) =>
  await axios.get(`https://libro-de-asistencias.herokuapp.com/api/obtener-trabajador/${rut}`);

export const getInformeMes = async ({ dateStart, mes, dateFinish }) =>
  await axios({
    url: "https://libro-de-asistencias.herokuapp.com/api/obtener-informe-mes",
    method: "post",
    data: {
      dateStart: dateStart,
      mes: mes,
      dateFinish: dateFinish,
    },
    responseType: "blob",
  }).then((response) => {
    //se crea un archivo de link en la memoria del navegador
    const href = URL.createObjectURL(response.data);
    //se crea un "a" html tag
    const link = document.createElement("a");
    //definimos la propiedad href como el link que pasamos en la linea 23
    link.href = href;
    //investigar mas
    link.setAttribute("download", `Informe de asistencias_${mes}.xlsx`);
    document.body.appendChild(link);
    //hacemos click en el "a" que creamos
    link.click();

    //removemos el elemento "a" y el elemento que creamos en la linea 23
    document.body.removeChild(link);
    URL.revokeObjectURL(href);
  });

export const createLicencia = async (rut, values) =>
  await axios.put(
    `https://libro-de-asistencias.herokuapp.com/api/actualizar-licencia/${rut}`,
    values
  );

export const getTrabajadoresWithLicencia = async () =>
  await axios.get("https://libro-de-asistencias.herokuapp.com/api/obtener-trabajadores-licencia");

export const getInformeVisualMes = async (values) =>
  await axios.post(
    "https://libro-de-asistencias.herokuapp.com/api/obtener-informe-visual-mes",
    values
  );

export const resetLicencia = async (values) =>
  await axios.post("https://libro-de-asistencias.herokuapp.com/api/reset-licencia", values);
