import { PrismaService } from "src/prisma/prisma.service";
import { AuthDto, AuthSignInDto } from "./dto";
export declare class AuthService {
    private prisma;
    constructor(prisma: PrismaService);
    signUp(dto: AuthDto): Promise<{
        status: number;
        message: string;
        data: import(".prisma/client").User;
    }>;
    signIn(dto: AuthSignInDto): Promise<{
        status: number;
        msg: string;
        data: import(".prisma/client").User;
    }>;
}
