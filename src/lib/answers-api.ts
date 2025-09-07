// API functions for answers content type
export interface Answer {
  id: number;
  documentId: string;
  answer: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string | null;
}

export interface AnswersResponse {
  data: Answer[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

// Get the Strapi URL from environment variables
function getStrapiUrl(): string {
  if (typeof window !== 'undefined') {
    // Client-side: use environment variable or fallback
    return (
      import.meta.env.PUBLIC_STRAPI_URL ||
      'https://taglit-backend-production.up.railway.app'
    );
  } else {
    // Server-side: use environment variable or fallback
    return (
      process.env.STRAPI_URL ||
      'https://taglit-backend-production.up.railway.app'
    );
  }
}

// Fetch all answers
export async function getAnswers(): Promise<AnswersResponse> {
  try {
    const strapiUrl = getStrapiUrl();
    const response = await fetch(`${strapiUrl}/api/answers`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching answers:', error);
    return {
      data: [],
      meta: {
        pagination: {
          page: 1,
          pageSize: 25,
          pageCount: 0,
          total: 0,
        },
      },
    };
  }
}

// Fetch a single answer by ID
export async function getAnswer(id: number): Promise<Answer | null> {
  try {
    const strapiUrl = getStrapiUrl();
    const response = await fetch(`${strapiUrl}/api/answers/${id}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching answer:', error);
    return null;
  }
}

// Create a new answer
export async function createAnswer(answer: string): Promise<Answer | null> {
  try {
    const strapiUrl = getStrapiUrl();
    const response = await fetch(`${strapiUrl}/api/answers`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: {
          answer: answer,
        },
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error creating answer:', error);
    return null;
  }
}
