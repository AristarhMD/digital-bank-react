import data from "../src/opportunities";
import articles from "../articles";
import BtnRequest from "./components/btnrequest";

import { Article } from "./components/article";

const bgPhone = "./public/images/image-mockups.png";

export default function Content() {
  return (
    <main>
      {/* First section */}
      <section className="mb-14 md:mb-18 xl:mb-0 flex flex-col gap-12 xl:flex-row xl:gap-0 ">
        <div className="relative h-70 md:h-145.25 overflow-hidden bg-[url('../public/images/bg-intro-mobile.svg')] md:bg-[url('../public/images/bg-intro-desktop.svg')] bg-no-repeat bg-cover md:bg-bottom xl:order-2 xl:bg-cover  xl:w-full ">
          <img
            src={bgPhone}
            alt="Phone images"
            className="absolute top-1/3 -translate-y-1/2 left-1/2 -translate-x-1/2 w-auto h-full scale-[150%] md:scale-[142%] mt-20 xl:z-3 "
          />
        </div>
        <div className="flex flex-col gap-6 items-center justify-center text-center w-[87.2%] md:max-w-88 mx-auto xl:mx-0 xl:col-start-1 xl:ml-[11.1%] xl:text-left">
          <h1 className="preset-2 text-blue-950">
            Next generation digital banking
          </h1>
          <p className="preset-7-r text-gray-600">
            Take your financial life online. Your Digitalbank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>

          <BtnRequest className="cursor-pointer xl:mr-auto" />
        </div>
      </section>
      {/* Section choose bank */}
      <section className="bg-gray-100 py-16 px-6 md:p-20  ">
        <div className="flex flex-col xl:w-279 xl:mx-auto">
          <div className="mb-12 md:mb-18 text-center xl:text-left xl:w-158">
            <h2 className="preset-3 md:preset-2 text-blue-950 mb-4 md:mb-8">
              Why choose Digitalbank?
            </h2>
            <p className="preset-7-r md:preset-5 text-gray-600">
              We leverage Open Banking to turn your bank account into your
              financial hub. Control your finances like never before.
            </p>
          </div>
          <div className="grid gap-y-8 md:grid-cols-2 xl:grid-cols-4 md:gap-y-16 md:gap-x-14 xl:gap-x-9 ">
            {data.map((item) => (
              <article className="flex flex-col items-center justify-center text-center md:text-left md:items-start">
                {item.icon}
                <p className="preset-4 text-blue-950 mt-10 mb-6">
                  {item.header}
                </p>
                <p className="preset-7-r md:preset-6 md:leading-[162.5%] text-gray-600">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      {/* Latest Articles  */}
      <section className="px-6 py-16 md:p-20 xl:px-0 xl:w-279 xl:mx-auto">
        <p className="preset-3 md:preset-2 text-blue-950 text-center mb-12 md:mb-16 xl:mb-14 xl:text-left">
          Latest Articles
        </p>
        <div className="grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-4 xl:flex xl:gap-8">
          {articles.map((article, idx) => (
            <Article
              key={idx}
              imgUrl={article.imgUrl}
              altText={article.altText}
              author={article.author}
              header={article.header}
              text={article.text}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
