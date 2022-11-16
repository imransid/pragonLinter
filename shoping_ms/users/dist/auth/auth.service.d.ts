import { PrismaService } from "src/prisma/prisma.service";
import { AuthDto } from "./dto";
export declare class AuthService {
    private prisma;
    constructor(prisma: PrismaService);
    signUp(dto: AuthDto): Promise<{
        msg: string;
        data: import(".prisma/client").User;
    }>;
    signIn(): {
        msg: string;
    };
}
