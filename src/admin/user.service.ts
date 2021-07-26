import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { user } from "./user.entity";

@Injectable()
export class userService{
constructor(@InjectRepository(user)private Repository:Repository<user>){

}
}