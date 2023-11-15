import { ABOUT_CONTENT_FILE_ENV } from 'config';
import { type AboutContent, type AboutContentInput } from 'entities';
import { type IFileService } from 'services/file-services/flat-file-types';
import { type IAboutContentDataGateway } from 'usecases';

const fileName = ABOUT_CONTENT_FILE_ENV;

const defaultAboutContent = [
  {
    title: 'WHO WE ARE',
    subtitle: 'Executive Summary:',
    paragraph: `Eyen Iyak Art foundation is a cultural regeneration project. It was created to prevent the cultural extinction of the Ibibio/Efik people. The primary goal of the foundation is to regenerate the Ibibio/Efik culture through contemporary languages and promote artistic development through residencies and international collaborations. Eyen Iyak is committed to using dynamic curatorial and innovative educational initiatives to engage both local and global audiences.`,
  },
  {
    subtitle: 'Why?',
    paragraph: `In the face of rapid modernization, We are facing a cultural decline and lack sustainable art institutions to push artistic/cultural growth within and beyond the Ibibio/Efik region. This is evident as our art and culture is minimally represented in the artistic economy of Nigeria, Africa and the rest of the world. The newer generation of Ibibios/Efiks are unaware of our heritage and the things that make us thick as a people. Artists within the region are still drawing horses and landscapes when art has evolved to be a strong tool for self expression and catalyst for change within society. There is a lack of opportunities for progressive art education and little to no artistic institutions that promote development and growth amongst artists in this region. This t Eyen Iyak is created to fill this gap and build bridges that will encourage cultural preservation and a holistic artistic evelopment in the region and its environs.`,
  },
  {
    paragraph: `We are the first contemporary art institution actively tackling this problem in this region. This places us in a position to be the championing voice of cultural preservation and artistic development. For change to occur, it has to start from within. Eyen Iyak positions itself to subliminally influence youth culture; creating a community of sharers and thinkings that will export fragments of our culture to our diasporas and the world at large. Our independence from governmental influences keep us grounded and focused on the mission.`,
  },

  {
    title: 'OUR MISSION',
    paragraph: `Our project, though Non for Profit, will be treated as a profit organization. We seek to be self-sufficient by partnering with other creative outlets to create lucrative artistic activities that will attract financial and non financial value. We will also be dependent on other revenue streams such as membership, corporate partnerships, Agro-investments, paid art residencies, art profit sales and external grant/donation support from global art organizations.`,
  },

  {
    title: 'OUR TEAM',
    align: 'center',
    paragraph: `Our project, though Non for Profit, will be treated as a profit organization. We seek to be self-sufficient by partnering with other creative outlets to create lucrative artistic activities that will attract financial and non financial value. We will also be dependent on other revenue streams such as membership, corporate partnerships, Agro-investments, paid art residencies, art profit sales and external grant/donation support from global art organizations.`,
  },
];
export class AboutContentDataGateway implements IAboutContentDataGateway {
  constructor(private readonly fileService: IFileService) {}

  async fetch(): Promise<AboutContent> {
    try {
      const fileContent = await this.fileService.read(fileName);

      return JSON.parse(fileContent as string);
    } catch (error) {
      console.error('Error fetching About Page Content', error);
      return {
        sections: defaultAboutContent,
      };
    }
  }

  async create(data: AboutContentInput): Promise<AboutContent> {
    await this.fileService.write(fileName, JSON.stringify(data));

    return data;
  }
}
