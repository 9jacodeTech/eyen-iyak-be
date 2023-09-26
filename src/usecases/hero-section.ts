import {type heroSectionDetailInput } from "entities";
import { type IHeroSectionDataGateway } from "./interfaces";
import { validateData } from "utils/helpers";
import { heroSectionInputSchema } from "schemas/heroSection,";


export class HeroSectionUseCase {
    constructor (private readonly datagateway: IHeroSectionDataGateway) {}

    async fetch() {
        return this.datagateway.fetch();
    }

    async create(data: heroSectionDetailInput) {
        const heroSectionData = validateData(heroSectionInputSchema, data);
        return await this.datagateway.create(heroSectionData);
    }

    async update(idToUpdate: string, data: heroSectionDetailInput) {
        const heroSectionData = validateData(heroSectionInputSchema, data);
        return await this.datagateway.update(idToUpdate, heroSectionData);
    }

    async delete(idToDelete: string) {
        return await this.datagateway.delete(idToDelete);
    }
}