/**
 * Created by wangna on 2017/6/15.
 */

import React, { Component } from 'react';
import Header from './header';

class Demo1 extends Component {
    constructor(props) {
        super(props);
        this.render = this.render.bind(this);
        //初始化state
        this.state = {liked: false};
    }

    clickHander () {
        console.log(this.props);
        console.log(this.props.name);
    }

    render () {
        return (
            <div>
                <Header title="demo1"/>
                <section onClick={this.clickHander.bind(this)}>wangna say: Hello World!</section>
            </div>

        )
    }
}

export default Demo1;
