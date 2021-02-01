export default {
    //命名空间
    namespace: 'home',
    //仓库初始化状态
    state: {
        num:1
    },
    reducers: {
        num(state, { type, operator }) {
            let num = state.num;
            if(operator==='+'){
                console.log(state.num)
                num++
            }else if(operator==='-'){
               num--
            }
            return {
                ...state,
                num: num
            }
        }
    },
    effects: {
       *upnum(action,{put,call}){
            yield put({ type: 'num',operator:action.operator})//此处type对应reducers中的函数名
       },
    }
}