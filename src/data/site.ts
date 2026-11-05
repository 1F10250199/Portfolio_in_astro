// ここを書き換えるだけで中身が差し替わります

export const profile = {
  name: 'hamutaro',
  nameJa: 'はむたろ',
  // ヒーローで順番に切り替わる肩書き
  roles: ['Frontend Developer', 'UI Designer', 'Tinkerer', 'tea lover'],
  tagline: 'シンプルなものを、ちょっとだけ楽しく作っています。',
  location: 'Tokyo, Japan',
  about: [
    'Webフロントエンドを中心に、デザインから実装までを手がけています。',
    '使う人が「お、」と小さく反応するくらいの遊び心が好きです。',
  ],
  socials: [
    { label: 'GitHub', href: 'https://github.com/1F10250199' },
  ],
};

export const skills = [
  'Python', 'TypeScript', 'Ruby', 'C言語', 'CSS', 'Node.js', 'Astro', 'React', 'Tinkercad', 'Figma'
];

export type Accent = 'blue' | 'green';

export type Work = {
  slug: string;
  title: string;
  year: string;
  summary: string;
  description: string[];
  tags: string[];
  accent: Accent;
  // 表示用の絵文字 or 記号（画像を使う場合は image にパスを入れる）
  glyph: string;
  image?: string;
  link?: string;
};

export const works: Work[] = [

];
