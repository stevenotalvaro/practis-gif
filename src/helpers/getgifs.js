export const getGifs = async category => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}+Man&limit=12&api_key=OEBGfCKkosTze8UazFaT0OliOEwMWSmZ`;

  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map(img => {
    return {
      id: img.id,
      url: img.images?.downsized_medium.url,
    };
  });

  return gifs;
};
