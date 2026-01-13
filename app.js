const contentItems = [
  {
    id: "bilibili-1",
    title: "公开视频（B站）",
    type: "video",
    date: "",
    venue: "Bilibili",
    tags: ["Seminar", "Systems"],
    summary: "公开视频入口，可替换为具体报告标题与摘要。",
    url: "https://www.bilibili.com/video/BV1XP4y1S7cP/?spm_id_from=333.337.search-card.all.click&vd_source=caef5ae5298859e6ac85b6e13ed27634",
    featured: true,
  },
  {
    id: "bilibili-2",
    title: "公开视频（B站）",
    type: "video",
    date: "",
    venue: "Bilibili",
    tags: ["Talk", "Research"],
    summary: "公开视频入口，可替换为具体报告标题与摘要。",
    url: "https://www.bilibili.com/video/BV1dV411F781/?spm_id_from=333.337.search-card.all.click&vd_source=caef5ae5298859e6ac85b6e13ed27634",
    featured: false,
  },
  {
    id: "zhihu-1",
    title: "专栏文章（知乎）",
    type: "article",
    date: "",
    venue: "Zhihu",
    tags: ["Essay", "Research"],
    summary: "专栏文章入口，可替换为具体标题与摘要。",
    url: "https://zhuanlan.zhihu.com/p/1927846360478089645#showWechatShareTip?utm_source=wechat_session&utm_medium=social&s_r=0",
    featured: false,
  },
  {
    id: "zhihu-2",
    title: "专栏文章（知乎）",
    type: "article",
    date: "",
    venue: "Zhihu",
    tags: ["Essay", "Systems"],
    summary: "专栏文章入口，可替换为具体标题与摘要。",
    url: "https://zhuanlan.zhihu.com/p/547780818?utm_source=wechat_session&utm_medium=social&s_r=0",
    featured: false,
  },
  {
    id: "taie-repo",
    title: "Tai-e 开源仓库",
    type: "repo",
    date: "",
    venue: "GitHub",
    tags: ["Tooling", "Static Analysis"],
    summary: "课题组开源工具与研究实践的代码仓库入口。",
    url: "https://github.com/pascal-lab/Tai-e",
    featured: true,
  },
  {
    id: "wechat-1",
    title: "公众号文章（微信）",
    type: "article",
    date: "",
    venue: "WeChat",
    tags: ["Highlights", "Outreach"],
    summary: "公众号文章入口，可替换为具体标题与摘要。",
    url: "https://mp.weixin.qq.com/s/AwIJQ1zBmkC2FV8kLZS0NA",
    featured: false,
  },
  {
    id: "atc25",
    title: "ATC 2025 论文相关解读",
    type: "paper",
    date: "2025",
    venue: "ATC",
    tags: ["Paper", "Systems"],
    summary: "论文解读与对外传播文章入口。",
    url: "https://mp.weixin.qq.com/s/uV95fkNesiwYESqalg8GKw",
    featured: true,
  },
  {
    id: "eurosys25-review",
    title: "EuroSys 2025 论文评述",
    type: "article",
    date: "2025",
    venue: "Blog",
    tags: ["Review", "Distributed"],
    summary: "来自业界研究者的评述文章。",
    url: "https://muratbuffalo.blogspot.com/2025/04/multi-grained-specifications-for.html",
    featured: false,
  },
  {
    id: "tla-repo",
    title: "ZooKeeper TLA+ 规格仓库",
    type: "repo",
    date: "",
    venue: "GitHub",
    tags: ["Formal Spec", "ZooKeeper"],
    summary: "分布式系统形式化规格与验证实践。",
    url: "https://github.com/Disalg-ICS-NJU/zookeeper-tla-spec",
    featured: false,
  },
  {
    id: "eurosys24-video",
    title: "EuroSys 2024 公开视频",
    type: "video",
    date: "2024",
    venue: "Bilibili",
    tags: ["Conference", "Systems"],
    summary: "会议公开视频入口，可替换为具体标题与摘要。",
    url: "https://www.bilibili.com/video/BV1c1421i7iG",
    featured: false,
  },
  {
    id: "sandtable-repo",
    title: "SandTable 开源仓库",
    type: "repo",
    date: "",
    venue: "GitHub",
    tags: ["Tooling", "Systems"],
    summary: "系统研究工程化实践的开源仓库入口。",
    url: "https://github.com/tangruize/SandTable",
    featured: false,
  },
  {
    id: "wsp",
    title: "公开内容（NJU WSP）",
    type: "article",
    date: "",
    venue: "NJU WSP",
    tags: ["Workshop", "Public"],
    summary: "公开内容入口，可替换为具体标题与摘要。",
    url: "https://wsp.njude.com.cn/prev/public?id=22266",
    featured: false,
  },
  {
    id: "neqlips",
    title: "面向程序验证的数学定理证明",
    type: "repo",
    date: "",
    venue: "GitHub",
    tags: ["Theorem Proving", "Program Verification"],
    summary: "用于程序验证的数学定理证明相关研究与实现。",
    url: "https://github.com/Lizn-zn/NeqLIPS",
    featured: false,
  },
  {
    id: "sirismt",
    title: "面向程序验证的 SMT 优化",
    type: "repo",
    date: "",
    venue: "GitHub",
    tags: ["SMT", "Program Verification"],
    summary: "面向程序验证的 SMT 求解优化工具与研究实践。",
    url: "https://github.com/SoftWiser-group/SiriSMT",
    featured: false,
  },
  {
    id: "clause2inv",
    title: "面向程序验证的不变式生成 Clause2Inv",
    type: "repo",
    date: "",
    venue: "GitHub",
    tags: ["Invariant Generation", "Verification"],
    summary: "面向程序验证的不变式生成方法与实现。",
    url: "https://github.com/SoftWiser-group/Clause2Inv",
    featured: false,
  },
  {
    id: "lam4inv",
    title: "面向程序验证的不变式生成 LaM4Inv",
    type: "repo",
    date: "",
    venue: "GitHub",
    tags: ["Invariant Generation", "Verification"],
    summary: "面向程序验证的不变式生成方法与实现。",
    url: "https://github.com/SoftWiser-group/LaM4Inv",
    featured: false,
  },
  {
    id: "nesy-programming",
    title: "神经符号融合计算的可解释性问题",
    type: "repo",
    date: "",
    venue: "GitHub",
    tags: ["Neuro-Symbolic", "Explainability"],
    summary: "神经符号融合计算中的可解释性研究与实现。",
    url: "https://github.com/Lizn-zn/Nesy-Programming",
    featured: false,
  },
  {
    id: "soften-nesy",
    title: "神经符号融合计算的符号接地问题",
    type: "repo",
    date: "",
    venue: "GitHub",
    tags: ["Neuro-Symbolic", "Grounding"],
    summary: "神经符号融合计算中的符号接地研究与实现。",
    url: "https://github.com/SoftWiser-group/Soften-NeSy-learning",
    featured: false,
  },
  {
    id: "nesy-shortcuts",
    title: "神经符号融合计算的捷径满足问题",
    type: "repo",
    date: "",
    venue: "GitHub",
    tags: ["Neuro-Symbolic", "Robustness"],
    summary: "神经符号融合计算中的捷径满足问题研究与实现。",
    url: "https://github.com/SoftWiser-group/NeSy-without-Shortcuts",
    featured: false,
  },
  {
    id: "advoc",
    title: "软件演进过程中的代码注释一致性问题",
    type: "repo",
    date: "",
    venue: "GitHub",
    tags: ["Software Evolution", "Documentation"],
    summary: "面向软件演进的代码注释一致性研究与工具实现。",
    url: "https://github.com/SoftWiser-group/AdvOC",
    featured: false,
  },
  {
    id: "uncertainty-alignment",
    title: "智能部件演进中的回归错误问题",
    type: "repo",
    date: "",
    venue: "GitHub",
    tags: ["Regression", "Intelligent Systems"],
    summary: "智能部件演进中的回归错误识别与对齐研究。",
    url: "https://github.com/Lizn-zn/Uncertainty-Alignment",
    featured: false,
  },
];

