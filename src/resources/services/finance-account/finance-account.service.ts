import { APIClient } from '@/resources/base'
import { IFinanceAccount } from './types/finance-account.type'

export class FinanceAccountService extends APIClient {
  async getFinanceAccounts(
    query: Record<string, any> = {},
    perPage = 50,
    page = 1
  ): Promise<IFinanceAccount[]> {
    return await this.list<IFinanceAccount>(
      'financeAccounts',
      query,
      {},
      perPage,
      page
    )
  }

  async findAllFinanceAccountsBy(
    filters: Record<string, any>
  ): Promise<IFinanceAccount[]> {
    return await this.list<IFinanceAccount>('financeAccounts', filters)
  }

  async getFinanceAccount(id: number): Promise<IFinanceAccount> {
    return await this.view<IFinanceAccount>('financeAccounts', id)
  }

  async createFinanceAccount(
    data: Partial<IFinanceAccount>
  ): Promise<IFinanceAccount> {
    return await this.create<IFinanceAccount>('financeAccounts', data)
  }

  async updateFinanceAccount(
    id: number,
    data: Partial<IFinanceAccount>
  ): Promise<IFinanceAccount> {
    return await this.update<IFinanceAccount>('financeAccounts', id, data)
  }

  async deleteFinanceAccount(id: number): Promise<void> {
    await this.delete('financeAccounts', id)
  }
}
