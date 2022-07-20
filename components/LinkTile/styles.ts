import { ButtonBase, Icon, styled, Typography } from '@mui/material';

export const StyledRoot = styled(ButtonBase)(() => ({
      "margin": "1rem",
      "padding": "1.5rem",
      "textAlign": "left",
      "color": "inherit",
      "textDecoration": "none",
      "border": "1px solid #eaeaea",
      "borderRadius": "10px",
      "maxWidth": "300px",
      "&:hover, &:focus, &:active": {
        "color": "#0070f3",
        "borderColor": "#0070f3"
      }
}));

export const StyledTitle = styled(Typography)(() => ({
      "margin": "0 0 1rem 0",
      "fontSize": "1.5rem",
      "fontWeight": "bold"
}));

export const StyledDescription = styled(Typography)(() => ({
      "margin": "0",
      "fontSize": "1.25rem",
      "lineHeight": "1.5"
}));

export const StyledIcon = styled(Icon)(() => ({
      "marginLeft": "8px"
}));