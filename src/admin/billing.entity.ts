import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class billing{
@PrimaryGeneratedColumn()
id:number
@Column()
AdvanceDepositAmt:number
@Column()
doctorVisitDeposit:number
@Column()
advancedDepositDate:Date
@Column()
PathologyTestDepositAmt:number
@Column()
hospitalDepositAmt:number
@Column()
allDepositDateAmt:number
@Column()
isActive:number
@Column({type:'date',nullable:true,default:null})
CreatedAt:Date
@Column()
CreatedBy:number
@Column({type:'date',nullable:true,default:null})
UpdatedAt:Date
@Column()
UpdatedBy:number
}