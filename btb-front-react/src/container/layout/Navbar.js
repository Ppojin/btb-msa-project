import React from 'react';
import { Menu } from 'antd';
import {Link} from 'react-router-dom';
// import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

// const { SubMenu } = Menu;

class Navbar extends React.Component {
  state = {
    current: 'mail',
  };
  render() {
    return (
      <React.Fragment>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal">{/* defaultSelectedKeys={['2']}> */}
          <Menu.Item key="1"><Link to="/customer">customer</Link></Menu.Item>
          <Menu.Item key="2"><Link to="/exam">exam</Link></Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </React.Fragment>
    );
  }
};

export default Navbar;