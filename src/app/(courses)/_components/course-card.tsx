import { CourseSummary } from "@/types/course-summary.interface";
import Image from "next/image";

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
    </div>
  );
};

export default CourseCard;
