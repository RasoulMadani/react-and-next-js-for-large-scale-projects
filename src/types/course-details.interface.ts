import { CourseLevel } from "@/enums/course-level.enum";

export interface CourseDetails {
  title: string; 
  basePrice?: number;//< == basePrice: number | undefined;
  numberOfLectures: number;
  level: string;
  numOfStudent: number;
  duration: string;
  isDownloadable: boolean;
  numOfReviews: number;
  isFree: boolean;
  subTitle: string;
  averageReviewRating: number;
  profileImageId?: number;
  authorName: string;
  recordStatus: string;
  authorSpecialty?: string;
  videoUrl?: string;
  coverImageId: number;
  description: string;
  frequentlyAskedQuestions: CourseDetailsFAQ[];
  levelNumber: CourseLevel;
}

interface CourseDetailsFAQ {
    id: number;
    question: string;
    answer: string;
  }
