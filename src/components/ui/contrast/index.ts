function hexToRgb(hex: string) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : {
        r: -1,
        g: -1,
        b: -1,
      };
}
const res = (prop: string):number => {
  let i: number = (((hexToRgb(prop).r / 255 + 0.055) / 1.055) ** 2.4) * 0.2126;
  let j: number = (((hexToRgb(prop).g / 255 + 0.055) / 1.055) ** 2.4) * 0.7152;
  let k: number = (((hexToRgb(prop).b / 255 + 0.055) / 1.055) ** 2.4) * 0.0722;

  let contrastRatio = i + j + k;
  console.log(contrastRatio);
  return contrastRatio;
};
const Contrast = (props: string):number => {
  return res(props);
};

export default Contrast;
