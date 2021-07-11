export const checkNum = /[0-9]/;
export const checkEng = /[a-zA-Z]/;
export const checkSpc = /[~!@#$%^&*()_+|<>?:{}]/;
export const checkKor = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
export const checkHttp = /^http(s?):\/\//i;
export const checkDomain = /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\.[a-zA-Z]{2,}$/;
export const checkEmail = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
export const checkPasswordHigh = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
export const checkPassword = /^[A-Za-z0-9]{6,12}$/;
export const checkPhone = /^\d{3}-\d{3,4}-\d{4}$/;
export const checkNameKr = /^[가-힣]{2,5}$/;
export const checkNameEn = /[a-zA-Z]{2,10}\s[a-zA-Z]{2,10}$/;
export const checkNameKrEn = /[가-힣]{2,5}|[a-zA-Z]{2,10}\s[a-zA-Z]{2,10}$/;
export const checkId = /[a-zA-Z]{2,10}\s[a-zA-Z]{2,10}$/;

export const removeHttp = (value: string) => {
  return value.replace(/^(?:https?:\/\/)?(?:www\.)?/i, '').split('/')[0];
};

export const makeLink = (message: string) => {
  const regURL = new RegExp('(http|https|ftp|telnet|news|irc)://([-/.a-zA-Z0-9_~#%$?&=:200-377()]+)', 'gi');
  const regEmail = new RegExp('([xA1-xFEa-z0-9_-]+@[xA1-xFEa-z0-9-]+.[a-z0-9-]+)', 'gi');

  const retUrl = message
    .replace(regURL, `<a href='$1://$2' target='_blank''>$1://$2</a>`)
    .replace(regEmail, `<a href='mailto:$1'>$1</a>`)
    .replace('\n', '<br>');

  return decodeURIComponent(retUrl);
};
