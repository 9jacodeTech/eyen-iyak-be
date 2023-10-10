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
  description: string;
  status: 'current' | 'upcoming' | 'Permanent' | 'Archive';
  imageURL: string;
  setAsHero: boolean;
};

export type ProjectDetail = ProjectDetailInput & {
  id: string;
  createdAt: Date;
  updatedAt: Date;
};

export type HeroSectionDetailInput = {
  header: string;
  subHeader: string;
  backGroundImageURL: string;
};

export type HeroSectionDetail = HeroSectionDetailInput & {
  createdAt: Date;
  updatedAt: Date;
  id: string;
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
  name: string;
  description: string;
  buttonLabel: string;
  registrationLink: string;
  donationLink: string;
  imageURL: string;
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
