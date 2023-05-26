export const itemListCount = 4

export const BOOKMARK = "BOOKMARK"

export const numComma = (num) => {
  const str = String(num);
  let result = '';

  if (str === 'null') return null;

  for (let i = 0; i < str.length; i++) {
    if (i !== 0 && i % 3 === 0) result = `,${result}`;
    result = str[str.length - i - 1] + result;
  }
  return result;
}