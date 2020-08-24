import {EntityRepository, Repository} from "typeorm";
import {User} from "../entities/User";

@EntityRepository(User)
export class UserRepository extends Repository<User> {

    findByMail(email: string) {
        const user = this.find({
            email: email
        });

        return (user == undefined) ? false : user[0];
    }

    findAll() {
        return this.find({ select: ["name", "email"] });
    }
}