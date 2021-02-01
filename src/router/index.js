import routes from './routers.js';
import RouterMap from './map';
export default (props)=>{
const routers = props.routers ? props.routers : routes;
return <RouterMap routers={routers} {...props}></RouterMap>
}