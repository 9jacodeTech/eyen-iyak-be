export type ProjectInput = {
  imageURL: string;
  heading: string;
  description: string;
  donateLink: string;
  donateLabel: string;
  volunteerLink: string;
  volunteerLabel: string;
  waitlistLink: string;
  waitlistLabel: string;
  status: 'ongoing' | 'current' | 'upcoming';
};

export type Project = ProjectInput & {
  id: string;
};

export type SlideInput = {
  title: string;
  description: string;
  button1URL: string;
  button2URL: string;
  button1Label: string;
  button2Label: string;
  imageURLs: string[];
};

export type AboutPageContent = {
  hero: {
    subText: string;
    title: string;
    imgURL: string;
  };
  summary: {
    title: string;
    description: string;
  };
  volunteerBenefits: {
    benefits: string;
    title: string;
  };
  contactUs: {
    email: string;
    phoneNumber: string;
    fullAddress: string;
    linkedInURL: string;
  };
  cards: {
    title1: string;
    title2: string;
    title3: string;
    subText1: string;
    subText2: string;
    subText3: string;
  };
};

export type ProjectDetailInput = {
  name: string;
  date: Date;
  sections: object[];
  status: 'current' | 'upcoming' | 'permanent' | 'archive';
  coverImageURL: string;
  setAsHero: boolean;
};

export type ProjectDetail = ProjectDetailInput & {
  id: string;
  createdAt: Date;
  updatedAt: Date;
};

export type HeroSectionDetailInput = {
  page: 'home' | 'programs' | 'projects' | 'support_us';
  header: string;
  subHeader: string;
  imageURL: string[];
};

export type HeroSectionDetail = HeroSectionDetailInput & {
  createdAt: Date;
  updatedAt: Date;
};

export type NewsDetailInput = {
  title: string;
  body: string;
  author: string;
  date: Date;
  imageURL: string;
};

export type NewsDetail = NewsDetailInput & {
  id: string;
  createdAt: Date;
  updatedAt: Date;
};

export type ProgramDetailInput = {
  category: 'artist_development' | 'cultural_regeneration';
  writeUp: object[];
};

export type ProgramDetail = ProgramDetailInput & {
  id: string;
  createdAt: Date;
  updatedAt: Date;
};

export type GalleryDetailInput = {
  header: string;
  subHeader: string;
  imageURL: string;
};

export type GalleryDetail = GalleryDetailInput & {
  id: string;
  createdAt: Date;
  updatedAt: Date;
};

export type AboutDetailInput = {
  header: string;
  subHeader: string;
  imageURL: string[];
};

export type AboutDetail = AboutDetailInput & {
  id: string;
  createdAt: Date;
  updatedAt: Date;
};

export type PartnerDetailInput = {
  category: 'main' | 'art' | 'other';
  partnerURL: string;
  subText: string;
  imageURL: string;
};

export type PartnerDetail = PartnerDetailInput & {
  id: string;
  createdAt: Date;
  updatedAt: Date;
};

export type AboutContentInput = {
  sections: object[];
};

export type AboutContent = AboutContentInput;

export type TeamMemberDetailInput = {
  department:
    | 'executive'
    | 'board_of_directors'
    | 'council_governors'
    | 'operations';
  imageURL: string;
  name: string;
  role: string;
};

export type TeamMemberDetail = TeamMemberDetailInput & {
  id: string;
  createdAt: Date;
  updatedAt: Date;
};

export type BrandStoryDetailInput = {
  title: string;
  subTitle: string;
  content: string;
  imageURL: string;
};

export type BrandStoryDetail = BrandStoryDetailInput & {
  createdAt: Date;
  updatedAt: Date;
};

export type SearchDetailInput = {
  searchTerm: string;
  category: string;
};

export type SearchResultItem = {
  title: string;
  id: string;
  category: 'news' | 'events' | 'program' | 'project';
};

export type SubProgramDetailInput = {
  category: 'artist_development' | 'cultural_regeneration';
  description: string;
  buttonLabel: string;
  registrationLink: string;
  donationLink: string;
  imageURL: string;
};

export type SubProgramDetail = SubProgramDetailInput & {
  id: string;
  createdAt: Date;
  updatedAt: Date;
};

export type FooterDetailInput = {
  officeAddress: string;
  emailAddress: string;
  phoneNumber: string;
  facebook: string;
  instagram: string;
  linkedIn: string;
  twitter: string;
};

export type FooterDetail = FooterDetailInput & {
  createdAt: Date;
  updatedAt: Date;
};

export type SupportDetailInput = {
  name: string;
  description: string;
  btnLabel: string;
  btnHref: string;
  imageURL: string;
};

export type SupportDetail = SupportDetailInput & {
  id: string;
  createdAt: Date;
  updatedAt: Date;
};

export type SupportOfferDetailInput = {
  name: string;
  email: string;
  supportType: string;
};

export type SupportOfferDetail = SupportOfferDetailInput & {
  createdAt: Date;
  updatedAt: Date;
};
