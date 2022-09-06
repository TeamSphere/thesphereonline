import { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';

import { fetchFromBlockchain } from '../utils/fetchFromBlockchain';
import { Sidebar, Nfts } from './';

const Marketplace = () => {

  return (
    <Stack sx={{ flexDirection : { sx: "column", md: "row" } }}>

        <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: '#fff'}}>
          Copyright 2022 The Sphere
        </Typography>
    </Stack>
  )
}


export default Marketplace
