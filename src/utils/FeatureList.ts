import PaletteIcon from '@mui/icons-material/Palette';
import ViewListIcon from '@mui/icons-material/ViewList';
import React from 'react';
import FeatureProps from 'types/FeatureProps';

export const FeatureList: FeatureProps[] = [
  {
    featName: 'Color Box',
    icon: React.createElement(PaletteIcon, null),
    path: '/box',
  },
  {
    featName: 'Todo List',
    icon: React.createElement(ViewListIcon, null),
    path: '/todos',
  },
  {
    featName: 'Products',
    icon: React.createElement(ViewListIcon, null),
    path: '/products',
  },
];
