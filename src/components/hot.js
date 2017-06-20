/**
 * Created by wangna on 2017/6/19.
 */
import React from 'react';
import Header from './header';
import { IntervalEnhance } from './IntervalEnhance';

class Hot extends React.Component {

    constructor(props) {
        super(props);
        //console.log(props);
        //init
    }

    render() {
        return (
            <div>
                <Header title="热门"/>
                <section className="">
                    <p>来获取下id:{this.props.match.params.id}</p>
                    <p>Time elapsed for interval: {this.props.seconds}ms</p>
                </section>
            </div>
        );
    }
}

export default IntervalEnhance(Hot);