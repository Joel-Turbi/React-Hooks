import React,{useState} from 'react';
import { Card, Button, Col, Row } from 'antd';
import './App.css';

function App() {
  
  const [count,setCount] = useState(0)
  return (
    
    <Card  bordered={false} style={{ width: 300 }}>

    <Row type="flex" justify="center" align="middle">
      <Col span={8}> <Button type="primary" shape="circle" icon="plus" onClick={()=>setCount(count+1)} /></Col>
  <Col span={8}><h2>{count}</h2></Col>
      <Col span={8}><Button type="primary" shape="circle" icon="minus" onClick={()=>setCount(count-1)} /></Col>
    </Row>
  </Card>

  );
}

export default App;
