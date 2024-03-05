import { Injectable,Req,Res,HttpStatus } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import * as mongoose from "mongoose";
import { Auth } from "./schemas/auth.schema";

@Injectable({})
export class AuthService{
    constructor(
        @InjectModel(Auth.name)
        private authModel: mongoose.Model<Auth>
    ) {}
    async findAll(): Promise<Auth[]>{
        const users = await this.authModel.find({});
        return users;
    }

    async registerUser(@Req() req: Request, @Res() res: Response){
        const {fullname,email,password,role}: any = req.body;
        console.log({fullname,email,password,role})
       await this.authModel.create({fullname,email,password})
    //    return res.status(HttpStatus.CREATED).json({ message: 'User created successfully' });
    }
}