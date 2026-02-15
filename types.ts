export interface ExperienceItem {
  role: string;
  company: string;
  type: string;
  period: string;
}

export interface ProjectData {
  id: string;
  name: string;
  description: string;
  roleDescription: string;
  objectives: string[];
  tasks: string[];
  results: string[];
  visualRight: {
    mobile: string; // 1024x1536
    logo: string; // 1980x1980
  };
  videos: {
    thumbnail: string;
    link: string;
  }[];
  bumper: string; // Image URL for bumper
}