import { Injectable,Req,Res,HttpStatus } from "@nestjs/common";

@Injectable({})
export class AuthService{
    signup(@Req() req: Request, @Res() res: Response){
        console.log(req.body)
        return {msg: "Hello I HAve Signed Up"}
    }

    signin(@Req() req: Request, @Res() res: Response){
        return {msg: "Hello I Have Signed In"}
    }
}