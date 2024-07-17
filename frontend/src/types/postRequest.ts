export interface PostRequest {
    data: SinglePost[]
    meta: Meta
}

export interface SinglePost {
    id: number
    attributes: Attributes
}

export interface Attributes {
    title: string
    content: string
    reading_time: string
    slug: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    render_content?: string
    featured_image: FeaturedImage
    author: Author
    categories: Categories
}

export interface FeaturedImage {
    data: Data
}

export interface Data {
    id: number
    attributes: Attributes2
}

export interface Attributes2 {
    name: string
    width: number
    height: number
    url: string
}

export interface Author {
    data: any
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

