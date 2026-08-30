// 模拟最新公告区域的公告数据
const noticeData = [
  {
    title: '2026民生资助工作开展通知',
    type: '资助公告',
    date: '2026-08-20',
    img: "https://tse3-mm.cn.bing.net/th/id/OIP-C.zXA1LAWvPN4BTEwu8PPJ1QHaEK?w=300&h=180&c=7&r=0&o=7&pid=1.7&rm=3"
  },
  {
    title: '惠民帮扶相关政策解读公告',
    type: '政策解读',
    date: '2026-08-18',
    img: "https://ts1.tc.mm.bing.net/th/id/OIP-C.bYFXcDI6-fpnqdoGmjGhYwHaE8?w=193&h=135&c=8&rs=1&qlt=90&r=0&o=6&pid=ImgAns&rm=2"
  },
  {
    title: '政务公开年度考核工作通知',
    type: '政务公开',
    date: '2026-08-15',
    img: "https://ts1.tc.mm.bing.net/th/id/OIP-C.EmSB5Z0ORLR5C_Nbu35EiAHaKa?w=193&h=272&c=8&rs=1&qlt=90&r=0&o=6&pid=ImgAns&rm=2"
  },
  {
    title: '公共服务场所开放时间调整公告',
    type: '办事指南',
    date: '2026-08-12',
    img: "https://ts1.tc.mm.bing.net/th/id/OIP-C.D55tp-gSLzlgBNe-Op5gowHaIZ?w=193&h=219&c=8&rs=1&qlt=90&r=0&o=6&pid=ImgAns&rm=2"
  },
  {
    title: '便民服务办事指南更新发布',
    type: '便民提示',
    date: '2026-08-10',
    img: "https://ts1.tc.mm.bing.net/th/id/OIP-C.afkQ8qsULqODnrd3z_V3NwHaFj?w=193&h=145&c=8&rs=1&qlt=90&r=0&o=6&pid=ImgAns&rm=2"
  },
  {
    title: '财政经费公开公示说明',
    type: '财政公示',
    date: '2026-08-08',
    img: "https://tse1-mm.cn.bing.net/th/id/OIP-C.VfDCslUUDaizRtJBb-ZOOQHaHa?w=165&h=180&c=7&r=0&o=7&pid=1.7&rm=3"
  },
  {
    title: '政务办事窗口办理须知公示',
    type: '公示公告',
    date: '2026-08-05',
    img: "https://tse2-mm.cn.bing.net/th/id/OIP-C.20ftSQRqf7ixX0PipnnmpgHaFj?w=227&h=180&c=7&r=0&o=7&pid=1.7&rm=3"
  },
  {
    title: '政务材料线上提交流程说明',
    type: '政策文件',
    date: '2026-08-03',
    img: "https://tse1-mm.cn.bing.net/th/id/OIP-C.QKwxjsJl4AkLUI0ihDbeCwAAAA?w=298&h=196&c=7&r=0&o=7&pid=1.7&rm=3"
  },
  {
    title: '政务服务窗口作息时间调整通知',
    type: '办事指南',
    date: '2026-08-01',
    img: "https://tse4-mm.cn.bing.net/th/id/OIP-C.xtO_6bW84Cd6fGDWZaji4AHaHa?w=167&h=180&c=7&r=0&o=7&pid=1.7&rm=3"
  },
  {
    title: '常见政务咨询问题汇总答复',
    type: '政策解读',
    date: '2026-07-28',
    img: "https://tse3-mm.cn.bing.net/th/id/OIP-C.xH_oXy-S6n2bNqvcfZbAagHaHa?w=163&h=180&c=7&r=0&o=7&pid=1.7&rm=3"
  }
];

// 获取最新公告下面的ul容器
const noticeUl = document.querySelector(".course.wrapper .bd ul");

