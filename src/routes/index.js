import clienteRoute from './clienteRoute.js';
import emprestimoRoute from './emprestimoRoute.js';
import pessoasRoute from './pessoasRoute.js';

function Routes(app){
    clienteRoute(app);
    pessoasRoute(app);
    emprestimoRoute(app);
}

export default Routes;
