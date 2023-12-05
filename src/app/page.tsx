import { CourseSummary } from "@/types/course-summary.interface";
import HomeHeroSection from "./_components/home-hero-section/home-hero-section";
import { CourseCardList } from "./(courses)/_components/course-card-list";

import {IconClock} from './_components/icons/icons'; 
async function getNewestCourses(count: number): Promise<CourseSummary[]> {
  const res = await fetch(
    `https://api.classbon.com/api/courses/newest/${count}`,
    {
      // با این مقدار می گوییم که نکست جی اس بعد از ۲۰ ثانیه دوباره درخواست بزند
      // و صفحه را بسازد و با به روزرسانی صفحه تغییرات را خواهیم دید 
      // قبل از ۲۰ ثانیه اگر صفحه را به روزرسانی هم کنیم باز تغییرات را نمی بینیم
      // چون این بیست ثانیه سمت سرور شمارش می شود
      next:{ 
        // بر اساس ثانیه است  
        revalidate: 20 * 60 * 60
      }
    }
  );
  return res.json();
}
export default async function Home() {
  const newestCourses = await getNewestCourses(4);
  return (
    <>
      <HomeHeroSection />
      <section className="container pt-20">
        <div className="text-center xl:text-right">
          <h2 className="text-2xl font-extrabold">
            تازه ترین  دوره های آموزشی
          </h2>
          <p>
            برای به روز موندن یاد گرفتن نکته های تازه ضروریه
          </p>
        </div>
        <CourseCardList courses={newestCourses}/>
        <IconClock width={250} height={250} stroke="red"/>
      </section>
    </> 
  );
}
