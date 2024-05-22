import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { NavLink } from 'react-router-dom';
import FeatureProps from 'types/FeatureProps';
function FeatureItem({ featName, icon, path }: FeatureProps) {
  return (
    <NavLink
      to={path}
      style={({ isActive }) => {
        return {
          display: 'block',
          backgroundColor: isActive ? '#1976d2' : '#ffffff',
          color: isActive ? '#ffffff' : 'black',
          textDecoration: 'none',
        };
      }}
    >
      <ListItemButton>
        <ListItemIcon color='white'>{icon}</ListItemIcon>
        <ListItemText primary={featName} />
      </ListItemButton>
    </NavLink>
  );
}

export default FeatureItem;
