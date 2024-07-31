import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Recipe } from './models/recipe.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  recipes: Recipe[] = [];
  filteredRecipes: Recipe[] = [];
  isLoading = true;
  error: string | null = null;
  searchForm: FormGroup;

  
  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      name: [''],
      ingredient: [''],
    });
  }

  ngOnInit() {
    this.http.get<Recipe[]>('/assets/recipes.json').subscribe(
      (data) => {
        this.recipes = data;
        this.filteredRecipes = data;
        this.isLoading = false;
      },
      (error) => {
        this.error = 'Failed to load recipes';
        this.isLoading = false;
      }
    );

    this.searchForm.valueChanges.subscribe((value) => {
      this.filterRecipes(value);
    });
  }

  filterRecipes(value: { name: string; ingredient: string }) {
    this.filteredRecipes = this.recipes.filter(
      (recipe) =>
        recipe.name.toLowerCase().includes(value.name.toLowerCase()) &&
        recipe.ingredients.some((ingredient) =>
          ingredient.toLowerCase().includes(value.ingredient.toLowerCase())
        )
    );
  }
}
