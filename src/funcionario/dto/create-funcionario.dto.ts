import { MaxLength, MinLength } from 'class-validator';

export class CreateFuncionarioDto {
  name: string;
  @MinLength(8, {
    message: 'This password is too short. Minimal Length is 8.',
  })
  @MaxLength(28, {
    message: 'This password is too long. Maximum Length is 28.',
  })
  password: string;
}
