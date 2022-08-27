export interface IActionLink {
  title: string;
  action: (...params: any[]) => void;
}
