import { render } from "@testing-library/react";
import { describe } from "node:test";
import HomeHeroSection from "./home-hero-section";

describe("home hero section", () => {
  test("display the home hero section", () => {
    const { container } = render(<HomeHeroSection />);
    expect(container).toMatchSnapshot(`
    <section className="bg-hero-pattern bg-no-repeat bg-center mt-5 xl:mt-20 xl:bg-left">
    <div className="container flex flex-col-reverse items-center xl:flex-row">
      <div className="flex flex-col gap-5 mt-12 pb-5 text-center xl:text-right">
        <h3 className="text-xl dark:text-info xl:text-2xl">
          خوش امدی به ...
        </h3>
        <h1 className="text-3xl font-black gradient lg:text-5xl xl:text-5xl">
          مسیر صعود به قله های برنامه نویسی
        </h1>
        <p>
          هر جای مسیر برنامه نویسی که باشی ، به همراهی استادهای با تجربه
          کلاسبن می تونی بدون محدودیت به قله های بالاتر صعود کنی . ما همیشه
          هواتو داریم
        </p>
        <div className="mt-5 flex gap-4">
          <Button variant="primary" size="large">
            دوره های ری اکت و نکست
          </Button>
          <Button variant="neutral" size="large">
            مشاوره برنامه نویسی
          </Button>
        </div>
        <Image
          src="/images/frameworks.png"
          width={412}
          height={39}
          alt=""
          className="grayscale mt-4 opacity-70 m-auto xl:m-0"
        />
      </div>
      <Image
        src="/images/programmer-landing.svg"
        width={702}
        height={521}
        alt="کلاسبن"
      />
    </div>
  </section>
    `);
  });
});
