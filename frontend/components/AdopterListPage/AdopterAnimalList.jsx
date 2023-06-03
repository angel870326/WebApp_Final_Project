import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

export default function AnimalImageList({ imgData }) {
  return (
    <ImageList sx={{ width: '100%', overflow: 'hidden' }} cols={3} rowHeight={100} gap={1}>
      {imgData.map((item) => (
        <ImageListItem key={item.animalId}>
          <img
            src={`/animals/${item.animalId}.jpg?w=248&fit=crop&auto=format`}
            srcSet={`/animals/${item.animalId}.jpg?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            sx={{ height: '30px' }}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}