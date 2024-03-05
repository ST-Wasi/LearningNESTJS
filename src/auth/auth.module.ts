
import { Module} from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { AuthSchema } from './schemas/auth.schema';
import { MongooseModule } from "@nestjs/mongoose";

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Auth', schema: AuthSchema }])],
    controllers: [AuthController],
    providers: [AuthService]
})
export class AuthModule {}