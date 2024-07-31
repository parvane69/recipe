

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { SavedRecipesComponent } from './saved-recipes/saved-recipes.component';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';
import { HighlightDirective } from './directives/highlight.directive';

const routes: Routes = [
{ path: '', component: HomeComponent },
{ path: 'savedRecipes', component: SavedRecipesComponent }
];

@NgModule({
declarations: [
AppComponent,
HomeComponent,
RecipeCardComponent,
HighlightDirective,
SavedRecipesComponent
],
imports: [
BrowserModule,
RouterModule.forRoot(routes),
AppRoutingModule,
ReactiveFormsModule,
HttpClientModule,
],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }