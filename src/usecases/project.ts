import { type IProjectDataGateway } from "./interfaces"
import {type ProjectDetailInput } from "entities";
import { validateData } from "utils/helpers";
import { projectInputSchema } from "schemas/projects";


export class ProjectUsecase {
    constructor(private readonly dataGateway: IProjectDataGateway) {}

    async fetch() {
        return await this.dataGateway.fetch();
    }

    async create(data: ProjectDetailInput) {
        const projectData = validateData(projectInputSchema, data);
        return await this.dataGateway.create(projectData);
    }

    async update(idToUpdate: string, data: ProjectDetailInput) {
        const projectData = validateData(projectInputSchema, data);
        return await this.dataGateway.update(idToUpdate, projectData);
    }

    async delete(idToDelete: string) {
        return await this.dataGateway.delete(idToDelete);
    }
}