import { APIClient } from '@/resources/base'
import type { IBookmark } from './types/bookmark.type'

export class BookmarkService extends APIClient {
  async getBookmarks(
    query: Record<string, any> = {},
    perPage = 50,
    page = 1
  ): Promise<IBookmark[]> {
    return await this.list<IBookmark>('bookmarks', query, {}, perPage, page)
  }
}
