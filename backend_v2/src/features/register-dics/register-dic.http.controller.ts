import { Body, Controller, Post } from '@nestjs/common';
import { RegisterDicUseCase } from './register-dic.use-case';
import { RegisterDic } from './register-dic.dto';

@Controller('')
export class RegisterDicHttpController {
  constructor(private readonly registerDogUseCase: RegisterDicUseCase) {}

  @Post('register-dic')
<<<<<<< Updated upstream
  async execute(@Body() registerdogDto: RegisterDic) {
=======
  async execute(@Body() registerdogDto: RegisterDic): Promise<void> {
>>>>>>> Stashed changes
    await this.registerDogUseCase.execute(registerdogDto);
  }
}
