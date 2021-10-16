// 액션 타입(문자열)
const CHECK_CORRECT = "score/CHECK_CORRECT"
const NEXT_PAGE = "score/NEXT_PAGE"
const RESET = "score/RESET"

//액션 생성 함수
export function check({ isCorrect }) {
  return {
    type: CHECK_CORRECT,
    payload: { isCorrect },
  }
}

export function next() {
  return {
    type: NEXT_PAGE,
  }
}

export function reset() {
  return {
    type: RESET,
  }
}

//초기 상태
const initialState = {
  score: 0,
  page: 0, // 0: 인트로 페이지, 1 ~ n: 퀴즈 페이지, n+1: 마지막 페이지
  quizs: [
    {
      q: "아시아 EPL 최다득점 3위는?",
      a: [
        {
          text: "기성용",
          isCorrect: true,
        },
        {
          text: "오카자키 신지",
          isCorrect: false,
        },
        {
          text: "박지성",
          isCorrect: false,
        },
        {
          text: "이청용",
          isCorrect: false,
        },
      ],
    },
    {
      q: "지난시즌 10-10을 달성한 선수는 몇명?",
      a: [
        {
          text: "2",
          isCorrect: false,
        },
        {
          text: "3",
          isCorrect: true,
        },
        {
          text: "4",
          isCorrect: false,
        },
      ],
    },
    {
      q: "이 선수의 전 소속팀은?",
      img: "/epl/firmino.jpg",
      a: [
        {
          text: "호펜하임",
          isCorrect: true,
        },
        {
          text: "레버쿠젠",
          isCorrect: false,
        },
        {
          text: "슈투트가르트",
          isCorrect: false,
        },
        {
          text: "헤르타",
          isCorrect: false,
        },
      ],
    },
    {
      q: "PFA 올해의 선수 수상자가 아닌 선수는?",
      a: [
        {
          text: "에덴 아자르",
          isCorrect: false,
        },
        {
          text: "가레스 베일",
          isCorrect: false,
        },
        {
          text: "리야드 마레즈",
          isCorrect: false,
        },
        {
          text: "헤리 케인",
          isCorrect: true,
        },
      ],
    },
    {
      q: "티에리 앙리의 아스날 이적 전 팀은?",
      img: "/epl/henry.jpg",
      a: [
        {
          text: "AS 모나코",
          isCorrect: false,
        },
        {
          text: "유벤투스 FC",
          isCorrect: true,
        },
        {
          text: "리옹 FC",
          isCorrect: false,
        },
        {
          text: "보르도",
          isCorrect: false,
        },
      ],
    },
    {
      q: "이 선수의 소속팀이 아닌곳은?",
      img: "/epl/diyu.jpg",
      a: [
        {
          text: "LOSC 릴",
          isCorrect: false,
        },
        {
          text: "파리 생제르망 FC",
          isCorrect: false,
        },
        {
          text: "FC 바르셀로나",
          isCorrect: false,
        },
        {
          text: "AS로마",
          isCorrect: true,
        },
      ],
    },
    {
      q: "맨유 소속으로 호날두가 기록한 해트트릭(리그) 횟수는?",
      img: "/epl/ronaldo.jpg",
      a: [
        {
          text: "1번",
          isCorrect: true,
        },
        {
          text: "5번",
          isCorrect: false,
        },
        {
          text: "7번",
          isCorrect: false,
        },
        {
          text: "10번",
          isCorrect: false,
        },
      ],
    },
    {
      q: "이 선수는 누구일까?",
      img: "/epl/team.jpg",
      a: [
        {
          text: "펠라이니",
          isCorrect: false,
        },
        {
          text: "에브라",
          isCorrect: true,
        },
        {
          text: "나니",
          isCorrect: false,
        },
        {
          text: "발렌시아",
          isCorrect: false,
        },
      ],
    },
    {
      q: "리그 20골 이상을 경험해보지 못한 선수는?",
      a: [
        {
          text: "제이미 바디",
          isCorrect: false,
        },
        {
          text: "대니 잉스",
          isCorrect: false,
        },
        {
          text: "사디오 마네",
          isCorrect: false,
        },
        {
          text: "에당 아자르",
          isCorrect: true,
        },
      ],
    },
    {
      q: "20/21 시즌 첼시의 최다 득점 선수는?",
      a: [
        {
          text: "베르너",
          isCorrect: true,
        },
        {
          text: "조르지뉴",
          isCorrect: false,
        },
        {
          text: "마운트",
          isCorrect: false,
        },
        {
          text: "하베르츠",
          isCorrect: false,
        },
      ],
    },
  ],
}

//리듀서
export default function score(state = initialState, action) {
  switch (action.type) {
    case CHECK_CORRECT:
      return {
        ...state,
        score: action.payload.isCorrect ? state.score + 10 : state.score,
      }
    case NEXT_PAGE:
      return {
        ...state,
        page: state.page + 1,
      }
    case RESET:
      return {
        ...state,
        score: 0,
        page: 0,
      }
    default:
      return state
  }
}
