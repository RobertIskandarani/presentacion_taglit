import strapi, { getStrapiMedia, StrapiResponse, StrapiImage } from './strapi';

// Example content types - you can modify these based on your needs
export interface Page {
  id: number;
  attributes: {
    title: string;
    slug: string;
    content?: string;
    description?: string;
    featuredImage?: {
      data: StrapiImage | null;
    };
    seo?: {
      metaTitle?: string;
      metaDescription?: string;
      keywords?: string;
    };
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

export interface Post {
  id: number;
  attributes: {
    title: string;
    slug: string;
    excerpt?: string;
    content?: string;
    featuredImage?: {
      data: StrapiImage | null;
    };
    author?: {
      data: {
        id: number;
        attributes: {
          name: string;
          email: string;
          avatar?: {
            data: StrapiImage | null;
          };
        };
      };
    };
    category?: {
      data: {
        id: number;
        attributes: {
          name: string;
          slug: string;
        };
      };
    };
    tags?: {
      data: Array<{
        id: number;
        attributes: {
          name: string;
          slug: string;
        };
      }>;
    };
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

// API functions
export async function getPages(): Promise<StrapiResponse<Page[]>> {
  try {
    const response = await strapi.find('pages', {
      populate: {
        featuredImage: true,
        seo: true,
      },
      sort: ['createdAt:desc'],
    });
    return response as StrapiResponse<Page[]>;
  } catch (error) {
    console.error('Error fetching pages:', error);
    throw error;
  }
}

export async function getPage(slug: string): Promise<Page | null> {
  try {
    const response = await strapi.find('pages', {
      filters: {
        slug: {
          $eq: slug,
        },
      },
      populate: {
        featuredImage: true,
        seo: true,
      },
    });

    const pages = response.data as Page[];
    return pages.length > 0 ? pages[0] : null;
  } catch (error) {
    console.error('Error fetching page:', error);
    throw error;
  }
}

export async function getPosts(
  limit = 10,
  start = 0
): Promise<StrapiResponse<Post[]>> {
  try {
    const response = await strapi.find('posts', {
      populate: {
        featuredImage: true,
        author: {
          populate: {
            avatar: true,
          },
        },
        category: true,
        tags: true,
      },
      sort: ['createdAt:desc'],
      pagination: {
        start,
        limit,
      },
    });
    return response as StrapiResponse<Post[]>;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
}

export async function getPost(slug: string): Promise<Post | null> {
  try {
    const response = await strapi.find('posts', {
      filters: {
        slug: {
          $eq: slug,
        },
      },
      populate: {
        featuredImage: true,
        author: {
          populate: {
            avatar: true,
          },
        },
        category: true,
        tags: true,
      },
    });

    const posts = response.data as Post[];
    return posts.length > 0 ? posts[0] : null;
  } catch (error) {
    console.error('Error fetching post:', error);
    throw error;
  }
}

// Helper function to get image URL
export function getImageUrl(
  image: StrapiImage | null,
  size: 'thumbnail' | 'small' | 'medium' | 'large' | 'original' = 'original'
): string {
  if (!image) return '';

  if (size === 'original') {
    return getStrapiMedia(image.attributes.url);
  }

  const format = image.attributes.formats?.[size];
  if (format) {
    return getStrapiMedia(format.url);
  }

  return getStrapiMedia(image.attributes.url);
}
