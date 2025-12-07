// 경력 년차 자동 계산
const calculateExperience = (startDate) => {
  const start = new Date(startDate)
  const now = new Date()
  const diffYears = (now - start) / (1000 * 60 * 60 * 24 * 365)
  return Math.ceil(diffYears) + '년차'
}

// 포트폴리오 데이터
export const profile = {
  name: '김지훈',
  title: '백엔드 개발자',
  careerStartDate: '2022-12-01', // 첫 취업 일자
  get experience() {
    return calculateExperience(this.careerStartDate)
  },
  email: 'tlqhrm@gmail.com',
  github: 'github.com/tlqhrm',
  githubUrl: 'https://github.com/tlqhrm',
  education: {
    school: '강남대학교 부동산학과',
    period: '2014.03 - 2020.08'
  }
}

export const introText = {
  greeting: '안녕하세요!',
  main: '스타트업에서 근무하며 다양한 서비스를 직접 경험해왔습니다. 서비스의 기획 단계부터 참여해 인프라 구축, DB 설계, 비즈니스 로직 등 백엔드 전반을 책임졌습니다. 작은 조직의 특성상 하나의 역할에 머무르지 않고 서비스 전반을 직접 설계하고 운영하며 빠르게 성장할 수 있었습니다.',
  paragraphs: [
    '새로운 일을 맡으면 부담보다는 배우고 해결할 기회라고 생각합니다. 모르는 영역이라도 스스로 공부해 구현하고, 필요하다면 주 업무가 아니어도 팀에 필요한 일이라면 참여합니다.',
    '팀 안에서는 혼자 결정하기보다는 제 의견을 적극적으로 공유하고 다른 의견과 조율해 더 나은 방법을 찾으려고 합니다.',
    '무엇보다 기획 의도를 제대로 파악하고, 사용자가 실제로 어떻게 쓰게 될지 생각하며 기능을 설계합니다. 기능 하나하나가 서비스 전체 흐름에 맞아야 한다고 생각합니다.'
  ]
}

export const skills = {
  backend: ['Node.js (Nest.js, Moleculer)'],
  database: ['MySQL', 'PostgreSQL', 'Redis', 'Firestore'],
  devops: ['AWS', 'Naver Cloud Platform', 'Docker', 'Kubernetes'],
  frontend: ['React','React Native' ,'Vue']
}

// 여러 회사 경력을 배열로 관리
export const companies = [
  {
    id: 'ucware',
    name: '유씨웨어',
    period: '2025.09 ~ 재직중',
    isCurrent: true,
    size: '중소기업 (40명 내외)',
    funding: null,
    mainWork: ['메신저 서비스 백엔드'],
    experienceGroups: [
      {
        title: 'SaaS 메신저 서비스',
        description: '유씨웍스(UCWorks)와 스클라인(Schoolline)이라는 SaaS 메신저 서비스의 백엔드를 개발하고 있습니다.',
        projects: [
          {
            name: 'Schoolline',
            subtitle: 'SaaS 기업 및 학교 메신저 서비스',
            period: '2025.09 - 현재',
            tasks: [
              '메신저 서비스 백엔드 개발'
            ],
            tags: ['SaaS', '메신저', '백엔드'],
            techStack: ['Node.js', 'Moleculer', 'MariaDB', 'Redis', 'Kubernetes', 'Docker', 'AWS', 'React'],
            icon: 'chat'
          }
        ]
      }
    ]
  },
  {
    id: 'sgrsoft',
    name: '에스지알소프트',
    period: '2022.12 ~ 2025.03',
    isCurrent: false,
    size: '스타트업 (10명 내외)',
    funding: '시리즈 A',
    mainWork: ['네이버 클라우드 플랫폼 서비스', '미디어 솔루션'],
    experienceGroups: [
      {
        title: '네이버 클라우드 플랫폼 서비스',
        description: '네이버 클라우드 플랫폼 서비스의 백엔드를 담당했습니다. 외부 부서와 지속적으로 협업하며 다양한 업무 프로세스를 경험했습니다.',
        projects: [
          {
            name: 'Video Player Enhancement',
            subtitle: '네이버 클라우드 비디오 플레이어 서비스 및 분석 시스템',
            period: '2023.04 - 2025.03',
            tasks: [
              '퍼블릭-프라이빗 서브넷 구조를 사용한 인프라 구축',
              '백엔드 담당자로 주간 회의에 참여하여 신규 기능 기획 및 유지보수 항목을 협의',
              '플레이어에서 사용자 시청 행동을 분석하는 시스템을 개발하고, 데이터를 조합하여 통계로 제공',
              '클라우드 서비스 운영을 위한 보안 컴플라이언스 적용 및 문서 작성',
              'Email, OTP를 활용한 2차 인증 기능 구현'
            ],
            tags: ['미디어 플레이어', '클라우드 서비스', '보안 컴플라이언스', '커뮤니케이션'],
            techStack: ['Node.js', 'Nuxt.js', 'Go', 'PostgreSql', 'Redis', 'NCP', 'Kafka'],
            icon: 'video'
          }
        ]
      },
      {
        title: '미디어 솔루션',
        description: '네이버 클라우드의 미디어 서비스를 사용하여 다양한 미디어 솔루션을 개발했습니다.',
        projects: [
          {
            name: '비디오24',
            subtitle: 'B2B Online Video Platform 솔루션',
            period: '2023.12 - 2025.03',
            tasks: [
              '라이브 스트리밍, VOD 업로드 시스템 유지보수',
              '관리자 CMS의 관리/조회/통계 API 개발'
            ],
            tags: ['Live/VOD 스트리밍', '관리자 페이지', '통계 기능'],
            techStack: ['Node.js', 'Nuxt.js', 'MySQL', 'NCP', 'Redis'],
            icon: 'monitor'
          },
          {
            name: '쇼츠24',
            subtitle: '쇼핑몰에서 사용하는 숏폼 솔루션',
            period: '2024.02 - 2025.03',
            tasks: [
              '카페24 API와 Webhook을 활용해 숏폼 콘텐츠와 상품 정보를 자동 연동 및 최신화',
              '사용량 기반의 계단식 과금 모델을 설계·적용하고, 자동 결제 및 실패 재시도 기능을 개발',
              '무료 체험기간과 크레딧 제공·차감·만료 기능을 개발하여 요금 체계에 연동'
            ],
            tags: ['숏폼', '과금 시스템', '크레딧 관리'],
            techStack: ['Node.js', 'Nuxt.js', 'MySQL', 'NCP'],
            icon: 'smartphone'
          },
          {
            name: '라이브24',
            subtitle: '쇼핑몰에서 사용하는 라이브 커머스 솔루션',
            period: '2022.12 - 2025.03',
            tasks: [
              '라이브 방송에 필요한 방송 전·후의 비즈니스 로직 유지보수',
              '방송 시작 시 브라우저 Web Push를 통한 유저 알림 기능 개발',
              '무한스크롤에 필요한 랜덤 플레이리스트 API 구현',
              'OpenAI API를 활용해 매출 정보, 채팅 내역 요약, 사용자 맞춤형 응답을 제공하는 대화형 챗봇 개발'
            ],
            tags: ['라이브 커머스', 'Web Push', '챗봇'],
            techStack: ['Node.js', 'Vue.js', 'Go', 'MySQL', 'NCP', 'Firestore', 'PHP'],
            icon: 'live'
          }
        ]
      }
    ]
  }
]

