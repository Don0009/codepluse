import { Component, OnDestroy } from '@angular/core';
import { subscribeOn, Subscription } from 'rxjs';
import { AddCategoryRequest } from 'src/app/models/add-category-request.model';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnDestroy{



  model:AddCategoryRequest;

  private addCategorySubscription?:Subscription;

  constructor(private categoryservice:CategoryService)
  {
      this.model = 
      {
        Name:'',
        UrlHandle:''
      };
  }
  


  onFormSubmit()
  {
     this.addCategorySubscription  = this.categoryservice.addCategory(this.model).
        subscribe(
          {
            next:(response)=> 
            {
              console.log('This was successful!')
            }
          }
        )
        

        
        
        
  }

  ngOnDestroy(): void 
  {
    this.addCategorySubscription?.unsubscribe();
  }
}
