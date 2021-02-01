export default app=>{
    let storeModules = require.context('./module',false,/\.js$/);
    let modules = storeModules.keys().map(key=>storeModules(key));
    modules.map(module => app.model(module.default))
}