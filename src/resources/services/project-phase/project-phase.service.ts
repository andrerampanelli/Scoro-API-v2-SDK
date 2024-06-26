import { APIClient } from '@/resources/base'
import type { IProjectPhase } from './types/project-phase.type'

export class ProjectPhaseService extends APIClient {
  async getProjectPhases(
    query: Record<string, any> = {},
    perPage = 50,
    page = 1
  ): Promise<IProjectPhase[]> {
    return await this.list<IProjectPhase>(
      'projectPhases',
      query,
      {},
      perPage,
      page
    )
  }
}
