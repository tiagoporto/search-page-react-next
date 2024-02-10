import React from 'react';
import { useLoadingContext } from '../../context/Loading';

export interface MainProps {
  searchResults?: {
    id: string;
    title: string;
    url: string;
    description: string;
    category: 'VIDEOS' | 'PLAYLISTS' | 'BLOG_POSTS';
  }[];
}

export const Main = ({ searchResults }: MainProps) => {
  const { isLoading } = useLoadingContext();

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <>
      {!!searchResults?.length && (
        <div>
          Result
          <ul>
            {searchResults.map((result) => (
              <li key={result.id}>
                <a href={result.url} target="_blank" rel="noreferrer noopener">
                  {result.title}
                </a>

                {result.category}

                <p>{result.description}</p>
              </li>
            ))}
          </ul>
        </div>
      )}

      {searchResults?.length === 0 &&
        'There are no results matching your query.'}
    </>
  );
};
