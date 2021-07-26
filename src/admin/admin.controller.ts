import { Body, Param, Post } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common';
import { Controller, Get } from '@nestjs/common';
import { get } from 'http';
import { Entity } from 'typeorm';
import { AdminService } from './admin/admin.service';


@Controller('admin')
export class AdminController {
    constructor(private _adminService:AdminService){

    }

    // //Lender Request Start Here
    
    // // @Get('lenders/:id')
    // // lenders(@Param('id')id:number):Promise<lender[]>{
        
    // //     return this._adminService.GetLenders(id);
    // // }
    // // @Get('DeactivateLenders')
    // // async DeactivateLenders():Promise<any>{
    // //     return this.DeactivateLenders();
    // // } 
    // // @Post('createlender')
    
    // // CreateLender(@Body()entity:lender):Promise<any>
    // // {
    // //     entity.CreatedAt=new Date();
    // //     entity.isActive=1;
    // //     var msg=this._adminService.CreateLender(entity);
    // //     return msg;  
    // // }
    // // @Post('updatelender')
    // // UpdateLender(@Body()entity:lender):Promise<any>
    // // {

    // //     var  msg=this._adminService.UpdateLender(entity);
    // //     return msg;
    // // }

    // // @Post('DeleteUser')
    // DeleteUser(@Body()entity:CommonEntityModel)
    // {
    //     var msg=this._adminService.DeleteLender(entity);
    //     return msg;
    // }

    // //Lender Request Ends Here
    
    
    // //borrowers Request Start Here
    
    // @Get('borrowers/:id')
    // borrowers(@Param('id')id:number):Promise<borrower[]>{
    //     return this._adminService.GetBorrowers(id);
    // }
    
    // @Post('createborrower')
    
    // CreateBorrower(@Body()entity:borrower):Promise<any>
    // {
    //     entity.CreatedAt=new Date();
    //     entity.IsActive=1;
    //     var msg=this._adminService.CreateBorrower(entity);
    //     return msg;  
    // }
    // @Post('updateborrower')
    // UpdateBorrower(@Body()entity:borrower):Promise<any>
    // {
    //     var  msg=this._adminService.UpdateBorrower(entity);
    //     return msg;
    // }

    // @Post('Deleteborrower')
    // DeleteBorrower(@Body()entity:CommonEntityModel)
    // {
    //     var msg=this._adminService.DeleteBorrower(entity);
    //     return msg;
    // }

    // //Lender Request Ends Here


    // //Collector API Strat Here
    
    // @Get('collectors/:id')
    // collectors(@Param('id')id:number):Promise<collector[]>{
    //     return this._adminService.GetCollectors(id);
    // }
    
    // @Post('createcollector')
    
    // CreateCollector(@Body()entity:collector):Promise<any>
    // {
    //     entity.CreatedAt=new Date();
    //     entity.IsActive=1;
    //     var msg=this._adminService.CreateCollector(entity);
    //     return msg;  
    // }
    // @Post('updatecollector')
    // UpdateCollector(@Body()entity:collector):Promise<any>
    // {
    //     var  msg=this._adminService.UpdateCollector(entity);
    //     return msg;
    // }

    // @Post('DeleteCollector')
    // DeleteCollector(@Body()entity:CommonEntityModel)
    // {
    //     var msg=this._adminService.DeleteCollector(entity);
    //     return msg;
    // }
    // //Collector API Ends Here

