import { Test, TestingModule } from '@nestjs/testing';
import { AutarquiasController } from './autarquias.controller';

describe('AutarquiasController', () => {
  let controller: AutarquiasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AutarquiasController],
    }).compile();

    controller = module.get<AutarquiasController>(AutarquiasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
