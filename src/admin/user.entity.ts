import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class user{
    @PrimaryGeneratedColumn()
    id:number
    @Column()
    name:string
    @Column()
    mobile:string
    @Column()
    addressline1:string
    @Column()
    addressline2:string
    @Column()
    zip:string
    @Column()
    role:string
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