import Button from '@material-ui/core/Button';
import { IoLogoWhatsapp } from 'react-icons/io';
import Link from '@material-ui/core/Link';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import React from 'react';

function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <IoLogoWhatsapp
          style={{ fontSize: '24px', color: '25d366' }}
        />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link
          target="_blank"
          href={`https://api.whatsapp.com/send?phone=16462498775&text=Emergencia`}
        >
          <MenuItem onClick={handleClose}>Contact 1</MenuItem>
        </Link>
        <Link
          target="_blank"
          href={`https://api.whatsapp.com/send?phone=5491144274261&text=Emergencia`}
        >
          <MenuItem onClick={handleClose}>Contact 2</MenuItem>
        </Link>
        <Link
          target="_blank"
          href={`https://api.whatsapp.com/send?phone=5491122928462&text=Emergencia`}
        >
          <MenuItem onClick={handleClose}>Medico</MenuItem>
        </Link>
      </Menu>
    </div>
  );
}

export default SimpleMenu;