export const projects = [
  {
    name: 'TapPlace',
    subtitle: '간편결제 매장 찾기 서비스',
    period: '2022.06 - 2022.11',
    description: 'ApplePay 국내 정식 도입 전, 미리 ApplePay와 다른 간편결제 사용 가능한 매장을 보여주는 서비스입니다.',
    tasks: [
      '5인 팀 프로젝트에서 백엔드 전반 단독 개발',
      'Nest.js와 TypeORM을 사용한 백엔드 API 서버 구축',
      '프랜차이즈 웹사이트 크롤링을 통한 매장 데이터 수집 시스템 구축',
      'MySQL 공간 인덱스를 활용한 위치 기반 매장 검색 API 개발',
      '웹 페이지와 앱스토어 출시 및 서비스 운영'
    ],
    tags: ['팀 프로젝트', '웹 크롤링', '공간 인덱스', '위치 기반 서비스'],
    techStack: ['Node.js', 'Nest.js', 'TypeORM', 'MySQL', 'Oracle Cloud'],
    githubUrl: 'https://github.com/TapPlace',
    images: ['/images/tapplace1.png', '/images/tapplace2.png', '/images/tapplace3.png'],
    icon: 'map'
  },
  {
    name: '야매게임',
    subtitle: '고전 콘솔게임 웹 에뮬레이터 / 개인 프로젝트',
    period: '2022.05 - 2022.06',
    description: 'EmulatorJs를 이용해 웹에서 고전 콘솔게임을 실행시키고 세이브 파일을 서버에 저장하고, 불러올 수 있습니다.',
    tasks: [
      'Google OAuth2.0을 이용한 소셜 로그인 구현',
      '사용자별 게임 진행 상황 서버 저장/불러오기 기능',
      'HTML, CSS, JS로 윈도우 95 테마 적용',
      'Vue.js를 이용한 인기 순위 시스템 구현',
      'Express.js 기반 HTTP API 서버 구축'
    ],
    tags: ['개인 프로젝트', '고전게임', 'EmulatorJs', 'OAuth2.0'],
    techStack: ['Node.js', 'Express.js', 'Vue.js', 'MySQL', 'Oracle Cloud'],
    images: ['/images/yamegame1.png'],
    icon: 'gamepad'
  }
]

export const certifications = {
  devops: [
    {
      name: 'Certified Kubernetes Administrator (CKA)',
      date: '2025.06',
      tags: ['Kubernetes', '컨테이너 오케스트레이션']
    },
    {
      name: 'AWS Certified Solutions Architect (SAA)',
      date: '2025.05',
      tags: ['AWS', '솔루션 아키텍처']
    }
  ],
  domestic: [
    {
      name: '정보처리기사',
      date: '2022.06',
      tags: []
    },
    {
      name: '컴퓨터활용능력 1급',
      date: '2020.12',
      tags: []
    }
  ]
}

export const sectionTitles = {
  intro: '자기소개',
  'skills-backend': '기술 스택',
  experience: '경력',
  projects: '프로젝트',
  certifications: '자격증'
}
