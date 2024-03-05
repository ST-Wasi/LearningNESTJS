import { Injectable } from "@nestjs/common";

@Injectable({})
export class AuthService{
    signup(){
        return {msg: "Hello I HAve Signed Up"}
    }

    signin(){
        return {msg: "Hello I Have Signed In"}
    }
}