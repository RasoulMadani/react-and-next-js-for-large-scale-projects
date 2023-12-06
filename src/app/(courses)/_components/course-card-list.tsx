import { CourseSummary } from "@/types/course-summary.interface";
import CourseCard from "./course-card";
import { API_URL } from "@/configs/global";

type CourseCardListProps = {
  courses: CourseSummary[];
};

async function getNewestCourses(count: number): Promise<CourseSummary[]> {
  // با این خط کد می توانیم ۵ ثانیه وقفه در اجرای کد بعدی ایجاد کنیم
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const res = await fetch(`${API_URL}/courses/newest/${count}`, {
    cache: "no-store",
    // با این مقدار می گوییم که نکست جی اس بعد از ۲۰ ثانیه دوباره درخواست بزند
    // و صفحه را بسازد و با به روزرسانی صفحه تغییرات را خواهیم دید
    // قبل از ۲۰ ثانیه اگر صفحه را به روزرسانی هم کنیم باز تغییرات را نمی بینیم
    // چون این بیست ثانیه سمت سرور شمارش می شود
    next: {
      // بر اساس ثانیه است
      revalidate: 20 * 60 * 60,
    },
  });
  return res.json();
}

export const CourseCardList: React.FC<CourseCardListProps> = async ({
  courses,
}: CourseCardListProps) => {
  const newestCoursesData = await getNewestCourses(4);
  return (
    <div className="flex flex-wrap justify-center xl:justify-start gap-6 mt-10">
      {newestCoursesData.map((course) => (
        //ارسال ویزگی های کورس به کامپوننت کورس کارد
        <CourseCard key={`course-${course.slug}`} {...course} />
      ))}
    </div>
  );
};
