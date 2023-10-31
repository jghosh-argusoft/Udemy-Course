import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();


  // private recipes: Recipe[] = [
  //   new Recipe('Rosogolla', 'This is simply a test', 'https://img.freepik.com/premium-photo/delicious-pink-chumchum-rose-flavour-cham-cham-rasgulla-rasagola-rosogola-rosogolla_466689-83826.jpg?w=740',
  //   [
  //       new Ingredient('Milk',1),
  //       new Ingredient('Sugar',20)
  //   ]),
  //   new Recipe('DalBatiChurma', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/DalBati.jpg/800px-DalBati.jpg',
  //   [
  //       new Ingredient('Dal',50),
  //       new Ingredient('Bati',30)
  //   ])];
  
  private recipes: Recipe[]=[];

  constructor(private slService: ShoppingListService) {}
  // we added after hhtp
  setRecipes(recipes: Recipe[]){
    this.recipes=recipes;
    this.recipesChanged.next(this.recipes.slice())
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
