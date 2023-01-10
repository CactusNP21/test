import { PartialType } from '@nestjs/mapped-types';
import { CreateSmthDto } from './create-smth.dto';

export class UpdateSmthDto extends PartialType(CreateSmthDto) {}