// 渲染函数：生成li，完成复用
function renderNotice(list) {
  let htmlStr = "";
  // 判断数组为空，显示暂无公告
  if (list.length === 0) {
    htmlStr = "<li>暂无公告</li>";
    noticeUl.innerHTML = htmlStr;
    return;
  }
  // for循环
  for (let i = 0; i < list.length; i++) {
    let item = list[i];
    htmlStr += `
      <li>
        <a href="#">
          <div class="pic"><img src="${item.img}" alt=""></div>
          <div class="text">
            <h4>${item.title}</h4>
            <p><span>${item.type}</span> | <i>${item.date}</i></p>
          </div>
        </a>
      </li>
    `
  }
  noticeUl.innerHTML = htmlStr;
}
// 页面加载完成，直接渲染全部10条公告
renderNotice(noticeData);

// 政务公告区域
const govNoticeData = [
  {
    title: "民生帮扶政策公告",
    type: "公告",
    desc: "惠民政策发布",
    tag: "hot",
    img: "https://ts1.tc.mm.bing.net/th/id/OIP-C.f-6thKzOw2osMfeUpwvvgAHaFy?w=193&h=151&c=8&rs=1&qlt=90&r=0&o=6&pid=ImgAns&rm=2"
  },
  {
    title: "项目采购公示通知",
    type: "通知",
    desc: "采购评审工作",
    tag: "notice",
    img: "https://tse1-mm.cn.bing.net/th/id/OIP-C.9Rr7wmA2FMLyI6o2qwAiAQHaG-?w=203&h=191&c=7&r=0&o=7&pid=1.7&rm=3"
  },
  {
    title: "公共事务综合通知",
    type: "通知",
    desc: "公共事务公开通知",
    tag: "notice",
    img: "https://ts1.tc.mm.bing.net/th/id/OIP-C.z41RatkePJiKKS0pnqfxvAHaFj?w=193&h=145&c=8&rs=1&qlt=90&r=0&o=6&pid=ImgAns&rm=2"
  },
  {
    title: "财政经费信息公示",
    type: "公示",
    desc: "经费使用公开信息",
    tag: "public",
    img: "https://tse3-mm.cn.bing.net/th/id/OIP-C.ej2jeTVzVvlgfAXUNUC1vAHaEK?w=203&h=114&c=7&r=0&o=7&pid=1.7&rm=3"
  }
]

// 获取政务公告分类下面的ul容器
const govUl = document.querySelector(".fromt.wrapper .bd .bottom ul")

// 独立渲染函数，和最新公告renderNotice完全分开
function renderGovNotice(list) {
  let htmlStr = "";
  if (list.length === 0) {
    htmlStr = "<li>暂无公告</li>";
    govUl.innerHTML = htmlStr;
    return;
  }
  for (let i = 0; i < list.length; i++) {
    let item = list[i];
    htmlStr += `
      <li>
        <a href="#">
          <div class="pic"><img src="${item.img}" alt=""></div>
          <div class="text">
            <h4>${item.title}</h4>
            <p><span>${item.type}</span> | <i>${item.desc}</i></p>
          </div>
        </a>
      </li>
    `
  }
  govUl.innerHTML = htmlStr;
}
// 页面加载渲染全部政务公告
renderGovNotice(govNoticeData);

// 政务公告Tab切换（热门/通知/公示/文件）
const govTabItems = document.querySelectorAll(".fromt.wrapper .hd ul li a");
let govCurrentTag = "all";

// for循环绑定tab点击事件
for (let i = 0; i < govTabItems.length; i++) {
  let tab = govTabItems[i];
  tab.addEventListener("click", function () {
    // 清除所有高亮
    for (let j = 0; j < govTabItems.length; j++) {
      govTabItems[j].classList.remove("active");
    }
    this.classList.add("active");
    govCurrentTag = this.dataset.tag;

    // for循环+if筛选数据
    let filterGovArr = [];
    if (govCurrentTag === "all") {
      filterGovArr = govNoticeData;
    } else {
      for (let k = 0; k < govNoticeData.length; k++) {
        let tempItem = govNoticeData[k];
        if (tempItem.tag === govCurrentTag) {
          filterGovArr.push(tempItem);
        }
      }
    }
    renderGovNotice(filterGovArr);
  })
}


