/// <reference types="react" />
  import { ComponentType, SVGAttributes } from 'react';

  interface Props extends SVGAttributes<SVGElement> {
    color?: string;
    size?: string | number;
  }

  type Icon = ComponentType<Props>;
  export const Settings: Icon;
export const ChevronsRight: Icon;
export const Apps: Icon;
export const Verified: Icon;
export const TrashBin: Icon;
export const Home: Icon;
export const View: Icon;
export const Profile: Icon;
export const ViewOff: Icon;
export const Cart: Icon;
export const Chart: Icon;
export const ChevronDown: Icon;
export const XClear: Icon;
export const Plus: Icon;
export const LinkArrowRight: Icon;
export const LinkArrowLeft: Icon;
export const Copy: Icon;
export const ChevronsLeft: Icon;
export const Access: Icon;
export const Disabled: Icon;
export const Search: Icon;
