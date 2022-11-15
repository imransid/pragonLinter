// service handle all business logic

import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";


@Injectable({})
export class AuthService {
    constructor(private prisma: PrismaService){
        
    }

    signUp(){
        return {
            msg : 'I am signUp'
        }
    }
    signIn(){
        return {
            msg : 'I am signIn'
        }
    }

}