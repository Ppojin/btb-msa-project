import React, {Component} from 'react';
import AppRoutes from './AppRoutes';
import Navbar from './container/layout/Navbar';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
const { Header, Footer, Sider, Content } = Layout;

class App extends Component{
  render(){
    return (
      <Layout>
        <Header><Navbar/></Header>
        <Layout>
          <Sider>Sider</Sider>
          <Content><AppRoutes/></Content>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    )
  }
}

export default App;
