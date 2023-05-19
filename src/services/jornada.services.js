import axios from "axios";

export const registroDeEntrada = async (date, rut) =>
  axios.post(
    `https://libro-de-asistencias.herokuapp.com/api/registro-de-entrada/${date}`,
    rut
  );

export const registroDeSalida = async (date, rut) =>
  axios.put(
    `https://libro-de-asistencias.herokuapp.com/api/registro-de-salida/${date}`,
    rut
  );

export const registroDeAusentes = async (date, rut) =>
  axios.put(
    `https://libro-de-asistencias.herokuapp.com/api/registro-ausencia/${date}`,
    rut
  );
