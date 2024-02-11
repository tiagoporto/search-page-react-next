export interface SearchList {
  id: string;
  title: string;
  url: string;
  description: string;
  category: 'VIDEOS' | 'PLAYLISTS' | 'BLOG_POSTS';
}

export const getData = async (query: string) => {
  try {
    const response = await fetch(`/api/data?search=${query}`);
    // network error (4xx–5xx)
    if (!response.ok) {
      return { error: true };
    }

    const data: SearchList[] = await response.json();
    return { data };
  } catch (error) {
    return { error: true };
  }
};
