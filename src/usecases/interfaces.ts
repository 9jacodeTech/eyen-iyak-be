import type {
  ProjectDetail,
  ProjectDetailInput,
  GalleryDetail,
  GalleryDetailInput,
  HeroSectionDetail,
  HeroSectionDetailInput,
  NewsDetail,
  NewsDetailInput,
  ProgramDetail,
  ProgramDetailInput,
  AboutDetail,
  AboutDetailInput,
} from 'entities';

interface TokenData {
  email: string;
  emailIsVerified: boolean;
  aud: string;
  iss: string;
}

export interface ITokenManager {
  verifySocialLogin: (token: string) => TokenData | Promise<TokenData>;
  decode: (token: string) => Record<string, string>;
  verifyToken: (secretKey: string, token: string) => object;
  generateToken: (secretKey: string, payload: object) => Promise<string>;
}

export interface IProjectDataGateway {
  fetch: () => Promise<ProjectDetail[]>;
  create: (data: ProjectDetailInput) => Promise<ProjectDetail>;
  update: (id: string, data: ProjectDetailInput) => Promise<ProjectDetail>;
  delete: (id: string) => Promise<void>;
}

export interface IHeroSectionDataGateway {
  fetch: () => Promise<HeroSectionDetail[]>;
  create: (data: HeroSectionDetailInput) => Promise<HeroSectionDetail>;
  update: (
    page: string,
    data: HeroSectionDetailInput
  ) => Promise<HeroSectionDetail>;
  delete: (id: string) => Promise<any>;
}

export interface INewsDataGateway {
  fetch: () => Promise<NewsDetail[]>;
  create: (data: NewsDetailInput) => Promise<NewsDetail>;
  update: (id: string, data: NewsDetailInput) => Promise<NewsDetail>;
  delete: (id: string) => Promise<any>;
}

export interface IProgramDataGateway {
  fetch: () => Promise<ProgramDetail[]>;
  create: (data: ProgramDetailInput) => Promise<ProgramDetail>;
  update: (id: string, data: ProgramDetailInput) => Promise<ProgramDetail>;
  delete: (id: string) => Promise<any>;
}

export interface IGalleryDataGateway {
  fetch: () => Promise<GalleryDetail[]>;
  create: (data: GalleryDetailInput) => Promise<GalleryDetail>;
  update: (id: string, data: GalleryDetailInput) => Promise<GalleryDetail>;
  delete: (id: string) => Promise<any>;
}

export interface IAboutPageDataGateway {
  fetch: () => Promise<AboutDetail[]>;
  create: (data: AboutDetailInput) => Promise<AboutDetail>;
  update: (id: string, data: AboutDetailInput) => Promise<AboutDetail>;
  delete: (id: string) => Promise<any>;
}
