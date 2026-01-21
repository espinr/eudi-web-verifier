import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '@features/sports-custom-presentation-request/home/home.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
		children: [
			{
        path: '', redirectTo: 'create', pathMatch: 'full'
      },
			{
				path: 'create',
				loadComponent:
        () => import('@features/sports-custom-presentation-request/components/sports-request/sports-request.component')
          .then(c => c.SportsRequestComponent)
			},
			{
				path: 'invoke',
				loadComponent: () => import('@features/invoke-wallet/components/invoker/invoker.component')
          .then(c => c.InvokerComponent)
			}
		]
	},

];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class SportsCustomPresentationRequestRoutingModule { }
