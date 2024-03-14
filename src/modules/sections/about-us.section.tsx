import React from "react";
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { AboutUsPages } from "src/const/about-us.const";
import { Logo } from "src/modules/layout/Logo";

type ItemProp = {
  type: string;
  className: string;
  value: string | React.ReactNode;
};

const json: {
  [k in AboutUsPages]: {
    title: string;
    sections: { className: string; children: ItemProp[] }[];
  };
} = {
  join: {
    title: "加入我们",
    sections: [
      {
        className: "",
        children: [
          {
            type: "",
            className: "",
            value: (
              <div style={{ lineHeight: "4rem" }}>
                <span className="ml-8">
                  <Logo />
                </span>
                <span>
                  &nbsp;
                  是一家专业的咨询企业，更是一个充满智慧、富有挑战、洋溢热情、专业敬业的行业，一个让您为之激动、为之奔波、为之自豪的行业。
                </span>
                <p>
                  <span className="ml-8">梦想大舞台，有梦你就来，</span>
                  <Logo />
                  <span> 全体员工，期待您的加入！</span>
                </p>
              </div>
            ),
          },
        ],
      },
      {
        className: "",
        children: [
          {
            type: "",
            className: "",
            value: (
              <div>
                <strong>温馨提示：</strong>
                <span>
                  如果您与我们志同道合，展望未来，憧憬一起有所作为，希望加入我们，请移步到
                </span>
                <a href="/about-us/call" className="mx-2 text-blue-700">
                  联系我们
                </a>
              </div>
            ),
          },
        ],
      },
    ],
  },
  call: {
    title: "联系我们",
    sections: [
      {
        className: "",
        children: [
          {
            type: "",
            className: "flex",
            value: (
              <>
                <PhoneIcon className="h-6 w-6" color="skyblue" />
                <strong className="ml-1">电话：</strong>
                <span>18823740384 (周老师)</span>
              </>
            ),
          },
        ],
      },
      {
        className: "",
        children: [
          {
            type: "",
            className: "flex",
            value: (
              <>
                <EnvelopeIcon className="h-6 w-6" color="skyblue" />
                <strong className="ml-1">邮箱：</strong>
                <span>xxx@qq.com</span>
              </>
            ),
          },
        ],
      },
      {
        className: "flex",
        children: [
          {
            type: "",
            className: "flex",
            value: (
              <>
                <MapPinIcon className="w-6 h-6" color="skyblue" />
                <strong className="ml-1">地址：</strong>
                <span>深圳市龙华区观湖街道松轩社区大布头路339号厂房301</span>
              </>
            ),
          },
        ],
      },
    ],
  },
};

export function AboutUsSection({ page }: { page: AboutUsPages }) {
  const data = json[page];

  if (!data) {
    return <div>没有数据</div>;
  }

  const { title, sections } = data;

  return (
    <div>
      <div>
        <span className="text-3xl">{title}</span>
      </div>

      <hr className="mt-10" />
      <div>
        {sections.map(({ className, children }, index) => {
          const key = `about-us-${index}`;
          return (
            <div key={key} className="mt-10">
              <div className={className}>
                {children.map((item, i) => {
                  const k = `${key}-${i}`;
                  return (
                    <div key={k} className={item.className}>
                      {item.value}
                    </div>
                  );
                })}
              </div>
              <hr className="mt-10" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
