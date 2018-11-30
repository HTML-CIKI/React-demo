import React, { Component } from 'react';
import { Flex, WhiteSpace } from 'antd-mobile';

import './header.less'

class Header extends Component{
  render () {
    return (
      <div className="header">
        <Flex>
          <Flex.Item>小柿子App</Flex.Item>
        </Flex>
      </div>
    )
  }
}

export default Header;