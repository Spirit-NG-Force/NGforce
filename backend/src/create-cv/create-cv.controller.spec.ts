import { Test, TestingModule } from '@nestjs/testing';
import { CreateCvController } from './create-cv.controller';
import { CreateCvService } from './create-cv.service';

describe('CreateCvController', () => {
  let controller: CreateCvController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreateCvController],
      providers: [CreateCvService],
    }).compile();

    controller = module.get<CreateCvController>(CreateCvController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
