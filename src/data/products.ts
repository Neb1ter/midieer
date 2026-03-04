export interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  rating: number;
  image: string;
  desc: string;
  features: {
    title: string;
    description: string;
    image?: string;
  }[];
  specs: {
    label: string;
    value: string;
  }[];
  images: string[]; // Gallery images
}

export const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "经典生酮巴斯克",
    category: "零糖蛋糕",
    price: "168.00",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1587888637140-849b25d80ef9?w=800&auto=format&fit=crop&q=80",
    desc: "精选进口奶油芝士，无面粉无蔗糖，入口即化，浓郁芝士香。",
    features: [
      {
        title: "0蔗糖，依然甜蜜",
        description: "采用赤藓糖醇与罗汉果甜苷黄金配比，还原白砂糖的纯正甜感，却不参与代谢。"
      },
      {
        title: "Kiri 奶油芝士",
        description: "坚持使用法国进口 Kiri 奶油芝士，奶香浓郁，口感顺滑，每一口都是享受。"
      },
      {
        title: "流心口感",
        description: "精准控温烘焙，造就外焦里嫩的独特口感，中心部位呈现半熟流心状态。"
      }
    ],
    specs: [
      { label: "净含量", value: "6英寸 (约450g)" },
      { label: "保质期", value: "冷藏3天，冷冻15天" },
      { label: "主要成分", value: "奶油芝士、稀奶油、赤藓糖醇、无菌蛋" },
      { label: "碳水含量", value: "2.5g / 100g" }
    ],
    images: [
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1626263567490-34909eb0925e?w=800&auto=format&fit=crop&q=80"
    ]
  },
  {
    id: "2",
    name: "奇亚籽全麦欧包",
    category: "健康大饼",
    price: "28.00",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&auto=format&fit=crop&q=80",
    desc: "高膳食纤维，饱腹感强，早餐代餐首选。",
    features: [
      {
        title: "超级食物加持",
        description: "添加奇亚籽、亚麻籽等超级食物，提供丰富的 Omega-3 和膳食纤维。"
      },
      {
        title: "低温发酵",
        description: "16小时低温慢发酵，释放谷物天然香气，口感更有韧性。"
      }
    ],
    specs: [
      { label: "净含量", value: "200g (2个装)" },
      { label: "保质期", value: "常温5天，冷冻30天" },
      { label: "主要成分", value: "全麦粉、奇亚籽、水、酵母" },
      { label: "GI值", value: "Low (<55)" }
    ],
    images: [
      "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=800&auto=format&fit=crop&q=80"
    ]
  },
  {
    id: "3",
    name: "手工艾草青团",
    category: "零糖青团",
    price: "45.00",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?w=800&auto=format&fit=crop&q=80",
    desc: "传统工艺，赤藓糖醇代糖，糯叽叽不升糖。",
    features: [
      {
        title: "鲜艾草汁",
        description: "只用清明前后的鲜嫩艾草榨汁，色泽翠绿，清香扑鼻。"
      },
      {
        title: "改良糯米皮",
        description: "在糯米粉中加入少量洋车前子壳粉，降低升糖指数，同时保持软糯口感。"
      }
    ],
    specs: [
      { label: "净含量", value: "4个装 (约240g)" },
      { label: "口味", value: "蛋黄肉松 / 豆沙" },
      { label: "甜味来源", value: "赤藓糖醇" },
      { label: "保存方式", value: "冷藏保存" }
    ],
    images: [
      "https://images.unsplash.com/photo-1529564879024-c54e7c220e8b?w=800&auto=format&fit=crop&q=80"
    ]
  },
  {
    id: "4",
    name: "生酮椰子能量球",
    category: "低卡零食",
    price: "39.00",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1599599810769-bcde5a45ddec?w=800&auto=format&fit=crop&q=80",
    desc: "优质脂肪来源，快速补充能量，办公解馋必备。",
    features: [
      {
        title: "MCT 油添加",
        description: "特别添加中链甘油三酯(MCT)，快速供能，帮助进入生酮状态。"
      },
      {
        title: "0反式脂肪",
        description: "拒绝代可可脂，拒绝氢化植物油，只有纯粹的椰子油和可可脂。"
      }
    ],
    specs: [
      { label: "净含量", value: "120g (约10颗)" },
      { label: "能量", value: "180kcal / 份" },
      { label: "主要成分", value: "椰蓉、椰子油、巴旦木、代糖" },
      { label: "适用人群", value: "生酮/低碳/健身人群" }
    ],
    images: [
      "https://images.unsplash.com/photo-1599599810629-94073574c3d4?w=800&auto=format&fit=crop&q=80"
    ]
  },
  {
    id: "5",
    name: "黑巧克力慕斯",
    category: "零糖蛋糕",
    price: "188.00",
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&auto=format&fit=crop&q=80",
    desc: "70%黑巧，丝滑口感，苦甜平衡，奢华享受。",
    features: [
      {
        title: "比利时黑巧",
        description: "选用70%比利时进口黑巧克力，保留可可天然的酸度与果香。"
      },
      {
        title: "空气感慕斯",
        description: "法式慕斯工艺，打入微小气泡，入口即化，轻盈如云朵。"
      }
    ],
    specs: [
      { label: "净含量", value: "6英寸" },
      { label: "可可含量", value: ">= 70%" },
      { label: "甜度", value: "微甜" },
      { label: "过敏原", value: "含有乳制品、大豆" }
    ],
    images: [
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476d?w=800&auto=format&fit=crop&q=80"
    ]
  },
  {
    id: "6",
    name: "坚果混合大礼包",
    category: "生酮系列",
    price: "88.00",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1606757366579-22a4666d953d?w=800&auto=format&fit=crop&q=80",
    desc: "低温烘焙，锁住营养，每日一把，健康加分。",
    features: [
      {
        title: "原味烘焙",
        description: "不加盐、不加糖、不油炸，低温慢烤，保留坚果原香。"
      },
      {
        title: "科学配比",
        description: "巴旦木、腰果、核桃仁、夏威夷果，均衡摄入多种微量元素。"
      }
    ],
    specs: [
      { label: "净含量", value: "500g (25g x 20包)" },
      { label: "保质期", value: "6个月" },
      { label: "储存条件", value: "阴凉干燥处" },
      { label: "产地", value: "全球甄选" }
    ],
    images: [
      "https://images.unsplash.com/photo-1536591375315-196000ea3678?w=800&auto=format&fit=crop&q=80"
    ]
  }
];
