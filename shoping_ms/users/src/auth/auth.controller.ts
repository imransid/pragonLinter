import { Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";


@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService){
    }

    @Post('signup')
    signup(){
        return({
            'msg' : 'I m Sign Up Controller'
        })
    }

    @Post('signin')
    signin(){
        return({
            'msg' : 'I m Sign In  Controller'
        })
    }

}