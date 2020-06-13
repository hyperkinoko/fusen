export interface FusenColor {
  id: string;
  colorCode: string;
}

export interface FusenData {
  id: string;
  text: string;
  colorId: string;
}

export const FUSEN_COLORS: FusenColor[] = [
  {id: 'red', colorCode: '#ffc1be'},
  {id: 'blue', colorCode: '#d5fffc'},
  {id: 'green', colorCode: '#ccffcd'},
  {id: 'yellow', colorCode: '#fffed4'}
];
