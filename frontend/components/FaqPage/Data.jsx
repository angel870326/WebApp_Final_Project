import React from 'react'
// style
import { primaryColor, brownColor, bgColor } from '@/styles/jss/animal-cloud-adoption';
import { box, innerBox, smallBox, bottomHightlight } from '@/styles/jss/components/FaqPage/faqStyle';
// mui component
import Link from '@mui/material/Link';


const text1_1 = (
  <div>
    您是否想過領養流浪動物，卻因為現實考量、社區規範、過敏體質... 等種種因素，而無法領養動物呢？<br /><br />
    您的心聲，我們聽見了！<br /><br />
    為了解決這個問題，我們開發了 Animal Cloud Adoption 網站。<br />
    透過認養的方式，可以讓收容所給流浪動物更好的保護，也可以讓大家盡一份心力，同時又不會覺得過於負擔。<br />
    除此之外，為了讓雲認養更有 fu，我們推出了<b style={bottomHightlight}>「線上觀看認養動物」</b>的功能，療癒您的每一天，也可以監督我們沒有道德危險。<br /><br />
    不論是熱愛動物的朋友，或是單純想支持社會公益的朋友，歡迎您加入動物雲認養✨<br />
    讓大愛不在困難，讓熱情在線上永續。訂閱 Animal Cloud Adoption ，讓我們給您 premium option！
  </div>
);
const text1_2 = (
  <div>
    <b style={smallBox}>e-mail: animal_cloud_adoption@gmail.com</b><br /><br />
    我們是 Animal Cloud Adoption 開發團隊，感謝您的愛戴與支持。<br />
    如果您有其他問題，請隨時聯繫我們的客服團隊，我們將很樂意為您提供幫助。
  </div>
);

const text2_1 = (
  <div>

    <div style={smallBox}>
        <span>註冊會員<br />登入會員</span>
    </div> &gt;&gt;

    <div style={smallBox}>
        <span>進入「
        <Link href="/animals" target="_blank" color="inherit" style={{color: brownColor}}>
          可認養動物列表
        </Link>
        」<br />點選動物資訊</span>
    </div> &gt;&gt;

    <div style={smallBox}>
        <span>加入認養計畫<br />填選認養資訊</span>
    </div> &gt;&gt;
    完成！<br /><br />
    ＊我們將寄信通知匯款，請靜候佳音。

  </div>
);
const text2_2 = (
  <div>

    我們共有三個方案，不會受到月份天數限制。<br /><br />
    <div style={box}>
      <b>小資方案</b>
      <div style={innerBox}>
        <span>30 天<br />100 元</span>
      </div>
    </div>

    <div style={box}>
    <b>中資方案</b>
      <div style={innerBox}>
        <span>60 天<br />180 元</span>
      </div>
    </div>

    <div style={box}>
    <b>大資方案</b>
      <div style={innerBox}>
        <span>90 天<br />270 元</span>
      </div>
    </div>
    
  </div>
);
const text2_3 = (
  <div>
    我們將提供您認養動物的影片資訊。<br />
    在「
    <Link href="/account" target="_blank" color="inherit" style={{color: brownColor}}>
      我的頁面
    </Link>
    」中，可以看到您認養動物的紀錄。<br />
    點選動物，即可觀賞動物們的即時狀態。<br /><br />
    ＊未來我們會開放申請認養證明，作為報稅資料。
  </div>
);


const data = [
  {
    id: 1, type: 'Animal Cloud Adoption',
    question: '什麼是 Animal Cloud Adoption？',
  answer: text1_1
  },
  {
    id: 2, type: 'Animal Cloud Adoption',
    question: '聯絡我們',
    answer: text1_2
  },
  
  {
    id: 3, type: '認養流程',
    question: '如何進行認養？',
    answer: text2_1
  },
  {
    id: 4, type: '認養流程',
    question: '有哪些認養計畫？',
    answer: text2_2
  },
  {
    id: 5, type: '認養流程',
    question: '認養後我會得到什麼？',
    answer: text2_3
  }
];

export default data;