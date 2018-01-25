import Routes from './router.config.json'

const childRouter = routerVal => {
  let route = []

  if( !routerVal ){
    return [];
  }

  routerVal.map( val => {
    route.push({
      path: val.path,
      name: val.name || '',
      component: resolve => require([`../${val.component}`], resolve),
      meta: val.meta || {}
    });
  });
  return route;
}

const pathRouter = routerVal => {
  let route = []
  routerVal.map( val => {
    route.push({
      path: val.path,
      name: val.name || '',
      component: resolve => require([`../${val.component}`], resolve),
      redirect: val.redirect || '',
      children: childRouter(val.children),
      meta: {
        requireAuth: val.meta.requireAuth
      }
    });
  });
  return route;
}

export default pathRouter(Routes)