// Types for Gallery components
export interface Album {
  id: string;
  title: string;
  description: string;
  images: Record<string, any>[];
}

export interface MachineCategory {
  id: string;
  name: string;
  Icon: any;
  images: string[];
}
