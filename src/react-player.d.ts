// src/react-player.d.ts
declare module "react-player" {
    import * as React from "react";
  
    export interface ReactPlayerProps {
      url?: string;
      playing?: boolean;
      controls?: boolean;
      muted?: boolean;
      width?: string | number;
      height?: string | number;
    }
  
    const ReactPlayer: React.FC<ReactPlayerProps>;
    export default ReactPlayer;
  }
  