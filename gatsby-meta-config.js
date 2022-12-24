module.exports = {
  title: `OscarMoon`,
  description: `Blog posted about ...`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  author: `OscarMoon`,
  introduction: `Hello World! This is Oscar Moon Dev Blogs.`,
  siteUrl: `https://oscarmoon5256@github.io`, // Your blog site url
  social: {
    twitter: ``, // Your Twitter account
    github: `https://github.com/OscarMoon5256`, // Your GitHub account
    medium: ``, // Your Medium account
    facebook: ``, // Your Facebook account
    linkedin: ``, // Your LinkedIn account
    instagram: ``, // Your Instagram account
  },
  icon: `content/assets/felog.png`, // Add your favicon
  keywords: [`blog`],
  comment: {
    disqusShortName: '', // Your disqus-short-name. check disqus.com. oscarmoon5256-github-io
    utterances: 'OscarMoon5256/OscarMoon5256.github.io', // Your repository for archive comment
  },
  configs: {
    countOfInitialPost: 10, // Config your initial count of post
  },
  sponsor: {
    buyMeACoffeeId: 'jbee',
  },
  share: {
    facebookAppId: '', // Add facebookAppId for using facebook share feature v3.2
  },
  ga: '0', // Add your google analytics tranking ID
  ad: '', // Add your google adsense publisherId `ca-pub-xxxxxxxxxx`

  // metadata for About Page
  about: {
    author: {
      name: `문현준`,
      bio: {
        role: `개발자`,
        description: ['기록을 좋아하는', '능동적으로 일하는', '이로운 것을 만드는'],
        thumbnail: 'about-profile.png', // Path to the image in the 'asset' folder
      },
      social: {
        github: `https://github.com/OscarMoon5256`, // Your GitHub account
        linkedIn: ``, // Your LinkedIn account
        email: `hyeonjun5256@gmail.com`, // Your Email account
      },
    },
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        date: '',
        activity: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      {
        date: '2021.08 ~ 2022.03',
        activity: 'CodeStates Software Engineering Course 수료',
      },
      {
        date: '2022.04 ~ ',
        activity: 'AIPIM',
      },
    ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
      {
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      {
        title: 'Luca(실시간 아이디에이션 기획 툴)',
        description:
          'CodeStates에서 진행된 4주 프로젝트입니다. 아이디어를 기획할 때 흔히 사용되는 브레인스토밍에 활용하기 위해 개발되었습니다. 다른 사람과 실시간으로 마인드맵 형식으로 아이디어를 펼칠 수 있습니다. 개발을 시작한 후 처음 진행한 프로젝트였기에 짧은 시간동안 우여곡절이 많았지만 기획부터 설계, 개발에 이르는 일련의 과정들을 경험한 값진 시간이었습니다.',
        techStack: ['react', 'nodejs'],
        thumbnailUrl: 'luca.gif',
        links: {
          github: 'https://github.com/codestates/luca',
          demo: 'https://luca.solutions',
        },
      },
    ],
  },
}