const contentList = document.getElementById("content-list");
const featuredList = document.getElementById("featured-list");
const searchInput = document.getElementById("search-input");
const filterButtons = document.querySelectorAll(".filter-btn");
const statCount = document.getElementById("stat-count");

const createCard = (item) => {
  const card = document.createElement("article");
  card.className = "content-card fade-up";
  card.innerHTML = `
    <div class="content-meta">
      <span>${item.venue || ""}</span>
      <span>${item.type.toUpperCase()}</span>
    </div>
    <div>
      <h3 class="content-title">${item.title}</h3>
      <p class="content-summary">${item.summary}</p>
    </div>
    <div class="tag-list">
      ${item.tags.map((tag) => `<span>${tag}</span>`).join("")}
    </div>
    <a class="card-link" href="${item.url}" target="_blank" rel="noopener">访问内容 →</a>
  `;
  return card;
};

const renderCards = (items) => {
  contentList.innerHTML = "";
  items.forEach((item, index) => {
    const card = createCard(item);
    card.style.animationDelay = `${index * 0.05}s`;
    contentList.appendChild(card);
  });
};

const renderFeatured = () => {
  const featuredItems = contentItems.filter((item) => item.featured);
  featuredList.innerHTML = "";
  featuredItems.forEach((item, index) => {
    const card = createCard(item);
    card.style.animationDelay = `${index * 0.08}s`;
    featuredList.appendChild(card);
  });
};

const applyFilters = () => {
  const query = searchInput.value.trim().toLowerCase();
  const activeButton = document.querySelector(".filter-btn.active");
  const activeFilter = activeButton ? activeButton.dataset.filter : "all";

  const filtered = contentItems.filter((item) => {
    const matchesFilter = activeFilter === "all" || item.type === activeFilter;
    const haystack = `${item.title} ${item.summary} ${item.tags.join(" ")}`.toLowerCase();
    const matchesQuery = !query || haystack.includes(query);
    return matchesFilter && matchesQuery;
  });

  renderCards(filtered);
};

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    applyFilters();
  });
});

searchInput.addEventListener("input", applyFilters);

statCount.textContent = String(contentItems.length);
renderFeatured();
renderCards(contentItems);
