import { Controller, Post, Req, Res, Get,HttpStatus } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { ApiCreatedResponse,ApiForbiddenResponse } from '@nestjs/swagger';
import { Auth } from "./schemas/auth.schema";

@Controller('auth')
export class AuthController{
    constructor(private authService: AuthService){}
    @Get('users')
    async getAllUsers(): Promise<Auth[]>{
        return this.authService.findAll();
    }

    @Post('register')
    @ApiCreatedResponse({ description: 'The record has been successfully created.'})
    @ApiForbiddenResponse({ description: 'Forbidden.'})
    async createUser(@Req() req: Request, @Res() res: Response){
        const user = this.authService.registerUser(req,res)
        // return res.status(HttpStatus.CREATED).json({ message: 'User created successfully', user });
    }
}