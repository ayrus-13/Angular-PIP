import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {ProductComponent} from './app.addproduct';
import {FormsModule}      from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'; 
import {ShowComponent}    from './app.showcomponent';
import {Routes,RouterModule}  from '@angular/router'; 
import { NgxPaginationModule } from 'ngx-pagination';
import { ModifyComponent } from './app.modifyproduct';
import {ConfirmationPopoverModule} from 'angular-confirmation-popover';

const myroute:Routes=[
    {path:'show',component:ShowComponent,pathMatch: 'full'},
    {path:'add',component:ProductComponent},
    {path:'modify',component:ModifyComponent}
]


@NgModule({
    imports: [
        BrowserModule,FormsModule,HttpClientModule,NgxPaginationModule,ConfirmationPopoverModule.forRoot({
            confirmButtonType: 'danger'
        }),
        RouterModule.forRoot(myroute)
        
    ],
    declarations: [
        AppComponent,ProductComponent,ShowComponent,ModifyComponent,
		],
    providers: [ ],
    bootstrap: [AppComponent]
})

export class AppModule { }