import clienteRoute from './clienteRoute.js';
import emprestimoRoute from './emprestimoRoute.js';
import usuarioRoute from './usuarioRoute.js';

function Routes(app){
    clienteRoute(app);
    emprestimoRoute(app);
    usuarioRoute(app);
}

export default Routes;
