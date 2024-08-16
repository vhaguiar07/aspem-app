import { Test, TestingModule } from '@nestjs/testing';
import { AutarquiasService } from './autarquias.service';

describe('AutarquiasService', () => {
  let service: AutarquiasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AutarquiasService],
    }).compile();

    service = module.get<AutarquiasService>(AutarquiasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
