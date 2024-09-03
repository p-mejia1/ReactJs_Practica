
import {Col, Row} from 'antd'
import Usuario from './view/Usuario'
function App() {
  return (
    <>
    <Usuario nombreUsuario="David" 
    apellidoUsuario="Mejia" 
    level={1}/>
  
    <Row>
      <Col span={24}>col</Col>
    </Row>
    <Row>
      <Col span={12}>col-12</Col>
      <Col span={12}>col-12</Col>
    </Row>
    <Row>
      <Col span={8}>col-8</Col>
      <Col span={8}>col-8</Col>
      <Col span={8}>col-8</Col>
    </Row>
    <Row>
      <Col span={6}>col-6</Col>
      <Col span={6}>col-6</Col>
      <Col span={6}>col-6</Col>
      <Col span={6}>col-6</Col>
    </Row>     
    </>
  )
}

export default App
