import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  savedRecipesCount: number = 0;

  ngOnInit() {
    this.updateSavedRecipesCount();
  }

  updateSavedRecipesCount() {
    const recipes = localStorage.getItem('savedRecipes');
    if (recipes) {
      this.savedRecipesCount = JSON.parse(recipes).length;
    }
  }
}
