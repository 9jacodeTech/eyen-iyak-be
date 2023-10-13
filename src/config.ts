export const AWS_REGION = process.env.AWS_REGION || '';

export const AWS_ACCESS_ID = process.env.AWS_ACCESS_ID || '';
export const AWS_SECRET = process.env.AWS_SECRET || '';
export const JWT_SECRET = process.env.JWT_SECRET || '';
const ALLOWED_ADMIN_EMAILS_STR = process.env.ALLOWED_ADMIN_EMAILS || '';

export const ALLOWED_ADMIN_EMAILS = new Set(
  ALLOWED_ADMIN_EMAILS_STR.split(',')
);
export const PORT = process.env.PORT || 5143;

const FEATURE_TOGGLE_ENV = process.env.FEATURE_TOGGLE || '';

export const FEATURE_TOGGLE = new Set(
  FEATURE_TOGGLE_ENV.toLowerCase()
    .split(',')
    .map((text) => text.trim())
);

export const PROJECT_FILE_ENV = process.env.PROJECT_FILE || 'projects.json';

export const HERO_SECTION_FILE_ENV =
  process.env.HERO_SECTION_FILE || 'hero-section.json';

export const NEWS_FILE_ENV = process.env.NEWS_FILE || 'news.json';

export const PROGRAM_FILE_ENV = process.env.PROGRAM_FILE || 'programs.json';

export const GALLERY_FILE_ENV = process.env.GALLERY_FILE || 'gallery.json';

export const ABOUT_PAGE_FILE_ENV = process.env.ABOUT_PAGE_FILE || 'about.json';
