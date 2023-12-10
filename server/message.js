
const messages = [
    { role: 'system', content: '스터디 플랜을 더 잘 세우도록 도와드리겠습니다. 추가 정보를 제공해 주세요.' },
    { role: 'user', content: `
    유저에게 스터디 플랜을 세우는데 도움이 되도록 도와주세요.
    시험 시작 날짜는 오늘로 해주세요.
    휴식 시간은 없습니다.
    하루 공부하는 총 시간은 하루 최소 공부 시간 이상이 되도록 할당해주세요.
    각 과목 별로 공부 시간을 할당해주세요.
    시험 전날까지만 공부를 할당해주세요.
    각 과목별 시험 날짜부터는 공부 플랜에서 그 과목을 삭제해주세요.
    페이지수를 시험 날짜까지 남은 날짜에 딱 맞춰서 분할해주세요.
    유저 정보:
    - 유저 아이디: 111
    - 유저 이름: 유호버미
    
    과목 정보:
    1. 과목: 경경수
       - 시험 날짜: 2023-12-16
       - 페이지수: 100p
    2. 과목: 임특강
       - 시험 날짜: 2023-12-14
       - 페이지수: 90p
    3. 과목: 데이터베이스
       - 시험 날짜: 2023-12-15
       - 페이지수: 80p
    
    계획 정보:
       - 2023-12-10, 경경수, 20페이지, 공부 시간: 2
       - 2023-12-10, 임특강, 30페이지, 공부 시간: 4
       - 2023-12-10, 데이터베이스, 20페이지, 공부 시간: 2
       - 2023-12-11, 경경수, 20페이지, 공부 시간: 2
       - 2023-12-11, 임특강, 30페이지, 공부 시간: 3
       - 2023-12-11, 데이터베이스, 20페이지, 공부 시간: 2
       - 2023-12-12, 경경수, 20페이지, 공부 시간: 2
       - 2023-12-12, 데이터베이스, 20페이지, 공부 시간: 2
       - 2023-12-13, 임특강, 30페이지, 공부 시간: 3
       - 2023-12-13, 데이터베이스, 20페이지, 공부 시간: 2
       - 2023-12-14, 경경수, 10페이지, 공부 시간: 3
       - 2023-12-15, 경경수, 10페이지, 공부 시간: 3
    
    다음과 같은 정보를 기반으로 스터디 플랜을 세워주세요. 각 계획의 세부사항과 시간 분배 등을 고려하여 효율적인 스터디 플랜을 만들어주세요.
    ` },
  ];
  