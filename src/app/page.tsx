import { CourseSummary } from "@/types/course-summary.interface";
import HomeHeroSection from "./_components/home-hero-section/home-hero-section";

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
  console.log(newestCourses);
  return (
    <>
      <HomeHeroSection />
      {
        newestCourses.map(p=>(
          <p key={p.title}>{p.title}</p>
        ))
      }
    </>
  );
}
