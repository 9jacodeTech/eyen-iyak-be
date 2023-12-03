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
import { AboutContentUseCase } from './about-content';
import { AboutContentDataGateway } from 'data-gateway/about-content-data-gateway';
import { TeamMembersUseCase } from './team-members';
import { TeamMembersDataGateway } from 'data-gateway/team-member-data-gateway';
import { BrandStoryUseCase } from './brand-story';
import { BrandStoryDataGateway } from 'data-gateway/brand-story-data-gateway';
import { SearchUsecase } from './search';
import { SubProgramUsecase } from './sub-program';
import { SubProgramsDataGateway } from 'data-gateway/sub-program-data-gateway';
import { FooterUsecase } from './footer';
import { FooterDataGateway } from 'data-gateway/footer-data-gateway';
import { SupportUseCase } from './support';
import { SupportDataGateway } from 'data-gateway/support-data-gateway';

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

export const aboutContentUsecase = new AboutContentUseCase(
  new AboutContentDataGateway(fileService)
);

export const teamMembersUsecase = new TeamMembersUseCase(
  new TeamMembersDataGateway(fileService)
);

export const brandStoryUsecase = new BrandStoryUseCase(
  new BrandStoryDataGateway(fileService)
);

export const searchUsecase = new SearchUsecase(
  new NewsDataGateway(fileService),
  new ProgramDataGateway(fileService),
  new ProjectDataGateway(fileService)
);

export const subProgramsUsecase = new SubProgramUsecase(
  new SubProgramsDataGateway(fileService)
);

export const footerUsecase = new FooterUsecase(
  new FooterDataGateway(fileService)
);

export const supportUsecase = new SupportUseCase(
  new SupportDataGateway(fileService)
);

export * from './interfaces';
