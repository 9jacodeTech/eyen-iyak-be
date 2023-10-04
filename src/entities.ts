export interface ProjectInput {
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
}

export type Project = ProjectInput & {
  id: string;
};

export interface SlideInput {
  title: string;
  description: string;
  button1URL: string;
  button2URL: string;
  button1Label: string;
  button2Label: string;
  imageURLs: string[];
}

export interface AboutPageContent {
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
}

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
