export const ingredients = [
  "똑부러짐",
  "뚝딱거림",
  "귀여움",
  "시크함",
  "다정함",
  "무뚝뚝함",
  "투 머치 토커",
  "과묵함",
  "유잼",
  "노잼",
  "섬세함",
  "둔감함",
  "대식가",
  "소식가",
  "호불호 확실",
  "팔랑귀",
  "밖순이",
  "집순이",
  "연애고수",
  "연애고자",
];

export type BaseType = {
  name: string;
  description: string;
};

export const baseByKey: Record<number, BaseType> = {
  1: { name: "보드카 (90º)", description: "우린 영혼의 단짝 친구지!" },
  2: { name: "브랜디 (60º)", description: "평생 친구가 되고 싶은 사이!" },
  3: { name: "진 (40º)", description: "요즘 부쩍 친해진 사이!" },
  4: { name: "소주 (16º)", description: "아직 모르지만 친해져보고 싶은 사이!" },
  5: { name: "맥주 (5º)", description: "아직까지는 이름만 아는 사이!" },
};

export type GarnishType = {
  name: string;
  description: string;
};

export const garnishByKey: Record<number, GarnishType> = {
  1: { name: "눈물", description: "이젠 거리두기 좀 합시다..." },
  2: { name: "스마일 감자", description: "평생 놀려주고 싶어!" },
  3: { name: "돌멩이", description: "내가 너의 걸림돌이 되어줄게." },
  4: {
    name: "입술",
    description: "움쫩쫩 액희야 \n 뽑뽀 갈겨도 되겐니 . . . ( ͡° ͜ʖ ͡°)",
  },
  5: { name: "결혼 반지", description: "평생 함께하자." },
};
