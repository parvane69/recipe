
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SavedRecipesComponent } from './saved-recipes/saved-recipes.component';

const routes: Routes = [
{ path: 'home', component: HomeComponent },
{ path: 'savedRecipes', component: SavedRecipesComponent },
{ path: '', redirectTo: '/home', pathMatch: 'full' },
{ path: '[**', redirectTo: '/home' }
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }