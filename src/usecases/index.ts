import { LoginUserUsecase } from './login-user';
import { tokenManager } from 'clients';
import { AuthMiddlewareUsecase } from './auth-middleware';
import { GenerateUploadURLUsecase } from './geenrate-upload-url';
import { JWT_SECRET } from 'config';
import { FileServiceFactory } from 'services';
import { ProjectDataGateway } from 'data-gateway/project-data-gateway';
import { ProjectUsecase } from './project';
import { HeroSectionUseCase } from './hero-section';
import { HeroSectionDataGateway } from 'data-gateway/hero-section-data-gateway';
import { NewsUseCase } from './news';
import { NewsDataGateway } from 'data-gateway/news-data-gateway';
import { ProgramUsecase } from './program';
import { ProgramDataGateway } from 'data-gateway/program-data-gateway';

export const loginUserUsecase = new LoginUserUsecase(tokenManager, JWT_SECRET);

export const authMiddlewareUsecase = new AuthMiddlewareUsecase(
  tokenManager,
  JWT_SECRET
);

const fileService = FileServiceFactory.create();

export const generateUploadURLUsecase = new GenerateUploadURLUsecase(
  fileService
);

export const projectUsecase = new ProjectUsecase(
  new ProjectDataGateway(fileService)
);

export const heroSectionUsecase = new HeroSectionUseCase(
  new HeroSectionDataGateway(fileService)
);

export const newsUsecase = new NewsUseCase(new NewsDataGateway(fileService));

export const programUsecase = new ProgramUsecase(
  new ProgramDataGateway(fileService)
);

export * from './interfaces';
