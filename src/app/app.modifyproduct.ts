import { Component,OnInit,OnChanges,OnDestroy} from '@angular/core';
import {ProductService} from './service/app.productservice';
import {Product} from './_model/app.productmodel';
@Component({
    selector : 'modify',
    templateUrl : 'app.modifyproduct.html'
})


export class ModifyComponent implements OnInit,OnChanges{
   model:any={};
    ngOnInit(): void {
        console.log("ngOnInit method");
        this.service.getAllData().subscribe((data:Product[])=>this.products=data);
    }
    ngOnChanges(): void {
        console.log("In changes");
    }
    ngOndestroy(){
        console.log("In destroy");
    }
    constructor(private service:ProductService){
        console.log("In in constructor")
    }
    products:any[]=[
    ];
    /*
    update:boolean=false;
    prodId:number;
    prodName:string;
    prodPrice:number;*/
    
   
    modifyProduct():any{
        console.log(this.model);
        this.service.addProduct(this.model).subscribe((data)=>console.log(data));
        alert("Product modified");
        location.reload();
    }
    descriptionValid:boolean=true;
    validateDesc(){
        if(this.model.prodDescription.length>5){
            this.descriptionValid=false;
        }
            else
            {
                this.descriptionValid=true;
            }
        
    }

    nameValid:boolean=true;
    validateName(){
        if(this.model.prodName.length>5){
            this.nameValid=false;
        }
            else
            {
                this.nameValid=true;
            }
        
    }

    buttonFlag:boolean=false;
    enableButton(){
        this.buttonFlag=!this.idValid&&!this.costValid&&!this.quantityValid&&!this.ratingValid&&!this.nameValid&&!this.descriptionValid;
    }

    idValid:boolean=true;
    validateId(){
        if(this.model.prodId>9999){
            this.idValid=true;
        }
        else if(this.model.prodId<1){
            this.idValid=true;
        }else{
            this.idValid=false;
        }
    }

    costValid:boolean=true;
    validateCost(){
        if(this.model.prodCost>999999){
            this.costValid=true;
        }
        else if(this.model.prodCost<1){
            this.costValid=true;
        }else{
            this.costValid=false;
        }
    }

    quantityValid:boolean=true;
    validateQuantity(){
        if(this.model.prodQuantity>999){
            this.quantityValid=true;
        }
        else if(this.model.prodQuantity<1){
            this.quantityValid=true;
        }else{
            this.quantityValid=false;
        }
    }

    ratingValid:boolean=true;
    validateRating(){
        if(this.model.prodRating>5){
            this.ratingValid=true;
        }
        else if(this.model.prodRating<1){
            this.ratingValid=true;
        }else{
            this.ratingValid=false;  
        }
    }
    
    /*
    updateProduct(prodId,prodName,prodPrice):any{
        alert("updating "+prodId);
        for(var i=0;i<this.products.length;i++){
            alert(prodName+prodPrice);
            if(this.products[i].prodId==prodId){
                this.products.splice(i,1);
                this.products[i].prodName=prodName;
                this.products[i].prodPrice=prodPrice;
            }
            
        }
        
    }
    deleteProduct(prodId):any{
        alert("deleting "+prodId);
        for(var i=0;i<this.products.length;i++){
            if(this.products[i].prodId==prodId){
                this.products.splice(i,1);
            }
        }
    }
    toggleStatus(prodId){
        for(var i=0;i<this.products.length;i++){
            if(this.products[i].prodId==prodId){
                this.products[i].update = true;
            }
        }
    }*/
}