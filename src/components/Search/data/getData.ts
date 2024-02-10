export const getData = async (query: string) => {
  const result = await fetch(`/api/data?search=${query}`);
  const data = await result.json();

  return data;
};
