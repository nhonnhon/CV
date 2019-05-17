export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE'

function changeLanguage(language) {
  return {
    type: CHANGE_LANGUAGE,
    payload: language
  }
}

export {
  changeLanguage
}