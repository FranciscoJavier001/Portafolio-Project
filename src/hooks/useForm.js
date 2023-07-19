import { useState } from "react"; //* Hook de React */

export const useForm = (initialForm = {}) => {
  //* Exportamos esta funcion, que recibe un parametro vacio */
  const [formState, setFormState] = useState(initialForm); //* Hook useState que recibe 2 parametros y su parametro inicial vacio */

  const onInputChange = ({ target }) => {
    //* Definimos una variable que recibe un parametro */
    const { name, value } = target; //* Variables del parametro tarjet */
    setFormState({
      //* Cuando cambia este parametro */
      ...formState, //* Regreso este arreglo con todos los resultados */
      [name]: value, //* Nueva propiedad del objeto name con el valor de la propiedad value */
    });
  };

  const onResetForm = () => {
    //* Nueva variable que no recibe nada */
    setFormState(initialForm); //* Variable del hook useState que pone el formulario en su forma inicial que es vacia */
  };

  return {
    //* Lo que voy a regresar */
    ...formState, //* Regreso el arreglo pero con lo que tiene dentro que es su estado anterior */
    formState, //* Nuevo estado del formulario */
    onInputChange, //* Funcion */
    onResetForm, //* Funcion */
  };
};
