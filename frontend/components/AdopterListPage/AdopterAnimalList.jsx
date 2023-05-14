import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
// import Image from 'next/image';


export default function AnimalImageList(props) {
  const { imgData } = props;

  return (
    <ImageList sx={{ width: '100%', overflow: 'hidden'}} cols={3} rowHeight={100} gap={1}>
      {imgData.map((item) => (
        <ImageListItem key={item.img}>
          {/* <Image
            src={`/animals/${item.img}.jpg`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            width={125}
            height={100}
          /> */}
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            sx={{height: '30px'}}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
