import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
	{
		path: 'home',
		children: [
			{
				path:'mundo',
				component: HomeComponent,
				data: {publisher: 'mundo'}
			},
			{
				path:'pais',
				component: HomeComponent,
				data: {publisher: 'pais'}
			},
			{
				path: "",
				redirectTo: "mundo",
				pathMatch: "full"
			},
			{
				path: "**",
				redirectTo: "mundo"
			}
		]
	},
	{
		path: "",
		redirectTo: "home",
		pathMatch: "full"
	},
	{
		path: "**",
		redirectTo: "home"
	}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
