import React from 'react';

import { Box, Flex, cx } from '@jfteam/material';
import {
  NestJsIcon,
  AngularIcon,
  ApolloIcon,
  GraphqlIcon,
  NextJSIcon,
  NodeJSIcon,
  ReactIcon,
  TurboRepoIcon,
  TypescriptIcon,
  VueJSIcon,
} from '@jfteam/icons';

import classes from './Techno.module.css';
import { generateUUID } from '@jfteam/utils';

const technoList = [
  {
    id: 1,
    Icon: ReactIcon,
  },
  {
    id: 2,
    Icon: TypescriptIcon,
  },
  {
    id: 3,
    Icon: GraphqlIcon,
  },
  {
    id: 4,
    Icon: ApolloIcon,
  },
  {
    id: 5,
    Icon: NextJSIcon,
  },
  {
    id: 6,
    Icon: TurboRepoIcon,
  },
  {
    id: 7,
    Icon: NestJsIcon,
  },
  {
    id: 8,
    Icon: NodeJSIcon,
  },
  {
    id: 9,
    Icon: AngularIcon,
  },
  {
    id: 10,
    Icon: VueJSIcon,
  },
];

interface TechnoProps {}

export const Techno = () => {
  const iconBand = (
    <Box>
      {[...technoList, ...technoList].map(({ id, Icon }, index) => (
        <Icon key={generateUUID()} size={70} />
      ))}
    </Box>
  );

  return (
    <Flex className={classes.container} align="center">
      <Box className={cx(classes.scroll, classes.imgBox)}>
        {iconBand}
        {iconBand}
      </Box>
    </Flex>
  );
};
