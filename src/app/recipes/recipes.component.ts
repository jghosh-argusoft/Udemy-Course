import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
    // selectedRecipe: Recipe;

  constructor() { }
  // we rmoved private recipeService: RecipeService from constructor after observable


  ngOnInit() {
        // this.recipeService.recipeSelected.subscribe((recipe: Recipe)=>{
    //   this.selectedRecipe=recipe;
    // });
    //commented after observables
  }

}
