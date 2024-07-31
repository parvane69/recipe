import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from './models/recipe.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  recipes: Recipe[] = [];
  isLoading = true;
  error: string | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<Recipe[]>('/assets/recipes.json').subscribe(
      (data) => {
        this.recipes = data;
        this.isLoading = false;
      },
      (error) => {
        this.error = 'Failed to load recipes';
        this.isLoading = false;
      }
    );
  }
}
