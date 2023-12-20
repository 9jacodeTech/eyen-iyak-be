import { type ValidationError } from 'joi';

export class CustomError extends Error {}
export class NotFound extends CustomError {
  message = 'Resource not found';
}

export class Unauthorized extends CustomError {
  message = 'Not authorized';
}

export class DataValidationError extends CustomError {
  public readonly errors: object;
  constructor(error: ValidationError) {
    super('');
    const errorObject: Record<string, string[]> = {};
    for (const detail of error.details) {
      const key = detail.context?.key as string;
      const message = detail.message;
      const keyErrors: string[] = errorObject[key] || [];
      keyErrors.push(message);
      errorObject[key] = keyErrors;
    }

    this.errors = errorObject;
  }
}

export class InvalidToken extends Unauthorized {
  message = 'The token you provided is invalid';
}

export class InvalidAuthorizationHeaders extends Unauthorized {
  message = 'The headers you inputed are malformed invalid';
}

export class HeroNotFound extends NotFound {
  message = 'Hero Section Not Found';
}
export class NewsNotFound extends NotFound {
  message: 'News Not Found';
}

export class GalleryNotFound extends NotFound {
  message: 'Gallery Not Found';
}

export class AboutPageNotFound extends NotFound {
  message: 'About Page Not Found';
}

export class PartnerNotFound extends NotFound {
  message: 'Partner Not Found';
}

export class TeamMemberNotFound extends NotFound {
  message: 'Team Member Not Found';
}

export class ProgramNotFound extends NotFound {
  message: 'Program Not Found';
}

export class SupportNotFound extends NotFound {
  name: 'support_not_found';
  message: 'Support Not Found';
}
