import BtnRequest from "./components/btnrequest";
// import bgMobile from "./assets/bg-intro-mobile.svg";
// import bgDesktop from "./assets/bg-intro-desktop.svg";
import bgPhone from "./assets/bg-phones.svg";
// import data from "./opportunities";

export default function Content() {
  //   console.log(data);
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
          <div className="mb-12 md:mb-18 text-center">
            <h2 className="preset-3 md:preset-2 text-blue-950 mb-4 md:mb-8">
              Why choose Digitalbank?
            </h2>
            <p className="preset-7-r md:preset-5 text-gray-600">
              We leverage Open Banking to turn your bank account into your
              financial hub. Control your finances like never before.
            </p>
          </div>
          <div></div>
        </div>
      </section>
    </main>
  );
}
