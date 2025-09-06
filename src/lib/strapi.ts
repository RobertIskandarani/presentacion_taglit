import { Strapi } from '@strapi/client';

// Strapi client configuration
const strapi = new Strapi({
  url: process.env.STRAPI_URL || 'http://localhost:1337',
  apiToken: process.env.STRAPI_API_TOKEN || '', // Add your API token here
});

export default strapi;

// Helper function to get the base URL for Strapi
export function getStrapiURL(path = '') {
  return `${process.env.STRAPI_URL || 'http://localhost:1337'}${path}`;
}

// Helper function to get Strapi media URLs
export function getStrapiMedia(url: string) {
  if (url.startsWith('http')) {
    return url;
  }
  return getStrapiURL(url);
}

// Type definitions for common Strapi responses
export interface StrapiResponse<T> {
  data: T;
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface StrapiImage {
  id: number;
  attributes: {
    name: string;
    alternativeText?: string;
    caption?: string;
    width: number;
    height: number;
    formats?: {
      thumbnail?: {
        url: string;
        width: number;
        height: number;
      };
      small?: {
        url: string;
        width: number;
        height: number;
      };
      medium?: {
        url: string;
        width: number;
        height: number;
      };
      large?: {
        url: string;
        width: number;
        height: number;
      };
    };
    url: string;
    previewUrl?: string;
    provider: string;
    provider_metadata?: any;
    createdAt: string;
    updatedAt: string;
  };
}
