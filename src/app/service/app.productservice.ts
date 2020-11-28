import {Injectable, Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
   providedIn:'root' 
})

export class ProductService{
    constructor(private myhttp:HttpClient){}

    getAllData(){
       return this.myhttp.get("http://localhost:9088/product/getall?ename=asdasf");
    }

    addProduct(data:any){
       let form = new FormData();
       form.append("prodId",data.prodId);
       form.append("prodName",data.prodName);
       form.append("prodCost",data.prodCost);
       form.append("prodDescription",data.prodDescription);
       form.append("prodQuantity",data.prodQuantity);
       form.append("prodRating",data.prodRating);
       return this.myhttp.post("http://localhost:9088/product/add",form);
    }

    modifyProduct(data:any){
      let form = new FormData();
      form.append("prodId",data.prodId);
      form.append("prodName",data.prodName);
      form.append("prodCost",data.prodCost);
      form.append("prodDescription",data.prodDescription);
      form.append("prodQuantity",data.prodQuantity);
      form.append("prodRating",data.prodRating);
      return this.myhttp.post("http://localhost:9088/product/modify",form);
   }
    deleteProduct(data:any){
       console.log("deleting");
       console.log(data);
       return this.myhttp.delete("http://localhost:9088/product/delete?prodId="+data);
    }
}