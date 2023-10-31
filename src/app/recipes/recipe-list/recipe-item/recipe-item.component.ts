import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() index: number;
    // @Output() recipeSelected = new EventEmitter<void>();
  // we removed  (click)="onSelected()"  from constructor
  

  ngOnInit() {
        // const id=this.route.snapshot.params['id'];
  }


    // onSelected() {
  //   this.recipeService.recipeSelected.emit(this.recipe);
  // }

}
