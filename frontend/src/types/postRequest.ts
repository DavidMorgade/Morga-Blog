export interface GetPostsRequest {
    data: Post[]
}

export interface Post {
    id: number
    attributes: PostAttributes
}

export interface PostAttributes {
    title: string
    content: string
    reading_time: string
    slug: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    featured_image: FeaturedImage
    categories: Categories
}

export interface FeaturedImage {
    data: Data
}

export interface Data {
    id: number
    attributes: ImageAttributes
}

export interface ImageAttributes {
    name: string
    alternativeText: any
    caption: any
    width: number
    height: number
    formats: Formats
    hash: string
    ext: string
    mime: string
    size: number
    url: string
    previewUrl: any
    provider: string
    provider_metadata: any
    createdAt: string
    updatedAt: string
}

export interface Formats {
    thumbnail: Thumbnail
    medium: Medium
    small: Small
    large: Large
}

export interface Thumbnail {
    name: string
    hash: string
    ext: string
    mime: string
    path: any
    width: number
    height: number
    size: number
    sizeInBytes: number
    url: string
}

export interface Medium {
    name: string
    hash: string
    ext: string
    mime: string
    path: any
    width: number
    height: number
    size: number
    sizeInBytes: number
    url: string
}

export interface Small {
    name: string
    hash: string
    ext: string
    mime: string
    path: any
    width: number
    height: number
    size: number
    sizeInBytes: number
    url: string
}

export interface Large {
    name: string
    hash: string
    ext: string
    mime: string
    path: any
    width: number
    height: number
    size: number
    sizeInBytes: number
    url: string
}

export interface Categories {
    data: Daum2[]
}

export interface Daum2 {
    id: number
    attributes: Attributes3
}

export interface Attributes3 {
    name: string
    slug: string
    createdAt: string
    updatedAt: string
    publishedAt: string
}

export interface Meta {
    pagination: Pagination
}

export interface Pagination {
    page: number
    pageSize: number
    pageCount: number
    total: number
}

