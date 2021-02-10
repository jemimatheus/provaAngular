import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent}  from './components/home/home.component'
import {BlocksComponent} from './pages/blocks/blocks.component';
import {CardsComponent} from './pages/cards/cards.component';
import {FormsComponent} from './pages/forms/forms.component';
import {PricingComponent} from './pages/pricing/pricing.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
},
{
  path: 'cards',
  component: CardsComponent 
},
{
  path: 'blocks',
  component: BlocksComponent 
},
{
  path: 'forms',
  component: FormsComponent 
},
{
  path: 'pricing',
  component: PricingComponent 
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
