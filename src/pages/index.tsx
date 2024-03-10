import React from "react";
import {
  AcademicCapIcon,
  ArrowRightIcon,
  BookOpenIcon,
  ChatBubbleLeftRightIcon,
  Cog8ToothIcon,
  NewspaperIcon,
} from "@heroicons/react/24/outline";
import {
  BookmarkIcon,
  CursorArrowRaysIcon,
  FlagIcon,
  HandThumbUpIcon,
  PhoneArrowUpRightIcon,
  TrophyIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import { MiniLogo } from "src/modules/layout/Logo";
import Carousel from "../modules/components/carousel";
import RootLayout from "../modules/layout";

const ImgArr = [
  { src: "/assets/carousel/carousel-1.svg", description: "Slide Item 1" },
  { src: "/assets/carousel/carousel-2.svg", description: "Slide Item 2" },
  { src: "/assets/carousel/carousel-3.svg", description: "Slide Item 3" },
  { src: "/assets/carousel/carousel-4.svg", description: "Slide Item 4" },
];
const subImgArr = [
  { src: "/assets/carousel/carousel-1.svg", description: "Slide Item 1" },
  { src: "/assets/carousel/carousel-2.svg", description: "Slide Item 2" },
  { src: "/assets/carousel/carousel-3.svg", description: "Slide Item 3" },
  { src: "/assets/carousel/carousel-4.svg", description: "Slide Item 4" },
];

export default function Home() {
  return (
    <RootLayout>
      {/* carousel */}
      <section className="w-full h-[60vh]">
        <Carousel card={ImgArr} className="" subCard={subImgArr} />
      </section>
      <section className="mt-10">
        <div className="text-center">
          <p className="text-xl">产品与服务</p>
          <span
            className="inline-block"
            style={{
              width: "50px",
              height: "1px",
              background: "red",
              borderBottom: "2px solid orange",
            }}
          />
        </div>
        <div className="text-center">
          <div className="text-center text-2xl text-gray-500 mt-2">
            <span>方案定制</span>
            <span className="inline-block w-[5vw]" />
            <span>培训赋能</span>
            <span className="inline-block w-[5vw]" />
            <span>驻场执行</span>
            <span className="inline-block w-[5vw]" />
            <span>助力客户高质量发展</span>
          </div>
          <br />
          <br />

          <div className="flex items-center justify-center">
            <a
              href="/"
              style={{ width: "300px" }}
              className="hover:shadow pt-3 pb-3"
            >
              <div className="flex justify-center">
                <ChatBubbleLeftRightIcon
                  color="darkblue"
                  className="h-16 w-16"
                  aria-hidden="true"
                />
              </div>
              <div className="mt-2">咨询管理</div>
              <div className="text-orange-400 mt-2">Management Consulting</div>
            </a>
            <a
              href="/"
              style={{ width: "300px" }}
              className="hover:shadow pt-3 pb-3"
            >
              <div className="flex justify-center">
                <AcademicCapIcon
                  color="darkblue"
                  className="h-16 w-16"
                  aria-hidden="true"
                />
              </div>
              <div className="mt-2">标准体系/ISO认证咨询</div>
              <div className="text-orange-400 mt-2">ISO certification</div>
            </a>
            <a
              href="/"
              style={{ width: "300px" }}
              className="hover:shadow pt-3 pb-3"
            >
              <div className="flex justify-center">
                <Cog8ToothIcon
                  color="darkblue"
                  className="h-16 w-16"
                  aria-hidden="true"
                />
              </div>
              <div className="mt-2">IT信息化咨询</div>
              <div className="text-orange-400 mt-2">
                Information consultation
              </div>
            </a>
            <a
              href="/"
              style={{ width: "300px" }}
              className="hover:shadow pt-3 pb-3"
            >
              <div className="flex justify-center">
                <BookOpenIcon
                  color="darkblue"
                  className="h-16 w-16"
                  aria-hidden="true"
                />
              </div>
              <div className="mt-2">低碳技术服务</div>
              <div className="text-orange-400 mt-2">
                Low carbon technology services
              </div>
            </a>
            <a
              href="/"
              style={{ width: "300px" }}
              className="hover:shadow pt-3 pb-3"
            >
              <div className="flex justify-center">
                <NewspaperIcon
                  color="darkblue"
                  className="h-16 w-16"
                  aria-hidden="true"
                />
              </div>
              <div className="mt-2">培训服务</div>
              <div className="text-orange-400 mt-2">Training services</div>
            </a>
          </div>
        </div>
      </section>

      <section
        className="mt-10"
        style={{
          height: "700px",
          backgroundImage: "url('/assets/background/index-page-bg.png')",
        }}
      >
        <div>
          <div className="text-center pt-20">
            <span className="text-xl text-white">客户案例</span>
          </div>
          <div className="text-center">
            <span
              className="inline-block"
              style={{
                width: "50px",
                height: "1px",
                background: "red",
                borderBottom: "2px solid orange",
              }}
            />
          </div>
          <div className="text-center text-white text-3xl mt-10">
            中国具有持续创新能力的管理咨询机构
          </div>
          <div className="text-orange-300 text-center mt-2">
            我们已经为9000多家企业提供了全方位咨询与培训服务
          </div>
          <div className="grid grid-cols-7 mt-10">
            <div className="bg-white col-start-2 text-center pb-8 pt-8 m-2">
              <a href="/" style={{ width: "200px" }} className="hover:shadow">
                <div className="hidden lg:flex justify-center">
                  <NewspaperIcon
                    color="darkblue"
                    className="h-16 w-16"
                    aria-hidden="true"
                  />
                </div>
                <div className="mt-4">智能制造</div>
              </a>
            </div>
            <div className="bg-white text-center pb-8 pt-8 m-2">
              <a href="/" style={{ width: "200px" }} className="hover:shadow">
                <div className="hidden lg:flex justify-center">
                  <NewspaperIcon
                    color="darkblue"
                    className="h-16 w-16"
                    aria-hidden="true"
                  />
                </div>
                <div className="mt-4">金融行业</div>
              </a>
            </div>
            <div className="bg-white text-center pb-8 pt-8 m-2">
              <a href="/" style={{ width: "200px" }} className="hover:shadow">
                <div className="hidden lg:flex justify-center">
                  <NewspaperIcon
                    color="darkblue"
                    className="h-16 w-16"
                    aria-hidden="true"
                  />
                </div>
                <div className="mt-4">IT信息技术</div>
              </a>
            </div>
            <div className="bg-white text-center pb-8 pt-8 m-2">
              <a href="/" style={{ width: "200px" }} className="hover:shadow">
                <div className="hidden lg:flex justify-center">
                  <NewspaperIcon
                    color="darkblue"
                    className="h-16 w-16"
                    aria-hidden="true"
                  />
                </div>
                <div className="mt-4">工程 / 装饰</div>
              </a>
            </div>
            <div className="bg-white text-center pb-8 pt-8 m-2">
              <a href="/" style={{ width: "200px" }} className="hover:shadow">
                <div className="hidden lg:flex justify-center">
                  <NewspaperIcon
                    color="darkblue"
                    className="h-16 w-16"
                    aria-hidden="true"
                  />
                </div>
                <div className="mt-4">房地产 / 物业服务</div>
              </a>
            </div>

            {/* tow row */}
            <div className="bg-white col-start-2 text-center pb-8 pt-8 m-2">
              <a href="/" style={{ width: "200px" }} className="hover:shadow">
                <div className="hidden lg:flex justify-center">
                  <NewspaperIcon
                    color="darkblue"
                    className="h-16 w-16"
                    aria-hidden="true"
                  />
                </div>
                <div className="mt-4">烟草行业</div>
              </a>
            </div>
            <div className="bg-white text-center pb-8 pt-8 m-2">
              <a href="/" style={{ width: "200px" }} className="hover:shadow">
                <div className="hidden lg:flex justify-center">
                  <NewspaperIcon
                    color="darkblue"
                    className="h-16 w-16"
                    aria-hidden="true"
                  />
                </div>
                <div className="mt-4">能源电力</div>
              </a>
            </div>
            <div className="bg-white text-center pb-8 pt-8 m-2">
              <a href="/" style={{ width: "200px" }} className="hover:shadow">
                <div className="hidden lg:flex justify-center">
                  <NewspaperIcon
                    color="darkblue"
                    className="h-16 w-16"
                    aria-hidden="true"
                  />
                </div>
                <div className="mt-4">医疗健康</div>
              </a>
            </div>
            <div className="bg-white text-center pb-8 pt-8 m-2">
              <a href="/" style={{ width: "200px" }} className="hover:shadow">
                <div className="hidden lg:flex justify-center">
                  <NewspaperIcon
                    color="darkblue"
                    className="h-16 w-16"
                    aria-hidden="true"
                  />
                </div>
                <div className="mt-4">政府/公共事业</div>
              </a>
            </div>
            <div className="bg-white text-center pb-8 pt-8 m-2">
              <a href="/" style={{ width: "200px" }} className="hover:shadow">
                <div className="hidden lg:flex justify-center">
                  <NewspaperIcon
                    color="darkblue"
                    className="h-16 w-16"
                    aria-hidden="true"
                  />
                </div>
                <div className="mt-4">贸易 / 物流</div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <div className="text-center">
          <p className="text-xl">关于我们</p>
          <span
            className="inline-block"
            style={{
              width: "50px",
              height: "1px",
              background: "red",
              borderBottom: "2px solid orange",
            }}
          />
          <div className="grid grid-cols-7">
            <p />
            <p className="col-span-5 relative">
              <span style={{ top: "-12px" }} className="relative">
                <MiniLogo />
              </span>
              &nbsp;公司是国内知名的从事战略管理、组织管理、运营管理、人力资源管理、企业文化等管理咨询和培训的综合性、一体化、全价值链知识服务平台，
              致力于为各类组织创造客户价值提供管理创新、工具应用和落地实施全程赋能，立足大湾区，放眼全中国，总部设在深圳，下属多家行业专业咨询子公司，在北京、上海、广州等多地设有分支机构。迄今为止已经为近万家企业提供了管理咨询与培训服务，享誉粤港澳大湾区，被评为全国50大机构。
            </p>
          </div>

          <div className="mt-10">
            <div>
              <a href="/">
                <div className="inline-block m-2">
                  <div className="inline-block border border-blue-900 p-6 rounded-full">
                    <BookmarkIcon
                      color="darkblue"
                      className="h-12 w-12"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="mt-3 text-blue-900">公司简介</p>
                </div>
              </a>

              <a href="/">
                <div className="inline-block m-2">
                  <div className="inline-block border border-blue-900 p-6  rounded-full">
                    <FlagIcon
                      color="darkblue"
                      className="h-12 w-12"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="mt-3 text-blue-900">企业文化</p>
                </div>
              </a>

              <a href="/">
                <div className="inline-block m-2">
                  <div className="inline-block border border-blue-900 p-6  rounded-full">
                    <HandThumbUpIcon
                      color="darkblue"
                      className="h-12 w-12"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="mt-3 text-blue-900">行业优势</p>
                </div>
              </a>

              <a href="/">
                <div className="inline-block m-2">
                  <div className="inline-block border border-blue-900 p-6 rounded-full">
                    <UserGroupIcon
                      color="darkblue"
                      className="h-12 w-12"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="mt-3 text-blue-900">精英团队</p>
                </div>
              </a>

              <a href="/">
                <div className="inline-block m-2">
                  <div className="inline-block border border-blue-900 p-6 rounded-full">
                    <TrophyIcon
                      color="darkblue"
                      className="h-12 w-12"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="mt-3 text-blue-900">资质荣誉</p>
                </div>
              </a>

              <a href="/">
                <div className="inline-block m-2">
                  <div className="inline-block border border-blue-900 p-6 rounded-full">
                    <CursorArrowRaysIcon
                      color="darkblue"
                      className="h-12 w-12"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="mt-3 text-blue-900">加入我们</p>
                </div>
              </a>

              <a href="/">
                <div className="inline-block m-2">
                  <div className="inline-block border border-blue-900 p-6 rounded-full">
                    <PhoneArrowUpRightIcon
                      color="darkblue"
                      className="h-12 w-12"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="mt-3 text-blue-900">联系我们</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div
          className="mt-10 text-white flex justify-center items-center"
          style={{
            height: "165px",
            backgroundImage: 'url("/assets/background/index-page-bar.png")',
          }}
        >
          <div className="pr-10 border-r-white border-r">
            <div className="text-3xl text-center">30 +</div>
            <div className="mt-5">核心团队具有近30年管理咨询经验</div>
          </div>
          <div className="px-10 border-r-white border-r">
            <div className="text-3xl text-center">9000 +</div>
            <div className="mt-5">积累9000+个成功案例</div>
          </div>
          <div className="pl-10">
            <div className="text-3xl text-center">200 +</div>
            <div className="mt-5">服务200+家标杆企业</div>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <div className="text-center">
          <p className="text-xl">新闻中心</p>
          <span
            className="inline-block"
            style={{
              width: "50px",
              height: "1px",
              background: "red",
              borderBottom: "2px solid orange",
            }}
          />
        </div>

        <div className="text-center mt-5">
          <div
            className="inline-block m-2 bg-white p-1"
            style={{ width: "400px", height: "380px" }}
          >
            <div className="text-center">
              <a href="/">
                <div
                  className="hover:shadow shadow-sky-400 border border-gray-400"
                  style={{ width: "390px", height: "220px" }}
                >
                  图片1
                </div>
              </a>
            </div>
            <div className="text-xl mt-2">
              <a href="/" className="hover:text-blue-600">
                某烟草商业企业顺利通过“AAA”级标准化...
              </a>
            </div>
            <div className="mt-2">
              近日，某烟草商业企业顺利取得“标准化良好行为企业AAA证书”。
            </div>
            <div className="flex justify-between items-center mt-5">
              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <a
                href="/"
                className="border border-gray-500 hover:bg-blue-700 rounded-full"
              >
                <ArrowRightIcon
                  className="h-6 w-6 hover:text-white"
                  color="gray"
                />
              </a>
              <div className="text-gray-400">2024.03.06</div>
            </div>
          </div>

          <div
            className="inline-block m-2 bg-white p-1"
            style={{ width: "400px", height: "380px" }}
          >
            <div className="text-center">
              <a href="/">
                <div
                  className="hover:shadow shadow-sky-400 border border-gray-400"
                  style={{ width: "390px", height: "220px" }}
                >
                  图片2
                </div>
              </a>
            </div>
            <div className="text-xl mt-2">
              <a href="/" className="hover:text-blue-600">
                广西烟草公司荣获“标准化良好行为企业...
              </a>
            </div>
            <div className="mt-2">
              近日，由我司组织的评价专家组对广西某烟草公司标准化良好行为进行现场确认。
            </div>
            <div className="flex justify-between items-center mt-5">
              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <a
                href="/"
                className="border border-gray-500 hover:bg-blue-700 rounded-full"
              >
                <ArrowRightIcon
                  className="h-6 w-6 hover:text-white"
                  color="gray"
                />
              </a>
              <div className="text-gray-400">2024.01.09</div>
            </div>
          </div>

          <div
            className="inline-block m-2 bg-white p-1"
            style={{ width: "400px", height: "380px" }}
          >
            <div className="text-center">
              <a href="/">
                <div
                  className="hover:shadow shadow-sky-400 border border-gray-400"
                  style={{ width: "390px", height: "220px" }}
                >
                  图片3
                </div>
              </a>
            </div>
            <div className="text-xl mt-2">
              <a href="/" className="hover:text-blue-600">
                深圳市共享之家养老服务有限公司获AA...
              </a>
            </div>
            <div className="mt-2">
              2023年12月16日，深圳市共享之家养老服务有限公司获深圳市康达信管理顾问有限公司颁发A...
            </div>
            <div className="flex justify-between items-center mt-5">
              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <a
                href="/"
                className="border border-gray-500 hover:bg-blue-700 rounded-full"
              >
                <ArrowRightIcon
                  className="h-6 w-6 hover:text-white"
                  color="gray"
                />
              </a>
              <div className="text-gray-400">2024.01.04</div>
            </div>
          </div>
        </div>
      </section>

      {/* line */}
      <section className="my-16 relative">
        <div className="leading-1 h-0.5 bg-gray-400" />
        <a href="/">
          <div
            className="absolute hover:text-white"
            style={{
              top: "-40px",
              left: "50%",
              transform: "translateX(-40px)",
            }}
          >
            <div className="border border-gray-300 bg-gray-100 p-8 flex justify-center items-center hover:bg-blue-700 rounded-full h-[80px] w-[80px]">
              <span className="text-3xl">+</span>
            </div>
          </div>
        </a>
      </section>
    </RootLayout>
  );
}
