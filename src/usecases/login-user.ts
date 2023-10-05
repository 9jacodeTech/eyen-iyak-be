import { InvalidToken } from 'utils/errors';
import { type ITokenManager } from './interfaces';

export class LoginUserUsecase {
  constructor(
    private readonly tokenManager: ITokenManager,
    private readonly jwtSignPrivateKey: string
  ) {}

  public async execute(socialToken: string, adminEmails: Set<string>) {
    const tokenData = await this.verifyToken(socialToken);

    if (!adminEmails.has(tokenData.email)) {
      throw new InvalidToken('This email is not allowed');
    }

    const appTokenData = {
      email: tokenData.email,
    };
    const token = await this.tokenManager.generateToken(
      this.jwtSignPrivateKey,
      appTokenData
    );

    return { user: appTokenData, token };
  }

  private async verifyToken(socialToken: string) {
    const tokenData = await this.tokenManager.verifySocialLogin(socialToken);

    const tokenIsFromGoogle =
      tokenData.iss === 'accounts.google.com' ||
      tokenData.iss === 'https://accounts.google.com';

    if (!tokenIsFromGoogle) throw new InvalidToken();

    if (!tokenData.emailIsVerified)
      throw new InvalidToken('Email is not verified');
    return tokenData;
  }
}
