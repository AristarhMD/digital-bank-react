import data from "../src/opportunities";
import BtnRequest from "./components/btnrequest";
// import bgMobile from "./assets/bg-intro-mobile.svg";
// import bgDesktop from "./assets/bg-intro-desktop.svg";
import bgPhone from "./assets/bg-phones.svg";

export default function Content() {
  console.log(data);
  return (
    <main>
      <section className="mb-14 md:mb-18 flex flex-col gap-12">
        <div className={`relative h-85.75 md:h-145.25 overflow-hidden `}>
          <img
            src={bgPhone}
            alt="Phone images"
            className="absolute top-0 w-full h-full "
          />
        </div>
        <div className="flex flex-col gap-6 items-center justify-center text-center w-[87.2%] md:max-w-88 mx-auto">
          <h1 className="preset-2 text-blue-950">
            Next generation digital banking
          </h1>
          <p className="preset-7-r text-gray-600">
            Take your financial life online. Your Digitalbank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>

          <BtnRequest className="cursor-pointer" />
        </div>
      </section>
      <section className="bg-gray-100 py-16 px-6 md:p-20">
        <div className="flex flex-col">
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
    </main>
  );
}
