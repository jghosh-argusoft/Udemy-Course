import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";
import { map, tap } from "rxjs/operators";
import { Ingredient } from './ingredient.model';


@Injectable({providedIn: 'root'})

export class DataStorageService{
    constructor(private http: HttpClient,private recipeService: RecipeService){}

storeRecipes(){
    const recipes=this.recipeService.getRecipes();

    return this.http
    .put(
        'https://ng-course-recipe-books-fc232-default-rtdb.asia-southeast1.firebasedatabase.app/recipes.json',
        recipes)
    .subscribe(response=>{ 
        console.log(response);
     });

}

// fetchRecipes(){
//     return this.http
//     .get<Recipe[]>(
//         'https://ng-course-recipe-books-fc232-default-rtdb.asia-southeast1.firebasedatabase.app/recipes.json'
//         )
//         .pipe(map(recipes =>{
//             return recipes.map(recipe =>{
//                 return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients:[]}
//             });
//         }))
//         .subscribe(recipes=>{
//            this.recipeService.setRecipes(recipes);
//         });
//      }
//###### We solved the eeror by replacing the .subscribe by ,tap

fetchRecipes() {
    return this.http
      .get<Recipe[]>(
        'https://ng-course-recipe-books-fc232-default-rtdb.asia-southeast1.firebasedatabase.app/recipes.json'
      )
      .pipe(
        map(recipes => {
          return recipes.map(recipe => {
            return {
              ...recipe,
              ingredients: recipe.ingredients ? recipe.ingredients : []
            };
          });
        }),
        tap(recipes => {
          this.recipeService.setRecipes(recipes);
        })
      )
  }
    

}