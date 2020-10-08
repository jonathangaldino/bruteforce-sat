export function splitAndTrim(string, separator) {
  return string.split(separator).map(item => item.trim());
}
