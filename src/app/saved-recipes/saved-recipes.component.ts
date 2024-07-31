import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-saved-recipes',
  templateUrl: './saved-recipes.component.html',
  styleUrls: ['./saved-recipes.component.css'],
})
export class SavedRecipesComponent implements OnInit {
  savedRecipes: Recipe[] = [];

  ngOnInit() {
    const savedRecipes = localStorage.getItem('savedRecipes');
    if (savedRecipes) {
      this.savedRecipes = JSON.parse(savedRecipes);
    }
  }
}
