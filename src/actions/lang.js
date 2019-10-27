import { LANG_EN, LANG_VN } from 'constants/lang'

const changeLang = type => {
  return dispatch => {
    if (type === 'vn') {
      dispatch({
        type: LANG_VN,
      })
    }
    if (type === 'en') {
      dispatch({
        type: LANG_EN,
      })
    }
  }
}

export { changeLang }
