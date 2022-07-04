export const WHITE: string = "white";
export const BLACK: string = "black";

export const colors = {
  dark: BLACK,
  light: WHITE,
};

export const displayColor = (color: string): string | undefined =>
  Object.keys(colors).find((x) => colors[x as keyof typeof colors] === color);

export const colorsArray: string[] = Object.values(colors);

export {};
