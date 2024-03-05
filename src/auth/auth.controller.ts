import { Controller, Post, Req, Res } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController{
    constructor(private authService: AuthService){}
    @Post('signup')
    signup(@Req() request: Request, @Res() response: Response) {
        return this.authService.signup(request,response);
    }
    @Post('signin')
    signin(@Req() request: Request, @Res() response: Response) {
        return this.authService.signin(request,response);
    }
}