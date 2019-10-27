import { LANG_VN, LANG_EN } from 'constants/lang'

const langEN = {
  fullName: 'Nguyen Vi Nhon',
  aboutMe: 'About Me',
  summary:
    'I have had working more than 3 years in Front End developer using: HTML/CSS/Javascript, React/React-Native.',
  hobbies: 'Hobbies: ',
  hobbies1: 'I like to play some sports: football, badminton,...',
  hobbies2: 'When I have freetime I like to watch movies, read book, travel, go drinking with friends,...',
  career: 'Career Goals: ',
  careers1: 'Learn new skills to improve my programming skills.',
  careers2: 'Learn and work to achieve next level, next position.',
  careers3: 'Reasonable salary.',
  contact: 'Contact',
  address: 'Address: 94 Thong Tay Hoi, Ward 10, District Go Vap, Ho Chi Minh City',
  phone: 'Phone: +84346878438',
  email: 'Email: vi.nhon.53th@gmail.com',
  skype: 'Skype: vinhon.nguyen',
  birthday: 'Birthday: 24 October 1993',
  linkedin: 'LinkedIn',
  expericence: 'EXPERIENCES',
  timelinePeriod1: '2011 - 2015',
  timelineTitle1: 'Student at Nha Trang University',
  timeLineDesc1: 'Learn knowledge about Information Technology',
  timelinePeriod2: 'Sep 2015 – Sep 2017',
  timelineTitle2: 'CO2 Company',
  timeLineDesc2:
    'FrontEnd Developer using HTML/CSS/Javascript to convert design to website, animation and responsive website',
  timelinePeriod3: 'Sep 2017 – Sep 2018',
  timelineTitle3: 'Infodation Company',
  timeLineDesc3:
    'FrontEnd Developer using HTML/CSS/Javascript/NodeJs/Angular/Selenium to develop a automation product and website',
  timelinePeriod4: 'Sep 2018 – Present',
  timelineTitle4: 'Aleph-Labs Company',
  timeLineDesc4:
    'ReactJS Developer using React/React-Native/Redux to develop website and application for mobile. Onsite 3 months in Thailand',
  footerTitle: 'This site is built by me using ReactJS and public on Github',
  footerLanguageEN: 'English',
  footerLanguageVN: 'Vietamese',
}

const langVN = {
  fullName: 'Nguyễn Vĩ Nhơn',
  aboutMe: 'Giới thiệu',
  summary:
    'Front End developer với kinh nghiệm hơn 3 năm, lập trình ngôn ngữ: HTML/CSS/Javascript, React/React-Native',
  hobbies: 'Sở thích: ',
  hobbies1: 'Chơi các môn thể thao: đá banh, cầu lông,...',
  hobbies2: 'Đọc sách, xem phim, du lịch,...',
  career: 'Mục tiêu:',
  careers1: 'Học kĩ năng mới, ngôn ngữ mới để phát triển kĩ năng lập trình của bản thân.',
  careers2: 'Học và làm để có thể đạt vị trí cao hơn.',
  careers3: 'Có mức thu nhập hợp lí.',
  contact: 'Liên hệ',
  address: 'Địa chỉ: 94 Thông Tây Hội, phường 10, quận gò vấp, thành phố Hồ Chí Minh',
  phone: 'Điện thoại: 0346878438',
  email: 'Email: vi.nhon.53th@gmail.com',
  skype: 'Skype: vinhon.nguyen',
  birthday: 'Ngày sinh: 24/10/1993',
  linkedin: 'LinkedIn',
  expericence: 'KINH NGHIỆM',
  timelinePeriod1: '2011 - 2015',
  timelineTitle1: 'Sinh viên trường đại học Nha Trang',
  timeLineDesc1: 'Học các kiến thức về công nghệ thông tin và lập trình',
  timelinePeriod2: '9/2015 – 9/2017',
  timelineTitle2: 'Công ty CO2',
  timeLineDesc2:
    'Lập trình viên Front End sử dụng các ngôn ngữ HTML/CSS/Javascript, chuyển mẫu thiết kế sang website, các animation và responsive website',
  timelinePeriod3: '9/2017 – 9/2018',
  timelineTitle3: 'Công ty Infodation',
  timeLineDesc3:
    'Lập trình viên Front End sử dụng các ngôn ngữ HTML/CSS/Javascript/NodeJs/Angular/Selenium để phát triển hệ thống tự động và giao diện website',
  timelinePeriod4: '9/2018 – Hiện nay',
  timelineTitle4: 'Công ty Aleph-Labs',
  timeLineDesc4:
    'Lập trình viên ReactJS sử dụng các ngôn ngữ React/React-Native/Redux để phát triển website và các ứng dụng cho điện thoại di động. Làm việc 3 tháng ở Thái Lan',
  footerTitle: 'Website này được viết sử dụng ReactJS và lưu trữ trên Github',
  footerLanguageEN: 'Tiếng Anh',
  footerLanguageVN: 'Tiếng Việt',
}

const initialState = {
  language: langEN,
}

export default function lang(state = initialState, { type }) {
  switch (type) {
    case LANG_VN:
      return { ...state, language: langVN }

    case LANG_EN:
      return { ...state, language: langEN }

    default:
      return state
  }
}
