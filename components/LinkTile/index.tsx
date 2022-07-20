// Dependencies scoped imports
import { Stack } from '@mui/material';
import React from 'react';

// Project scoped imports

// Module scoped imports
import { StyledRoot, StyledTitle, StyledDescription, StyledIcon } from './styles';
import { LinkTileProps } from './types';

/**
 * @description A simple tile with title and description redirecting on click.
 */
const LinkTile = ({ sx, classes, props, title, description, url, ...rootProps }: LinkTileProps) => 
  (
    <StyledRoot sx={sx} className={classes?.root} {...rootProps}>
        <Stack>
            <StyledTitle variant="h4" className={classes?.title} {...props?.title}>
                {title} 
                <StyledIcon className={classes?.icon} {...props?.icon}>&rarr;</StyledIcon>
            </StyledTitle>
            
            { !!description && 
                <StyledDescription paragraph className={classes?.description} {...props?.description}>{description}</StyledDescription> }
        </Stack>
    </StyledRoot>
  );
  
export default LinkTile;