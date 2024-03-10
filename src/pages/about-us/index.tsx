import React from "react";
import RootLayout from "src/modules/layout";
import {
  Square3Stack3DIcon,
  StarIcon,
  TagIcon,
} from "@heroicons/react/24/solid";

const items: { index: string; title: string; description: string[] }[] = [
  {
    index: "一",
    title: "体系认证",
    description: [
      "9001、14001、45001、50430、22000、HACCP、27001、20000、13485、HSE、15848阀门、11607医疗器械包装、15189医学实验室、（CCS)船级社、企业社会责任、诚信管理、国军标、汽车16949、航空质量管理、能源管理体系及各类体系认证。",
    ],
  },
  {
    index: "二",
    title: "食品类认证",
    description: [
      "有机（中国、欧盟、美国）认证、绿色食品认证、FSSC22000、全球良好农业规范认证、清真认证、BRC认证。",
    ],
  },
  {
    index: "三",
    title: "绿色环保类认证",
    description: [
      "绿色产品认证，绿色建材产品认证，碳足迹、FSC森林认证、十环产品等。",
    ],
  },
  {
    index: "四",
    title: "检测出口业务类",
    description: [
      "中国CCC、CQC、美国FCC、巴西INMETRO、日本TELEC、CPC、EAC、GOTS、BSCI、KC认证、FSC自由销售证书、FDA、UL、TUV、GS、PSE",
      "欧盟：CE、ROHS、REACH",
      "沙特：SASO，SFDA等各类检测出口认证。",
    ],
  },
  {
    index: "五",
    title: "信息技术涉密类",
    description: [
      "武器装备保密资格、武器装备生产许可、涉密信息系统集成、秘密载体印刷资质、ITSS、CCRC、CMMI、CSMM、DCMM、SPCA、CCIA。",
    ],
  },
  {
    index: "六",
    title: "企业信用资质：(各种荣誉、服务资质证书)",
    description: [
      "全国AAA信用等级证书、售后五星，保安服务，物业管理、园林绿化、消杀、病媒生物防治、垃圾处理、再生资源、安防设计施工、先进单位、优秀品牌、企业十强等.",
    ],
  },
];

const strengths: { keyword: string; description: string }[] = [
  { keyword: "广范", description: "咨询服务涉及行业多、领域多" },
  {
    keyword: "专业",
    description: "管理技术专，聚焦专项管理技术研究，拥有自主原创知识产权",
  },
  {
    keyword: "高效",
    description: "咨询水平高，服务过程客户体验好，有效助力客户价值创造",
  },
  {
    keyword: "务实",
    description: "服务成效实，以理论为基础，积极探索创新，解决现实问题",
  },
];

function AboutUs() {
  return (
    <RootLayout>
      <div className="w-full">
        <div className="bg-white rounded-s m-10">
          <div className="p-10">
            <div className="">
              <p className="flex items-center">
                <span className="text-3xl">公司简介</span>
                <span className="ml-2">
                  <TagIcon className="h-8 w-8" color="darkblue" />
                </span>
              </p>
              <p style={{ lineHeight: "2rem" }} className="m-4">
                <span>
                  {" "}
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;深圳市乐湛企业服务有限公司是一家具有深厚专业积淀和持续创新能力的咨询机构，为客户提供了管理咨询、认证咨询以及培训服务，业务范围包含&nbsp;
                </span>
                {items.map(({ title }, index) => (
                  <>
                    <a key={title} href={`#${title}`} className="text-blue-700">
                      {title}
                    </a>
                    {index < items.length - 1 ? <span>、</span> : null}
                  </>
                ))}
                &nbsp;等，客户包括众多行业的优秀企业，赢得了良好的口碑和信誉。
              </p>

              <div className="">
                <img
                  style={{ maxHeight: "600px" }}
                  src="/assets/images/cooperate.jpg"
                  alt="合作"
                  className="w-full"
                />
              </div>
              <br />
            </div>
            <hr />
            <div className="mt-10">
              <p className="flex">
                <span className="text-3xl">业务范围</span>
                <span className="ml-2">
                  <Square3Stack3DIcon className="h-8 w-8" color="darkblue" />
                </span>
              </p>

              <div className="mt-4">
                {items
                  .concat([
                    {
                      index: "七",
                      title:
                        "其他:药品GMP,医疗器械代理注册，一站式CRO，测量设备校准等",
                      description: ["..."],
                    },
                  ])
                  .map(({ index, title, description }) => (
                    <div key={title} className="p-4 sm:px-0 my-1 bg-gray-100">
                      <h3
                        id={title}
                        className="text-base font-semibold leading-7 text-blue-700"
                      >
                        {index}、{title}
                      </h3>
                      {description.map((s) => (
                        <p
                          key={s.slice(0, 20)}
                          className="mt-1 text-sm leading-6 text-gray-500"
                        >
                          {s}
                        </p>
                      ))}
                    </div>
                  ))}
              </div>
            </div>

            <hr className="mt-4" />

            <div className="mt-10">
              <div>
                <p className="flex items-center">
                  <span className="text-3xl">公司优势</span>
                  <span className="ml-2">
                    <StarIcon className="h-8 w-8" color="darkblue" />
                  </span>
                </p>
              </div>
            </div>
            <div className="mt-8">
              {strengths.map(({ keyword, description }) => (
                <div key={keyword}>
                  <div className="my-4 flex items-center">
                    <div className="h-[60px] w-[60px] border border-dashed font-bold border-gray-400 rounded-full flex justify-center items-center">
                      {keyword}
                    </div>
                    <p className="ml-5">{description}</p>
                  </div>
                  <hr />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </RootLayout>
  );
}

export default AboutUs;