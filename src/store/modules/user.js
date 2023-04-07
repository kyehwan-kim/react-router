// 초기 상태 설정
const initState = {
  id: '',
  password: '',
  isLogin: false,
};

// 액션 타입(문자열)
const LOGIN = 'user/LOGIN';
const LOGOUT = 'user/LOGOUT';

// 로그인, 로그아웃 액션 생성 함수
export function login(loginInfo) {
  return {
    type: LOGIN,
    payload: loginInfo,
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}

// 리듀서
export default function user(state = initState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        userID: action.payload.id,
        userPW: action.payload.password,
        isLogin: true,
      };
    case LOGOUT:
      return {
        ...state,
        isLogin: false,
      };
    default:
      return state;
  }
}
