import{Entity,Column, PrimaryGeneratedColumn} from 'typeorm'
@Entity()
export class diagnosis{
@PrimaryGeneratedColumn()
id:number
@Column()
examine:string
@Column()
IsUltrasoundTest:boolean
@Column()
isXrayTest:boolean
@Column()
isPathologyTest:boolean
@Column()
isOtherTest:boolean
@Column()
otherTest:string
@Column()
admitForm:string
@Column()
dischargeForm:string
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