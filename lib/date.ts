export function calculateExpireDays(timestamp: number): number {
  // 将时间戳转换为毫秒数
  const date = new Date(timestamp * 1000);

  // 获取当前时间的毫秒数
  const now = new Date().getTime();

  // 计算时间差（单位：毫秒）
  const diffInMilliseconds = date.getTime() - now;

  // 将毫秒转换为天数
  const diffInDays = ~~(diffInMilliseconds / (1000 * 60 * 60 * 24));

  return Math.max(diffInDays, 0);
}
