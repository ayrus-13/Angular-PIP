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
    p: number = 1;  
    parameter:{}
    constructor(private service:ProductService,private activatedRoute: ActivatedRoute){
        console.log("NIn gghc in constructor")
        
    }
    ngOnInit(): void {
        this.activatedRoute.params.subscribe(params => {
            this.parameter=params})
            console.log(this.parameter["showId"]);
            this.service.getAllData().subscribe((data:Product[])=>this.products=data.filter(x=>x.prodId==this.parameter["showId"]));
            console.log(this.products.length)
    }
    getProducts(){
        return this.products.length;
    } 
    deleteProduct(prodId):any{
        alert("deleting "+prodId);
        this.service.deleteProduct(prodId).subscribe((data)=>console.log(data));
        location.reload();
    } 
    
    
    IdSortRev:boolean=true;
    IdSort:boolean;
    sortById(){
        this.IdSort=true;
        this.products.sort(
            (val1, val2)=>
            val1.prodId-val2.prodId  
        );
        this.IdSortRev=!this.IdSortRev;
        if(this.IdSortRev){
            this.products.reverse();
        }
    }
    costSortRev:boolean=true;
    costSort:boolean;
    sortByCost(){
        this.costSort=true;
        
        this.products.sort(
            (val1, val2)=>
            val1.prodCost-val2.prodCost  
        );
        this.costSortRev=!this.costSortRev;
        if(this.costSortRev){
            this.products.reverse();
        }
    }
    QuanSortRev:boolean=true;
    QuanSort:boolean;
    sortByQuantity(){
        this.IdSort=true;
        this.products.sort(
            (val1, val2)=>
            val1.prodQuantity-val2.prodQuantity  
        );
        this.IdSortRev=!this.IdSortRev;
        if(this.IdSortRev){
            this.products.reverse();
        }
    }
    RatSortRev:boolean=true;
    RatSort:boolean;
    sortByRating(){
        this.costSort=true;
        
        this.products.sort(
            (val1, val2)=>
            val1.prodRating-val2.prodRating  
        );
        this.costSortRev=!this.costSortRev;
        if(this.costSortRev){
            this.products.reverse();
        }
    }
    

}