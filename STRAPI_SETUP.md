# Strapi Integration Setup

This project now includes Strapi as a headless CMS backend. Here's how to get started:

## Project Structure

```
presentacion_taglit/
├── backend/                 # Strapi backend (port 1337)
├── src/
│   ├── lib/
│   │   ├── strapi.ts       # Strapi client configuration
│   │   └── api.ts          # API functions for fetching data
│   └── ...
└── ...
```

## Getting Started

### 1. Start Strapi Backend

```bash
# Start Strapi development server
npm run strapi:dev

# Or start both Astro and Strapi together
npm run dev:all
```

The Strapi admin panel will be available at `http://localhost:1337/admin`

### 2. Initial Setup

1. Create an admin account when prompted
2. Go to Settings > API Tokens
3. Create a new API token with "Read" permissions
4. Copy the token and add it to your environment variables

### 3. Environment Variables

Create a `.env` file in the root directory:

```env
STRAPI_URL=http://localhost:1337
STRAPI_API_TOKEN=your_api_token_here
```

### 4. Content Types

The project includes example content types for:

- **Pages**: Static pages with content, SEO, and featured images
- **Posts**: Blog posts with author, category, tags, and featured images

You can create these in the Strapi admin panel under Content-Type Builder.

## Available Scripts

- `npm run dev` - Start Astro development server only
- `npm run strapi:dev` - Start Strapi development server only
- `npm run dev:all` - Start both Astro and Strapi servers
- `npm run build:all` - Build both projects for production

## API Usage

### Fetching Pages

```typescript
import { getPages, getPage } from '../lib/api';

// Get all pages
const pages = await getPages();

// Get a specific page by slug
const page = await getPage('about');
```

### Fetching Posts

```typescript
import { getPosts, getPost } from '../lib/api';

// Get all posts with pagination
const posts = await getPosts(10, 0);

// Get a specific post by slug
const post = await getPost('my-first-post');
```

### Working with Images

```typescript
import { getImageUrl } from '../lib/api';

// Get image URL with different sizes
const imageUrl = getImageUrl(post.attributes.featuredImage?.data, 'medium');
```

## Content Type Examples

### Page Content Type

- `title` (Text)
- `slug` (UID)
- `content` (Rich Text)
- `description` (Text)
- `featuredImage` (Media)
- `seo` (Component)

### Post Content Type

- `title` (Text)
- `slug` (UID)
- `excerpt` (Text)
- `content` (Rich Text)
- `featuredImage` (Media)
- `author` (Relation to User)
- `category` (Relation to Category)
- `tags` (Relation to Tag)

## Next Steps

1. Start the Strapi server and create your content types
2. Add some sample content
3. Update your Astro pages to fetch data from Strapi
4. Customize the content types based on your needs

## Troubleshooting

- Make sure Strapi is running on port 1337
- Check that your API token has the correct permissions
- Verify your environment variables are set correctly
- Check the browser console for any API errors
