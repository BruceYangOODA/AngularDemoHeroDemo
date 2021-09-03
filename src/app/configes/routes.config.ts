import { Inject, InjectionToken } from "@angular/core";

//exprt let ROUTES_CONFIG = new InjectionToken('routes.config')

const basePaths = {
  hero: 'hero',
  herolist: 'herolist',
  heroarray: 'heroarray'
}

export const RoutesConfig: any = {
    basePaths: basePaths,
    routesNames: {
      home: 'home',
      error404: '404',
      hero: 'hero',
      herolist: 'herolist' 
    },
    routes: {
      home: 'home',
      error404: '404',
      herolist: "herolist",
      heroarray: "heroarray",
      hero: 'hero/:id'  
    }
  };

export function getHeroDetail(id: string) {
  return `/${basePaths }/${id}`
}

