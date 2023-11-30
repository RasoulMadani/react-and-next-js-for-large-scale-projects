import { Colors } from "./_components/colors/colors";

export default function Home() {
  return (
    <section className="bg-hero-pattern h-80"> 
         <div className="flex flex-col gap-5 mt-12 pb-5 text-center xl:text-right">
          <h3 className="text-xl dark:text-info xl:text-2xl">خوش امدی به ...</h3>
          <h1 className="text-3xl font-black gradient lg:text-5xl xl:text-5xl">مسیر صعود به قله های برنامه نویسی</h1>
          <p>هر جای مسیر برنامه نویسی که باشی ، به همراهی استادهای 
            با تجربه کلاسبن می تونی بدون محدودیت به قله های بالاتر
            صعود کنی . ما همیشه هواتو داریم 
          </p>
         </div>
    </section>
  )
}
