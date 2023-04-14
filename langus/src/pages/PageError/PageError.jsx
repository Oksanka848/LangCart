import React from 'react'
import { CustomLink } from '../../pages/Header/CustomLink';

export default function PageError() {
  return (
    <>
      <p>Nothing to see here!</p>
      <p>
        <CustomLink to="/">Go to the home page</CustomLink>
      </p>
      <img src={require('./image.jpg')} alt="PageError"/>
    </>
  );
}
