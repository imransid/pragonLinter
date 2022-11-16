import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signUp(dto: AuthDto): Promise<{
        msg: string;
        data: import(".prisma/client").User;
    }>;
    signIn(): {
        msg: string;
    };
}
