/**
 * Created by wangna on 2017/6/19.
 */
import React from 'react';
import Header from './header';
//import Host from './config/host';
import { IntervalEnhance } from './IntervalEnhance';

class Article extends React.Component {

    constructor(props) {
        super(props);
        console.log(props);
        console.log();
        //init
    }

    render() {
        return (
            <div>
                <Header title="文章"/>
                <section>
                    <p>读万卷书，行万里路</p>
                </section>
            </div>
        );
    }
}

export default Article;