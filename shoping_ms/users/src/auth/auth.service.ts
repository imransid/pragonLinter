// service handle all business logic

import { ForbiddenException, Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthDto, AuthSignInDto } from "./dto";
import * as argon from 'argon2'
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";

@Injectable({})
export class AuthService {
    constructor(private prisma: PrismaService){
        
    }

    async signUp(dto: AuthDto){

        try{
            //generate hash pasword
            const hash = await argon.hash(dto.password);

            // save user in the DB
            const user = await this.prisma.user.create({
            data: {
                email: dto.email,
                hash,
                firstName : dto.firstName,
                lastName : dto.lastName,
                UsersRole: {
                    create: {
                    }
                }
            }
            });

            delete user.hash;

            return {
                status: 200,
                message : 'Create User Successfully.',
                data : user
            }
        }catch(error){

            if(
                error instanceof
                PrismaClientKnownRequestError
                ){
                    if(error.code === 'P2002'){
                        throw new ForbiddenException('Credential already taken');
                    }
                }
                throw error;
        }
    }
    signIn(dto: AuthSignInDto){

        // find user by email

        // if user does not exits throw exception

        // compare password

        // if password incorrect throw exception

    
        return {
            msg : 'I am signIn'
        }
    }

}