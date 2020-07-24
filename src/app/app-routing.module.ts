import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OnDemandPreloadStrategyService} from './services/on-demand-preload-strategy.service';


const routes: Routes = [
    {
        path: '',
        redirectTo: '/parent-a',
        pathMatch: 'full'
    },
    {
        path: 'parent-a',
        loadChildren: () => import('./parent-a/parent-a.module').then(m => m.ParentAModule)
    },
    {
        path: 'parent-b',
        loadChildren: () => import('./parent-b/parent-b.module').then(m => m.ParentBModule),
        data: {preload: false}
    },
    {
        path: '**',
        loadChildren: () => import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: OnDemandPreloadStrategyService})],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
