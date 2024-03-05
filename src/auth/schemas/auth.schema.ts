import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export enum Role{
    ADMIN = 'Admin',
    SELLER = 'Seller',
    BUYER = 'Buyer'
}

@Schema({
    timestamps: true
})
export class Auth{
    @Prop()
    fullname: string

    @Prop()
    email: string

    @Prop()
    password: string

    @Prop()
    role: Role
}

export const AuthSchema = SchemaFactory.createForClass(Auth);