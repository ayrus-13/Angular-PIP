import {Component,OnInit} from '@angular/core';
import {ProductService} from './service/app.productservice';
import {Product} from './_model/app.productmodel';
import { ActivatedRoute } from '@angular/router';



@Component({
    selector:'show',
    templateUrl:'app.show.html'
})

export class ShowComponent implements OnInit{
    products:Product[]=[];
    model:any={};
    popup:boolean=false;
    p: number = 1;
    public popoverTitle:string="Confirmation Popover";
    public popoverMessage:string="Do you want to delete?";
    public confirmClicked:boolean=false;
    public cancelClicked:boolean=false;  
    parameter:{}
    constructor(private service:ProductService,private activatedRoute: ActivatedRoute){
        
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            this.parameter=params})
            console.log(this.parameter["showId"]);
            this.service.getAllData().subscribe((data:Product[])=>this.products=data);
            
    }
   
    deleteProduct(productId):any{
        alert("deleting "+productId);
        this.service.deleteProduct(productId).subscribe((data)=>console.log(data));
        location.reload();
    } 

    modifyProduct(pro:any):any{
        alert("bye"+pro.productId);
        pro.popup=false;
        this.service.modifyProduct(pro).subscribe((data)=>console.log(data));
        //alert("Product modified");
        //location.reload();
    }

    updateProduct(pro:any):any{
        alert("update"+pro.productId);
        pro.popup=true;
    }

    
     myFunc(){
        var inputValue = (<HTMLSelectElement>document.getElementById('iselect')).value;
         if(inputValue=="Product Cost"){
         this.sortByCost();
         }
         else if(inputValue=="Product Quantity"){
         this.sortByQuantity();
         }
         else
         this.sortByRating();
     }
    
    
    
    costSortRev:boolean=true;
    costSort:boolean;
    sortByCost(){
        this.costSort=true;
        
        this.products.sort(
            (val1, val2)=>
            val1.price-val2.price  
        );
        this.costSortRev=!this.costSortRev;
        if(this.costSortRev){
            this.products.reverse();
        }
    }
    QuanSortRev:boolean=true;
    QuanSort:boolean;
    sortByQuantity(){
        this.QuanSort=true;
        this.products.sort(
            (val1, val2)=>
            val1.quantity-val2.quantity  
        );
        this.QuanSortRev=!this.QuanSortRev;
        if(this.QuanSortRev){
            this.products.reverse();
        }
    }
    RatSortRev:boolean=true;
    RatSort:boolean;
    sortByRating(){
        this.costSort=true;
        
        this.products.sort(
            (val1, val2)=>
            val1.ratings-val2.ratings  
        );
        this.costSortRev=!this.costSortRev;
        if(this.costSortRev){
            this.products.reverse();
        }
    }
    

    buttonFlag:boolean=false;
    enableButton(){
        this.buttonFlag=!this.costValid&&!this.quantityValid&&!this.ratingValid;
    }

    

    costValid:boolean=true;
    validateCost(){
        if(this.model.price>999999){
            this.costValid=true;
        }
        else if(this.model.price<1){
            this.costValid=true;
        }else{
            this.costValid=false;
        }
    }

    quantityValid:boolean=true;
    validateQuantity(){
        if(this.model.quantity>999){
            this.quantityValid=true;
        }
        else if(this.model.quantity<1){
            this.quantityValid=true;
        }else{
            this.quantityValid=false;
        }
    }

    ratingValid:boolean=true;
    validateRating(){
        if(this.model.ratings>5){
            this.ratingValid=true;
        }
        else if(this.model.ratings<1){
            this.ratingValid=true;
        }else{
            this.ratingValid=false;  
        }
    }
    

}