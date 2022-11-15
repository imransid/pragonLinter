import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signUp(dto: AuthDto): {
        msg: string;
    };
    signIn(): {
        msg: string;
    };
}
