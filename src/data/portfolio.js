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
  main: '스타트업에서 기획 단계부터 참여해 인프라 구축, DB 설계, 비즈니스 로직까지 백엔드 전반을 직접 설계하고 운영해왔습니다. 현재는 SaaS 메신저와 위치 기반 서비스의 백엔드를 담당하며, Kubernetes 기반 인프라 운영과 배포 관리도 함께 맡고 있습니다.',
  paragraphs: [
    '프론트엔드와 앱 개발에도 관심이 있어 회사 내 작은 서비스와 개인 프로젝트를 직접 개발해왔습니다. 덕분에 API를 설계할 때 클라이언트 입장에서 어떻게 사용될지 고려하며, 백엔드와 프론트엔드 양쪽 관점을 아우르는 설계를 지향합니다.',
    '새로운 영역도 직접 학습해 해결하고, 주 업무가 아니더라도 팀에 필요한 일이라면 적극적으로 참여합니다.',
    '무엇보다 기획 의도를 정확히 파악하고, 사용자가 실제로 어떻게 쓸지 생각하며 기능을 설계합니다.'
  ]
}

export const skills = {
  backend: ['Node.js (Nest.js, Moleculer)', 'TypeScript'],
  database: ['MySQL/MariaDB', 'PostgreSQL', 'Redis', 'Firestore'],
  devops: ['AWS', 'Naver Cloud Platform', 'Docker', 'Kubernetes', 'Cloudflare'],
  frontend: ['React', 'React Native']
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
    mainWork: ['메신저 및 위치 기반 서비스 백엔드'],
    experienceGroups: [
      {
        title: 'SaaS 메신저 및 위치 기반 서비스',
        description: '스쿨라인(Schoolline), SchoolFence 등 SaaS 서비스의 백엔드를 개발하고 있습니다. MSA 환경에서 실시간 채팅과 위치 기반 서비스를 개발 중입니다.',
        projects: [
          {
            name: 'Schoolline',
            subtitle: 'SaaS 학교 메신저 플랫폼',
            period: '2025.09 - 현재',
            tasks: [
              'Socket.IO와 NATS 기반 실시간 채팅 메시지 송수신 및 알림 라우팅 유지보수',
              '채팅, 쪽지, 알림, 푸시로 이어지는 메시지 전달 흐름 유지보수',
              '조직도 및 사용자 관리 기능 유지보수 및 개선',
              '관리자 웹에서 GitLab 이미지 태그를 선택해 특정 서비스에 배포할 수 있는 배포 간소화 기능 개발',
            ],
            tags: ['SaaS 메신저', '실시간 메시징', '배포 간소화', 'K8S 운영'],
            techStack: ['Node.js', 'Moleculer', 'Socket.IO', 'MariaDB', 'Redis', 'NATS', 'Kubernetes', 'Docker', 'AWS', 'React'],
            icon: 'chat'
          },
          {
            name: 'SchoolFence',
            subtitle: '실시간 위치 추적 및 지오펜스 안전 관리 서비스',
            period: '2026.02 - 현재',
            tasks: [
              '그룹 구성원의 현재 위치를 지도에서 확인할 수 있는 실시간 위치 추적 기능 개발',
              '설정된 목적지를 기준으로 구성원의 도착 및 이탈 여부를 판정하는 기능 구현',
              '지도에서 영역을 설정하고 구성원의 영역 이탈·복귀를 감지하는 지오펜스 기능 개발',
              'Socket.IO 이벤트와 FCM 푸시를 연동해 위치 변화, 도착/이탈, 영역 이탈 알림을 실시간 전파',
            ],
            tags: ['실시간 위치 추적', '도착/이탈 판정', '지오펜스', '실시간 알림'],
            techStack: ['Node.js', 'Moleculer', 'Socket.IO', 'MariaDB', 'Prisma', 'Redis', 'Firebase FCM', 'Kubernetes', 'Docker', 'AWS'],
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
              '플레이어에서 사용자 시청 행동을 분석하는 시스템을 개발하고, 데이터를 조합하여 통계로 제공',
              '클라우드 서비스 운영을 위한 보안 컴플라이언스 적용 및 문서 작성',
              'Email, OTP를 활용한 2차 인증 기능 구현'
            ],
            tags: ['미디어 플레이어', '클라우드 서비스', '보안 컴플라이언스', '커뮤니케이션'],
            techStack: ['Node.js', 'Nuxt.js', 'Go', 'PostgreSQL', 'Redis', 'NCP', 'Kafka'],
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
    name: 'ImHear',
    subtitle: '주변 음성 감지 macOS 메뉴바 앱',
    type: 'personal',  // 'personal' | 'team'
    status: 'active',  // 'active' | 'ended'
    vibeCoding: true,
    period: '2026.04 - 2026.05',
    description: '주변 사람의 말소리를 감지해 재생 중인 미디어를 자동으로 일시정지하거나 볼륨을 낮춰주는 macOS 메뉴바 앱입니다.',
    tasks: [
      'Apple SoundAnalysis와 AVAudioEngine을 활용한 실시간 음성 감지 기능 구현',
      '음성 감지 시 미디어 자동 일시정지/재개 또는 시스템 볼륨 낮춤 기능 구현',
      '마이크 선택, 감지 민감도, 볼륨 기준, 자동 재개 시간을 조절할 수 있는 메뉴바 UI 개발',
      'GitHub Releases 기반 자동 업데이트와 로그인 시 자동 실행 기능 구현',
      'Swift와 AppKit 기반의 경량 단일 바이너리 앱으로 배포'
    ],
    tags: ['개인 프로젝트', 'macOS 앱', '음성 감지', '메뉴바 앱'],
    techStack: ['Swift', 'AppKit', 'AVFoundation', 'SoundAnalysis', 'CoreAudio'],
    githubUrl: 'https://github.com/tlqhrm/ImHear',
    websiteUrl: 'https://tlqhrm.github.io/ImHear/',
    images: ['/images/imhear-screenshot.png', '/images/imhear-icon.png'],
    icon: 'mic'
  },
  {
    name: '라디오24',
    subtitle: '인터넷 라디오 스트리밍 앱',
    type: 'personal',  // 'personal' | 'team'
    status: 'active',  // 'active' | 'ended'
    vibeCoding: true,
    period: '2025.11 - 2025.12',
    description: 'React Native를 활용해 개발한 인터넷 라디오 스트리밍 앱입니다.',
    tasks: [
      '실시간 라디오 스트리밍 재생 기능 구현',
      'Cloudflare Workers와 D1을 활용한 서버리스 백엔드 구축',
      'Google Play Store 출시 및 운영',
        '안드로이드 오토 지원'
    ],
    tags: ['개인 프로젝트', 'React Native', '스트리밍', 'Serverless'],
    techStack: ['React Native', 'Cloudflare Workers', 'Cloudflare D1'],
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.kradio24.app&hl=ko',
    images: ['/images/radio24-1.webp','/images/radio24-2.webp','/images/radio24-3.webp'],
    icon: 'radio'
  },
  {
    name: 'TapPlace',
    subtitle: '간편결제 매장 찾기 서비스',
    type: 'team',
    status: 'ended',
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
    subtitle: '고전 콘솔게임 웹 에뮬레이터',
    type: 'personal',
    status: 'ended',
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
