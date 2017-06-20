/**
 * Created by wangna on 2017/6/19.
 */

import React from 'react';

export var IntervalEnhance = ComposeComponent => class extends ComposeComponent {

    //static displayName = 'ComponentEnhancedWithIntervalHOC';

    constructor(props) {
        super(props);
        this.state = {
            seconds: 0
        };
    }

    componentDidMount() {//已插入dom
        this.interval = setInterval(this.tick.bind(this), 1000);
    }

    componentWillUnmount() {//移出dom
        clearInterval(this.interval);
    }

    tick() {
        this.setState({
            seconds: this.state.seconds + 1000
        });
    }

    render() {
        return (
            <ComposeComponent {...this.props} {...this.state} />
        );
    }
}
