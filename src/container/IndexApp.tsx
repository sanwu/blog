import * as React from "react";
import * as ReactDOM from "react-dom";
import {bindActionCreators} from 'redux';
import { Provider, connect} from 'react-redux';
import { Button, Icon } from 'antd';
//自己书写的基类
import BaseContainer from '../pub/BaseContainer';
import AppHeader from '../components/layout/AppHeader';
import AppMenu from '../components/layout/AppMenu';

class IndexApp extends BaseContainer {
    constructor(props) {
        super(props);
    }
    render() {
        return (<div className="cw-body">
                   <AppHeader />
                    <div className="cw-layout-main">
                        <AppMenu />
                        <div className="cw-container">
                            <form className="post" role="form" method="post" action="/post">
                                <h2 className="form-signin-heading">发布文章</h2>
                                <input type="text" name="title"></input>
                                <br/>
                                <textarea name="content" id="" cols="30" rows="10"></textarea>
                                <br/>
                                <button id="btnSub" className="btn btn-lg btn-primary" type="submit">上 传</button>
                            </form>
                        </div>
                    </div>
                </div>
                    );
    }

    componentDidMount():void {

    }
    
    componentWillUnmount():void {
        
    }
}

function mapStateToProps(state) {
    return {
        state: state.posts
    }
}

export default connect(mapStateToProps)(IndexApp);


