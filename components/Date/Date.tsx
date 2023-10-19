import { parseISO, format } from "date-fns";

export default function Date({ dateString }: { dateString: string }) {
  const date = parseISO(dateString);
  const formatDate = format(date, "LLLL d, yyyy");
  return <time dateTime={dateString}>{formatDate}</time>;
}
