export interface Content {
  link: string,
  content: string,
  metadata: {
    title: string,
    published_at: string,
    tags?: string[],
    cover?: string
  }
}