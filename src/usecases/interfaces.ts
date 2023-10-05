import { ProjectDetail, ProjectDetailInput } from "entities";
import { heroSectionDetail, heroSectionDetailInput } from "entities";

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
export interface IHeroSectionDataGateway {
  fetch: () => Promise<heroSectionDetail[]>;
  create: (data: heroSectionDetailInput) => Promise<heroSectionDetail>;
  update: (id: string, data: heroSectionDetailInput) => Promise<heroSectionDetail>;
  delete: (id:string) => Promise<any>;
}
