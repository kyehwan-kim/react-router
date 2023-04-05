// 초기 상태 설정
const initState = {
  todoList: [
    {
      id: 0,
      text: '리액트 공부하기',
      done: false,
    },
    {
      id: 1,
      text: '척추 펴기',
      done: false,
    },
    {
      id: 2,
      text: '프로젝트 잘 마무리하기',
      done: false,
    },
  ],
  buyList: ['자동차', '집'],
  todoListCount: '3',
};

let counts = initState.todoList.length;
initState['nextID'] = counts;

// 액션 타입 정하기
// 다른 스토어에도 create done 같은 이름이 생길 수 있어서 겹치지 않게, 어디 소속인지 보여주기 위해서 todo를 적어주는 것. 소속 표시는 국룰!
const CREATE = 'todo/CREATE';
const DONE = 'todo/DONE';

// 액션 생성 함수
export function create(payload) {
  return {
    type: CREATE,
    payload,
  };
}

export function done(id) {
  return {
    type: DONE,
    id,
  };
}

// 리듀서 설정(실제 작업을 하는 코드)
export default function todo(state = initState, action) {
  switch (action.type) {
    case CREATE:
      return {
        ...state,
        // todoList: state.todoList.concat({
        //   id: action.payload.id,
        //   text: action.payload.text,
        //   done: false,
        // }),
        todoList: [
          ...state.todoList,
          {
            id: action.payload.id,
            text: action.payload.text,
            done: false,
          },
        ],

        nextID: action.payload.id + 1,
      };
    case DONE:
      return {
        ...state,
        todoList: state.todoList.map((el) => {
          if (el.id === action.id) {
            return {
              ...el,
              done: true,
            };
          } else {
            return el;
          }
        }),
      };
    default:
      return state;
  }
}
