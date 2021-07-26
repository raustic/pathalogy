import { Repository } from "typeorm";
import { user } from "./user.entity";
export declare class userService {
    private Repository;
    constructor(Repository: Repository<user>);
}
