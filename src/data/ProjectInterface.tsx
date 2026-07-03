export default interface ProjectInterface {
  id: string;
  title: string;
  img: string; 
  screenshots?: string[];
  githubFrontend?: string;
  githubBackend?: string;
  technologies: string[];
  description: string;
  features: string[];
}