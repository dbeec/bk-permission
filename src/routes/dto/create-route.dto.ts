import { IsNotEmpty, IsString, Matches } from 'class-validator';

export class CreateRouteDto {
  @IsString()
  @IsNotEmpty()
  module: string;

  @IsString()
  @IsNotEmpty()
  submodule: string;

  @IsString()
  @IsNotEmpty()
  routeOption: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^\/[a-zA-Z0-9-_\/]*$/, {
    message: 'path must be a valid URL path',
  })
  path: string;
}
