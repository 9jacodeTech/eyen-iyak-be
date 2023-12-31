export const AWS_REGION = process.env.AWS_REGION || '';

export const AWS_ACCESS_ID = process.env.AWS_ACCESS_ID || '';
export const AWS_SECRET = process.env.AWS_SECRET || '';
export const AWS_BUCKET_NAME = process.env.AWS_BUCKET_NAME || '';

export const AWS_CONFIG = {
  bucketName: AWS_BUCKET_NAME,
  accessKeyID: AWS_ACCESS_ID,
  accessSecret: AWS_SECRET,
  region: AWS_REGION,
};

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

export const PARTNERS_FILE_ENV = process.env.PARTNERS_FILE || 'partners.json';

export const ABOUT_CONTENT_FILE_ENV =
  process.env.ABOUT_CONTENT_FILE || 'about-content.json';

export const TEAM_MEMBER_FILE_ENV =
  process.env.TEAM_MEMBER_FILE || 'team-member.json';

export const BRAND_STORY_FILE_ENV =
  process.env.BRAND_STORY_FILE || 'brand-story.json';

export const EVENTS_FILE_ENV = process.env.EVENTS_FILE || 'events.json';

export const SUB_PROGRAM_FILE_ENV =
  process.env.SUB_PROGRAM_FILE || 'sub-programs.json';

export const FOOTER_FILE_ENV = process.env.FOOTER_FILE || 'footer.json';

export const SUPPORT_FILE_ENV = process.env.SUPPORT_FILE || 'support.json';

export const SUPPORT_OFFER_FILE_ENV =
  process.env.SUPPORT_OFFER_FILE || 'support-file.json';
