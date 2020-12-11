import {Injectable, Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
   providedIn:'root' 
})

export class ProductService{
    constructor(private myhttp:HttpClient){}

    getAllData(){
       return this.myhttp.get("http://localhost:9088/showproducts");
    }

    addProduct(data:any){
       let form = new FormData();
       form.append("productId",data.productId);
       form.append("productName",data.productName);
       form.append("price",data.price);
       form.append("productDesc",data.productDesc);
       form.append("quantity",data.quantity);
       form.append("ratings",data.ratings);
       return this.myhttp.post("http://localhost:9088/add",form);
    }

    modifyProduct(data:any){
      let form = new FormData();
      form.append("productId",data.productId);
      //alert("hi"+ data.productId);
      form.append("productName",data.productName);
      form.append("price",data.price);
      form.append("productDesc",data.productDesc);
      form.append("quantity",data.quantity);
      form.append("ratings",data.ratings);
      return this.myhttp.post("http://localhost:9088/modifyproduct",form);
   }
    deleteProduct(productId:number){
       return this.myhttp.delete("http://localhost:9088/deleteproduct?productId="+productId);
    }
}