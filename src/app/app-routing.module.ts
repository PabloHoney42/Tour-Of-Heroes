import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { HeroesComponent } from './heroes/heroes.component'
import { DashboardComponent }   from './dashboard/dashboard.component'
import { HeroDetailComponent }  from './hero-detail/hero-detail.component'

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'details/:id', component: HeroDetailComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)], // inicia o roteamento baseado na URL atual
  exports: [RouterModule] // disponibiliza RouterModule aos componentes do módulo que precisarem
})

export class AppRoutingModule { }
