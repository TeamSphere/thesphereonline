import { Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import { logo } from '../utils/constants';
import SearchBar from './SearchBar';


const Navbar = () => (
  <Stack direction="row"
    alignItems="center"
    p={2}
    sx={{ position: 'sticky', background: '#fff', top: 0, justifyContent: 'space-between'}}
  >
    <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
      <img src={logo} alt="logo" height={45} /><h2 style={{ marginLeft: '10px' }} >The Sphere</h2>
    </Link>
    <Stack direction="row">
      <Link to="/marketplace" style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
        <Typography>NFT Marketplace</Typography>
      </Link>
      <div style={{ position: 'absolute', marginTop: '35px', marginLeft: '35px', borderRadius: '15px', display: 'flex', alignItems: 'center', padding: '5px', background: '#7ae300' }}>
        <Typography sx={{ fontSize: '10px', color: 'black' }}>Coming soon!</Typography>
      </div>
      <Link to="/" style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
        <Typography>Videos</Typography>
      </Link>
     <SearchBar />
    </Stack>

  </Stack>
)

export default Navbar
