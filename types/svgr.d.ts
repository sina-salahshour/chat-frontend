declare module "*.svg" {
    import type React from "react";

    const content: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;

    export default content;
}
