import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './components/home/home.component';
import { PerfilComponent } from './components/perfil/perfil.component';
// import { PageNotFoundComponent } from './';

// import { AuthGuard } from './guards/auth.guard';
// import { AuthGuard } from '@auth0/auth0-angular';


const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'perfil', component: PerfilComponent },
    // { path: 'path3', component: Name3Component },
    // { path: 'path4', component: Name4Component },
    { path: '**',pathMatch: 'full', redirectTo: 'home' }

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class FeatureRoutingModule {}
