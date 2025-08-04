export interface Service {
  title: string;
  description: string;
  services: string[];
}

export interface ServicesPageData {
  intro: {
    title: string;
    content: string;
  };
  serviceSections: Service[];
}