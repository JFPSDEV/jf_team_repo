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
import { lightDarkModeClasses, type TSectionProps } from '@/utils';
import { ETrigger, FadeTrigger } from '@jfteam/animated';

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

interface TechnoProps extends TSectionProps {}

export const Techno = (props: TechnoProps) => {
  const iconBand = (
    <Box>
      {[...technoList, ...technoList].map(({ Icon }) => (
        <Icon key={generateUUID()} size={70} className={classes.icon} />
      ))}
    </Box>
  );

  return (
    <Flex
      className={cx(classes.container, lightDarkModeClasses.bgSecondary)}
      align="center"
      py="var(--section-spacing)"
    >
      <FadeTrigger
        className={cx(classes.scroll, classes.imgBox)}
        trigger={ETrigger.ScrollTrigger}
        startPosition={100}
      >
        {iconBand}
        {iconBand}
      </FadeTrigger>
    </Flex>
  );
};
