import { Badge } from "@/app/_components/badge";
import { IconArrowLeft, IconClock } from "@/app/_components/icons/icons";
import { CourseSummary } from "@/types/course-summary.interface";
import Image from "next/image";
import Link from "next/link";

export type CourseCardProps = CourseSummary & {};
const CourseCard: React.FC<CourseCardProps> = ({
  coverImageId,
  title,
  subTitle,
  level,
  recordStatus,
  basePrice,
  duration,
  slug,
}: CourseCardProps) => {
  return (
    <div className="card">
      <figure>
        <Image
          src={`https://api.classbon.com/api/picture/${coverImageId}`}
          alt={title}
          width={550}
          height={327}
        />
      </figure>
      <div className="mt-2 flex gap-2 font-semibold dark:text-info px-3 py-2">
        <Badge variant="info">{recordStatus}</Badge>
        <Badge variant="accent">{level}</Badge>
      </div>
      <div className="card-body">
        <Link href={`/course/${slug}`}>{title}</Link>
        <p>{subTitle}</p>
        <div>
          <Badge variant="warning"><IconClock width={16} height={16}/>{duration}</Badge>
          {basePrice}
        </div>
      </div> 
      <Link href={`/course/${slug}`} className="card-footer justify-center animated-icon">
        مشاهده ی جزییات دوره
        <IconArrowLeft fill="currentColor"/>
      </Link>
    </div>
  );
};

export default CourseCard;
