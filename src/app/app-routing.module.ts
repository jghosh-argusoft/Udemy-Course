import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipesResolverService } from './recipes/recipes-resolver.service';



//The pathMatch: 'full' option means that the whole URL must match for the redirect to occur. Without it, the redirect would apply if the URL started with an empty path, which is not what you want in this case.

// important the routes must be ordered if we put hardcoded path after id then it will treat the new path as parameter and will reflect error
const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipesComponent, children: [
    { path: '', component: RecipeStartComponent },
    { path: 'new', component: RecipeEditComponent },
    
    { path: ':id', component: RecipeDetailComponent, resolve: [RecipesResolverService]},

    { path: ':id/edit', component: RecipeEditComponent },
  ] },
  { path: 'shopping-list', component: ShoppingListComponent },
];

@NgModule({

  //RouterModule.forRoot(appRoutes): This line configures the Angular router with the defined routes. The appRoutes array contains the route configurations. The RouterModule.forRoot method sets up the router's initial configuration based on these routes.

  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
