import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saved-recipes',
  templateUrl: './saved-recipes.component.html',
  styleUrls: ['./saved-recipes.component.css'],
})
export class SavedRecipesComponent implements OnInit {
  savedRecipes: any[] = [];

  ngOnInit() {
    this.loadSavedRecipes();
  }

  loadSavedRecipes() {
    const recipes = localStorage.getItem('savedRecipes');
    if (recipes) {
      this.savedRecipes = JSON.parse(recipes);
    }
  }

  removeRecipe(index: number) {
    this.savedRecipes.splice(index, 1);
    localStorage.setItem('savedRecipes', JSON.stringify(this.savedRecipes));
  }
}
