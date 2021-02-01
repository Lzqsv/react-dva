import React, { Component } from 'react'
import {connect} from 'dva';
class index extends Component {
    count(operator){
        this.props.dispatch({type:'home/upnum',operator})//type=> home对应store中的namespace,upnum对应store中reducers或effects下的函数名
    }
    render() {
        const {num} = this.props;
        return (
            <div>
                <button onClick={()=>this.count('-')}>-</button>{num}<button onClick={()=>this.count('+')}>+</button>
            </div>
        )
    }
}
export default connect(store=>store.home)(index);