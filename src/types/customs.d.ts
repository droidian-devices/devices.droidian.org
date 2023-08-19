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
  $center?: boolean;
}

export interface INavContentProps extends IContainerProps {
  $active?: boolean;
}

export interface IBrandsProps extends IContainerProps {
  $active?: boolean;
}

export interface IFooterProps extends IContainerProps {
  $active?: boolean;
}

export interface IOuterContainerProps extends IContainerProps {
  $overflow?: boolean;
}

export interface ICategoryHeaderProps extends ITextProps {
  $full?: boolean;
  $center?: boolean;
  $active?: boolean;
  $border?: boolean;
}

export interface INotificationProps extends IDefaultChildren {
  $nth?: number;
}
