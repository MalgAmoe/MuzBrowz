import React from 'react';

export default ({ thumbnailUrl, collectionName }) => {
  return <img src={thumbnailUrl} alt={collectionName} />
}