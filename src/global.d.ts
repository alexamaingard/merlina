declare module "*.svg" {
  import * as React from "react";

  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;

  const src: string;
  export default src;
}

declare module 'react-reveal/Fade' {
  import * as React from 'react';
  const Fade: React.ComponentType<any>;
  export default Fade;
}
