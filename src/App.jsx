
import {Col, Row} from 'antd'
import { blue, cyan, geekblue, gold, green, lime, magenta, purple, red, volcano, } from '@ant-design/colors';
import Usuario from './view/Usuario'
function App() {
  return (
    <>
    <Usuario nombreUsuario="David" 
    apellidoUsuario="Mejia" 
    level={1}/>
  
    <Row style={{backgroundColor: geekblue[5]}}>
      <Col span={24}>col-24</Col>
    </Row>
    <Row>
      <Col span={12} style={{backgroundColor: gold[3]}}>col-12</Col>
      <Col span={12}  style={{backgroundColor: volcano[5]}}>col-12</Col>
    </Row>
    <Row>
      <Col span={8}style={{backgroundColor: purple[2]}}>col-8</Col>
      <Col span={8} style={{backgroundColor: red[5]}} >col-8</Col>
      <Col span={8}style={{backgroundColor: green[5]}}>col-8</Col>
    </Row>
    <Row>
    <Col span={6}style={{backgroundColor: cyan[5]}}>col-6</Col>
    <Col span={6}style={{backgroundColor: magenta[4]}}>col-6</Col>
    <Col span={6}style={{backgroundColor: lime[4]}}>col-6</Col>
    <Col span={6}style={{backgroundColor: blue[4]}}>col-6</Col>
    </Row>
    
    
    </>
  )
}

export default App
