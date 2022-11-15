import { PrismaService } from "src/prisma/prisma.service";
export declare class AuthService {
    private prisma;
    constructor(prisma: PrismaService);
    signUp(): {
        msg: string;
    };
    signIn(): {
        msg: string;
    };
}
