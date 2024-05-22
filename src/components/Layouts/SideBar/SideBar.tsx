import { Divider, List, Toolbar } from '@mui/material';
import { FeatureList } from 'utils/FeatureList';
import FeatureItem from './FeatureItem';
import { SideBarStyled } from './SideBar.styled';
function SideBar() {
  return (
    <>
      <SideBarStyled>
        <Toolbar />
        <Divider />
        <List>
          {FeatureList.map(({ featName, icon, path }, i) => (
            <FeatureItem key={i} featName={featName} icon={icon} path={path} />
          ))}
        </List>
      </SideBarStyled>
    </>
  );
}

export default SideBar;
