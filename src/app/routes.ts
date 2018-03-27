import { Routes, RouterModule } from '@angular/router';
import { Service } from './service';
import { IndexComponent } from './index/index.component';
import { NgModule } from '@angular/core';
// import { NgModule } from '@angular/core/src/metadata/ng_module';

const routes: Routes = [
    //home
    {
        path: 'form/:pagina',
        component: IndexComponent,
    },  
];

@NgModule({
    imports: [RouterModule.forRoot(routes)], 
    exports: [RouterModule] 
})

export class teste {}
