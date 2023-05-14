import { Typography, ImageList, ImageListItem, Skeleton, Box } from '@mui/material';
import React, { useEffect } from 'react';
import ChildCard from '../../../../components/shared/ChildCard';

const photos = [
  {
    img: "/images/profile/user-1.jpg",
    id: 1,
  },
  {
    img: "/images/profile/user-2.jpg",
    id: 2,
  },
  {
    img: "/images/profile/user-3.jpg",
    id: 3,
  },
  {
    img: "/images/profile/user-4.jpg",
    id: 4,
  },
  {
    img: "/images/profile/user-5.jpg",
    id: 5,
  },
  {
    img: "/images/profile/user-6.jpg",
    id: 6,
  },
  {
    img: "/images/profile/user-7.jpg",
    id: 7,
  },
  {
    img: "/images/profile/user-8.jpg",
    id: 8,
  },
  {
    img: "/images/profile/user-9.jpg",
    id: 9,
  },
];

const PhotosCard = () => {

  const [isLoading, setLoading] = React.useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <ChildCard>
      <Typography variant="h4">Photos</Typography>
      <ImageList cols={3} gap={20}>
        {photos.map((photo) => (
          <Box key={photo.id}>
            {
              isLoading ? (
                <>
                  <Skeleton
                    variant="rectangular"
                    animation="wave"
                    width="100%"
                    height={93}
                    key={photo.id}
                  ></Skeleton>
                </>
              ) : (
                <ImageListItem key={photo.id}>
                  <img
                    srcSet={`${photo.img} 1x, ${photo.img} 2x`}
                    alt={photo.img}
                    loading="lazy"
                    style={{ borderRadius: 8 }}
                  />
                </ImageListItem>
              )}
          </Box>
        ))}
      </ImageList>
    </ChildCard >
  )
};

export default PhotosCard;
