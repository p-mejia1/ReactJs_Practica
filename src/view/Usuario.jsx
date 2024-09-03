import { Typography } from 'antd';
const { Title } = Typography;

const Usuario = ({nombreUsuario, apellidoUsuario, level}) =>{ 
   
    console.log(nombreUsuario);
 return (
    <>
  <Title level={level}>Hola {nombreUsuario} {apellidoUsuario ? apellidoUsuario : "Sin apellido" }</Title>
  

  </>
 );
};
export default Usuario;