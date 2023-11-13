import { LoginUserUsecase } from './login-user';
import { tokenManager } from 'clients';
import { AuthMiddlewareUsecase } from './auth-middleware';
import { GenerateUploadURLUsecase } from './geenrate-upload-url';
import { AWS_CONFIG, JWT_SECRET } from 'config';
import { FileServiceFactory } from 'services';
import { ProjectDataGateway } from 'data-gateway/project-data-gateway';
import { HeroSectionUseCase } from './hero-section';
import { HeroSectionDataGateway } from 'data-gateway/hero-section-data-gateway';
import { NewsUseCase } from './news';
import { NewsDataGateway } from 'data-gateway/news-data-gateway';
import { ProgramUsecase } from './program';
import { ProgramDataGateway } from 'data-gateway/program-data-gateway';
import { GalleryUsecase } from './gallery';
import { GalleryDataGateway } from 'data-gateway/gallery-data-gateway';
import { ProjectUsecase } from './project';
import { AboutPageUsecase } from './about-page';
import { AboutPageDataGateway } from 'data-gateway/about-page-data-gateway';
import { S3Service } from 'services/file-services/s3-service';
import { PartnersUseCase } from './partner';
import { PartnersDataGateway } from 'data-gateway/partners-data-gateway';
import { SearchUsecase } from './search';

export const loginUserUsecase = new LoginUserUsecase(tokenManager, JWT_SECRET);

export const authMiddlewareUsecase = new AuthMiddlewareUsecase(
  tokenManager,
  JWT_SECRET
);

const fileService = FileServiceFactory.create(AWS_CONFIG);

const s3Service = new S3Service(AWS_CONFIG);

export const generateUploadURLUsecase = new GenerateUploadURLUsecase(s3Service);

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

export const galleryUsecase = new GalleryUsecase(
  new GalleryDataGateway(fileService)
);

export const aboutPageUsecase = new AboutPageUsecase(
  new AboutPageDataGateway(fileService)
);

export const partnerUsecase = new PartnersUseCase(
  new PartnersDataGateway(fileService)
);
  
export const searchUsecase = new SearchUsecase(
  new NewsDataGateway(fileService),
  new ProgramDataGateway(fileService),
  new ProjectDataGateway(fileService)
);

export * from './interfaces';
