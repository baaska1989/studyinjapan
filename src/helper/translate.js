const messages = {
    mn: {
        menu: {
            home: "Нүүр",
            lang: "Language",
            contact: "Холбоо барих",
            fontsize:"Үсгийн хэмжээ",
            standard:"Стандарт",
            zoom :"Томруулах",
// sidebar1
            sb10:"Японд суралцах сонирхол",
            sb11:"Дэвшилтэт технологи, хөгжсөн эдийн засаг",
            sb12:"Сэтгэл татам соёл",
            sb13:"Оршин суухад тохиромжтой амьдрах орчин",
            sb14:"Олон орноос ирэх гадаад оюутнууд",
            sb15:"Японы бүс нутаг бүрийн онцлог",
// sidebar2
            sb20:"Гадаадад суралцах төлөвлөгөө",
            sb21:"Боловсролын систем",
            sb22:"Сургуулиа мэдэх",
            sb23:"Япон хэлний байгууллага",
            sb24:"Мэргэшсэн сургалтын коллеж (мэргэшсэн курс)",
            sb25:"Технологийн коллеж",
            sb26:"Их сургууль (факультет)/Бага коллеж",
            sb27:"Төгсөх ангийн оюутан",

            sb30:"Гадаадад суралцах хэв маяг",
            sb31:"Засгийн газраас ивээн тэтгэдэг гадаад оюутан",
            sb32:"Гадаадад хувийн зардлаар суралцах",
            sb33:"Англи хэлээр заадаг зэрэг олгох хөтөлбөрүүд",
            sb34:"Богино хугацааны хөтөлбөр",
            sb35:"Шилжүүлэх элсэлт",
            sb36:"Гадаадад суралцах схем",
            sb37:"Японд суралцахад ашигладаг янз бүрийн шалгалтууд",
            sb38:"Гадаадад суралцах зардал",
            sb39:"Тэтгэлэг",
            sb3end:"Цагаачлалын журам, оршин суугаа байдлын тухай",
// sidebar3
            sb40:"Япон дахь амьдрал",
            sb41:"Амьжиргааны зардал болон өртөг",
            sb42:"Амьдрах байр сууц",
            sb43:"Даатгал",
            sb44:"Оршин суух зөвшөөрөлтэй холбоотой зүйлс",
            sb45:"Орон нутгийн засаг захиргаанаас өгөх дэмжлэг",
// sidebar4
            sb50:"Япон дахь хямралын менежмент",
            sb51:"Газар хөдлөлт",
            sb52:"Өдөр тутмын бэлтгэл чухал",
            sb53:"Тэр үед би яах ёстой вэ?",
            sb54:"Өдөр тутмын бэлтгэл",
            sb55:"Гамшгийн үед утас ажиллах уу?",
            sb56:"Би хаана нүүлгэн шилжүүлэх ёстой вэ?",
            sb57:"Гамшиг тохиолдоход би юу хийж чадах вэ?",
            sb60:"Гал",
            sb61:"Халаагчийг хэрхэн яаж зохицуулах вэ",
            sb62:"Гал гарсан тохиолдолд",
            sb63:"Осол",
            sb64:"Япон аюулгүй орон мөн үү?",
            sb65:"Энэ бол гэмт хэрэг!",
            sb66:"Унадаг дугуй маш аюултай",
            sb67:"Машин барих",
            sb70:"Анагаах ухаан",
            sb71:"Ханиад хүрэхгүйн тулд",
            sb72:"Өвдөхөд",
            sb73:"Яаралтай байдал (шөнийн цагаар, амралт)",
            sb74:"Даатгалын системийн тухай",
// sidebar5
            sb80:"Японд хөдөлмөр эрхлэх нь",
            sb81:"Цагийн ажил",
            sb82:"Мэргэжлийн дадлага",
            sb83:"Японд ажилд орох",
            sb84:"Хөдөлмөр эрхлэхтэй холбогдуулан оршин суух зөвшөөрлийн ангилал өөрчлөх тухай",

        }
    },
    en: {
        menu: {
            home: "Home",
            lang: "Language",
            contact: "Contact",
            fontsize:"Font size",
            standard:"Standard",
            zoom:"Zoom  ",
// sidebar1
            sb10:"Attractiveness of studying in Japan",
            sb11:"Advanced technology and developed economy",
            sb12:"Attractive culture",
            sb13:"Livable living environment",
            sb14:"Diverse international students",
            sb15:"Japan in numbers",
// sidebar2
            sb20:"Study abroad plan",
            sb21:"Education system",
            sb22:"Know the school",
            sb23:"Japanese language institution",
            sb24:"Specialized training school (specialized course)",
            sb25:"College of technology",
            sb26:"Universities/junior colleges",
            sb27:"Grad student",
            sb30:"Study abroad style",
            sb31:"Government-sponsored study abroad",
            sb32:"Study abroad at private expense",
            sb33:"English-taught degree programs",
            sb34:"Short-term program",
            sb35:"Transfer admission",
            sb36:"Study abroad flowchart",
            sb37:"Various exams used for studying in Japan",
            sb38:"Study abroad expenses",
            sb39:"Scholarship",
            sb3end:"About immigration procedures and status of residence",
// sidebar3
            sb40:"Life in Japan",
            sb41:"Cost of living and cost",
            sb42:"Residential apartment",
            sb43:"Insurance",
            sb44:"Things related to residence permit",
            sb45:"Support from local authorities",
// sidebar4
            sb50:"Crisis management in Japan",   
            sb51:"Earthquake",   
            sb52:"Daily preparation is important", 
            sb53:"What should I do at that moment?",
            sb54:"Daily preparation",  
            sb55:"Will the phone work in case of a disaster?", 
            sb56:"Where should I evacuate?",  
            sb57:"What can I do when disaster strikes?",
            sb60:"Fire",
            sb61:"How to handle heaters",
            sb62:'In case of fire',
            sb63:"Accident",
            sb64:"Is Japan a safe country?",
            sb65:"This is a crime!",
            sb66:"Bicycles are so dangerous",
            sb67:"Driving a car",
            sb70:"Medical",
            sb71:"To avoid catching a cold",
            sb72:"When I get sick",
            sb73:"Emergency (nighttime, holiday)",
            sb74:"About the insurance system",
//sidebar5
            sb80:"Employment in Japan",
            sb81:"Part time",
            sb82:"Professional practice",
            sb83:"Getting a job in Japan",
            sb84:"About changing the category of residence permit in connection with employment",
        }
    },
    jp: {
        menu: {
            home: "ホームページ",
            lang: "Language",
            contact: "コンタクト",
            fontsize: "フォントサイズ",
            standard:"標準",
            zoom:"ズーム",
//sidebar1
            sb10:"日本留学の魅力",
            sb11:"高度な技術と発展した経済",
            sb12:"魅力的な文化",
            sb13:"住みやすい住環境",
            sb14:"多様な留学生",
            sb15:"数字で見る日本",
// sidebar2
            sb20:"留学プラン",
            sb21:"教育システム",
            sb22:"学校を知る",
            sb23:"日本語教育機関",
            sb24:"専修学校（専門課程）",
            sb25:"高等専門学校",
            sb26:"大学・短期大学",
            sb27:"大学院生",
            sb30:"留学スタイル",
            sb31:"国費留学",
            sb32:"私費留学",
            sb33:"英語で教えられる学位プログラム",
            sb34:"短期プログラム",
            sb35:"転入学",
            sb36:"留学の流れ",
            sb37:"日本留学に必要な各種試験",
            sb38:"留学費用",
            sb39:"奨学金",
            sb3end:"入国手続きと在留資格について",
// sidebar3
            sb40:"日本での生活",
            sb41:"生活費と生活費",
            sb42:"住宅用アパート",
            sb43:"保険",
            sb44:"滞在許可に関すること",
            sb45:"地方自治体からのサポート",
// sidebar4
            sb50:"日本の危機管理",
            sb51:"地震",
            sb52:"日頃の備えが大切",
            sb53:"その時はどうすればいいでしょうか？",
            sb54:"日々の準備",
            sb55:"災害時に電話は通じますか？",
            sb56:"どこに避難すればいいですか？",
            sb57:"災害が起こったとき、私は何ができるでしょうか？",
            sb60:"火",
            sb61:"ヒーターの扱い方",
            sb62:'火災の場合',
            sb63:"事件",
            sb64:"日本は安全な国ですか？",
            sb65:"これは犯罪です！",
            sb66:"自転車はとても危険です",
            sb67:"車を運転する",
            sb70:"医学",
            sb71:"風邪を引かないようにするには",
            sb72:"病気になったとき",
            sb73:"緊急時（夜間・休日）",
            sb74:"保険制度について",
// sidebar5 
            sb80:"日本での就職",
            sb81:"パートタイム",
            sb82:"専門的診療",
            sb83:"日本で就職する",
            sb84:"雇用に伴う在留資格の変更について",
        }
    }
}

export default messages;