import { ButtonBaseProps, IconProps, TypographyProps } from '@mui/material';

export interface LinkTileProps extends ButtonBaseProps {
  /**
   * Title required to display on the tile.
   */
  title: string;
  /**
   * Description displayed under the title.
   */
  description?: string;
  /**
   * Url for the redirect.
   */
  url: string;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<LinkTileClasses>;
  /**
   * Override or extend the props applied to the component's children.
   */
  props?: Partial<LinkTileChildProps>;
}

export interface LinkTileClasses {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the title element. */
  title: string;
  /** Styles applied to the description element. */
  description: string;
  /** Styles applied to the icon element. */
  icon: string;
}

export interface LinkTileChildProps {
  /** Styles applied to the title element. */
  title: Partial<TypographyProps>;
  /** Styles applied to the description element. */
  description: Partial<TypographyProps>;
  /** Styles applied to the icon element. */
  icon: Partial<IconProps>;
}