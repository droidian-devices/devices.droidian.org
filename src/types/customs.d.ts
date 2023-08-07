import type { IDefaultChildren } from './theme';

export interface IContainerProps extends IDefaultChildren {
  $direction?: string;
  $justify?: string;
  $align?: string;
  $wrap?: string;
  $noScroll?: boolean;
  $fillHeight?: boolean;
}

export interface IHeaderProps extends IDefaultChildren {
  $center?: boolean;
}

export interface ITextProps extends IDefaultChildren {
  $full?: boolean;
}

export interface INavContentProps extends IContainerProps {
  $active?: boolean;
}

export interface IBrandsProps extends IContainerProps {
  $active?: boolean;
}
