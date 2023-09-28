import type {
  HeroSectionDetail,
  HeroSectionDetailInput,
  NewsDetail,
  NewsDetailInput,
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

export interface IHeroSectionDataGateway {
  fetch: () => Promise<HeroSectionDetail[]>;
  create: (data: HeroSectionDetailInput) => Promise<HeroSectionDetail>;
  update: (
    id: string,
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
