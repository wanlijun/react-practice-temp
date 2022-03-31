// 第一个字符转换大写
export function upperCaseFirstLetter(value: String) {
  return value[0].toUpperCase() + value.slice(1);
}
// 第一个字符转换小写
export function lowerCaseFirstLetter(value: String) {
  return value[0].toLowerCase() + value.slice(1);
}