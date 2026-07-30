import homeMock from '@/data/homeMock';

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/$/, '') || '';

const fetchWithFallback = async <T>(path: string, backup: T): Promise<T> => {
  const target = baseUrl ? `${baseUrl}${path}` : path;
  try {
    const response = await fetch(target, { cache: 'no-store' });
    if (!response.ok) {
      throw new Error('Bad response');
    }
    return (await response.json()) as T;
  } catch (error) {
    console.error('Fetch failed, using fallback:', path, error);
    return backup;
  }
};

export default fetchWithFallback;
