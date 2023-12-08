interface Problem {
  title: string;
  statusCode: number;
  detail?: string;
  errors?: Record<string, string[]>;
}
interface BadRequestError extends Problem {}
interface UnauthorizedError extends Problem {} // 403 عدم دسترسی
interface ValidationError extends Problem {} // 400 برای اینپوت ها و ولیدیشن
interface NotFoundError extends Problem {}
interface UnhandledException extends Problem {}
interface NetworkError extends Problem {}

export type {
  Problem,
  BadRequestError,
  UnauthorizedError,
  ValidationError,
  NetworkError,
  NotFoundError,
  UnhandledException,
};
