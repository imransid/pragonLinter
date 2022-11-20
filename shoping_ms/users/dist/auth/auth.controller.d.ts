import { AuthService } from "./auth.service";
import { AuthDto, AuthSignInDto } from "./dto";
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
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
