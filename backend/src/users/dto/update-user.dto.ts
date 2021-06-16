import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    name? : string;
    lastname? : string;
    email? : string;
    password? : string;
    status? : string;
}
