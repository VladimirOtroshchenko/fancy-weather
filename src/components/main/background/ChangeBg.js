// import React from 'react';

async function backgroundChange(request, setBackground) {
  try {
    if (request) {
      const base = 'https://api.unsplash.com/photos/random?orientation=landscape&per_page=1&query=';
      const query = request;
      const clientID = 'client_id=9cfd515d0539f384a7865c8f309af63567d6a6b5d9bf94809b00f438ba393056';
      const url = `${base}${query}&${clientID}`;

      const res = await fetch(url);
      const parsed = await res.json();

      if (!parsed) {
        throw new Error('unsplash');
      }

      const img = new Image();
      img.src = await parsed.urls.regular;
      setBackground(img);
    } else {
      const base = 'https://api.unsplash.com/photos/random?orientation=landscape&per_page=1&query=';
      const query = 'nature';
      const clientID = 'client_id=9cfd515d0539f384a7865c8f309af63567d6a6b5d9bf94809b00f438ba393056';
      const url = `${base}${query}&${clientID}`;

      const res = await fetch(url);
      const parsed = await res.json();

      const img = new Image();
      img.src = await parsed.urls.regular;
      setBackground(img);
    }
  } catch (err) {
    console.error(`error: ${err.message} number of requests is exceeded`);
  }
}

export default backgroundChange;