    // //Transaction API Start Here
    // // @Get('lenderTransactions/:id')
    // // GetLenderTransactions(@Param('id') id:number):Promise<lendertrans[]>
    // // {
    // //     return this._transService.GetLenderTransactions(id);
    // // }
    // // @Post('MakeLenderTrans')
    // // MakeLenderTransactions(@Body()entity:lendertrans):Promise<any>
    // // {
    // //     var _res=this._transService.CreateLenderTrans(entity);
    // //     return _res;
    // // }
    // // @Post('DeleteLenderTrans')
    // // DeleteLenderTrans(@Body()entity:CommonEntityModel)
    // // {
    // //     var  _res=this._transService.DeleteLenderTrans(entity);
    // //     return _res;
    // // }
    // @Get('borrowerDataTras')
    // getdate()
    // {
    //     return this._transService.GetPendingPayment(2);
    // }

    
    // @Post('borrowerTransactions')
    // GetborrowerTransactions(@Body()entity:borrowerTransQueryModel):Promise<borrowertrans[]>
    // {
    //     return this._transService.GetBorrowerTransactions(entity);
    // }
    // @Post('GiveborrowerTrans')
    // MakeborrowerTransactions(@Body()entity:borrowertrans):Promise<any>
    // {
    //     var _res=this._transService.CreateBorrowerTrans(entity);
    //     return _res;
    // }
    // @Post('ReceiveborrowerTrans')
    // ReceiveBorrowerTrans(@Body()entity:borrowerTransReturn)
    // {
    //     var _res=this._transService.CreateReturnBorrowerTrans(entity);
    //     return _res;
    // }
    // @Post('DeleteBorrowerTrans')
    // DeleteborrowerTrans(@Body()entity:CommonEntityModel)
    // {
    //     var  _res=this._transService.DeleteBorrowerTrans(entity);
    //     return _res;
    // }
    // // @Get('BusinessFlow')
    // // GetBusinessFlowStatus():Promise<any>
    // // {
    // //     var  _res=this._transService.GetTransactionTotal();
    // //     return _res;
    // // }    
    
    // //Trsnaction API Ends Here

    // //Active-Deactivate Borrower ,Lender,and Collector 
    // @Post('ActiveDeactivateBorrower')
    // ActiveDeactivateBorrower(@Body()cto:CommonEntityModel):Promise<any>
    // {
    //     var res=this._adminService.ActiveDeactivateBorrower(cto);
    //     return res;
    // }
    // @Post('ActiveDeactiveLender')
    // ActiveDeactiveLender(@Body()cto:CommonEntityModel):Promise<any>
    // {
    //     var res=this._adminService.ActiveDeactivateLender(cto);
    //     return res;
    // }
    // @Post('ActiveDeactiveCollector')
    // ActiveDeactiveCollector(@Body()cto:CommonEntityModel)
    // {
    //     var res=this._adminService.ActiveDeactivateCollector(cto);
    //     return res;
    // }

    // //Treasueres Profile Created
    // @Get('GetTreasureres/:id')
    // async GetTreasureres(@Param('id')id:number):Promise<any>
    // {
    //     return this._adminService.GetTreasuerers(id);
    // }
    
    // @Post('CreateTreasurer')
    // async CreateTreasurer(@Body()dto:Treasurer):Promise<any>
    // {
    //     dto.CreatedAt=new Date();
    //     dto.IsActive=1;
    //  return this._adminService.CreateTreasurer(dto);
    // }
    // @Post('UpdateTreasurer')
    // async UpdateTreasurer(@Body()dto:Treasurer):Promise<any>
    // {
    //     return this._adminService.UpdateTreasures(dto);
    // }
    // @Post('ActiveNDeactiveTreasurer')
    // async ActiveDeactiveTreasurer(@Body()dto:CommonEntityModel):Promise<any>
    // {
    //     return this._adminService.ActivateNDeactivateTeasures(dto);
    // }
    // @Get('TodayPendingDetails')
    // async TodaypendingDetails()
    // {
    //    return this._transService.TodayFinanceDetails();
    // }
    // @Post('AsignLead')
    // async AssignLeadToCollector(@Body()model:collectorlead)
    // {
    //     return this._transService.assignLeadtoCollector(model);
        
    // }


    

    // @Post('TodayPendingTransaction')
    // async TodayPendingTransaction(@Param('id')id:number):Promise<any>
    // {
    //     return this._transService.GetTodayPendingCollection(id);
    // }
    // @Post('BorrowerTransactionHistory')
    // async BorrowerTransactionHistory(@Body()dto:TransactionStatusModel):Promise<any>
    // {
    //     return this._transService.GetBorrowerTransactionHistory(dto);
    // }
    
}
