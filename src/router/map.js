import {Switch,Router,Route,Redirect} from 'dva/router';
export default props => {
    const {history,routers} = props;
    let redirects = routers.filter(route =>route.from);
    let Comps = routers.filter(route =>route.component);
    return (<Router history={history}>
        <Switch>
            {
                Comps.map(router=>{
                    const children =  router.children === undefined ? [] : router.children;
                    const Comp = router.component;
                    return <Route path={router.path} key={router.path} component={()=>{
                        return <Comp routers={children} history={history}></Comp>
                    }}>
                    </Route>
                })
            }
            {
                redirects.map(router=>{
                    return <Redirect key={router.from+router.to}  to={router.to}></Redirect>
                })
            }
        </Switch>
    </Router>)
}