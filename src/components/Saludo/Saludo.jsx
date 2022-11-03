import PropTypes from "prop-types";

const Saludo = ({ nombre, apellido, grupo }) => {
  // const { nombre, apellido, user } = props //desestructuracion del objeto props

  return (
    <>
      <p>
        Bienvenido Sr(a) {nombre} {apellido}, su grupo es {grupo}
      </p>
    </>
  );
};

export default Saludo;

//declarando los tipos de datos que se deben definir en las props
Saludo.propTypes = {
  nombre: PropTypes.string,
  apellido: PropTypes.string,
  grupo: PropTypes.number,
};

//tambien se pueden declarar valores por defecto para las props
Saludo.defaultProps = {
  nombre: "Carlos",
  apellido: "Enciso",
  grupo: 0,
};
