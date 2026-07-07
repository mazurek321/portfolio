export default interface ProjectInterface {
  id: string;
  title: string;
  img: string; 
  imgPosition?: string;
  screenshots?: string[];
  github?: string;
  githubFrontend?: string;
  githubBackend?: string;
  technologies: string[];
  description: string;
  features: string[];
}