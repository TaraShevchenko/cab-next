declare module '*.woff' {
   const src: string;
   export default src;
}

declare module '*.woff2' {
   const src: string;
   export default src;
}

declare module '*.jpg' {
   const value: string;
   export default value;
}

declare module '*.png' {
   const value: string;
   export default value;
}

declare module "*.svg?url" {
   const url: string;
   export default url;
}

declare module "*.svg" {
   import * as React from "react";
   export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
   const src: string;
   export default src;
}
