import Image from "next/image";
export default function DayState({ day }: { day: boolean | undefined }) {
  let image: [string, number?] = [
    day
      ? "images/check.svg"
      : day === false
      ? "images/close.svg"
      : "images/ellipse.svg",
    day || day === false ? 24 : 15,
  ];

  const [source, size] = image;

  return (
    <div className="flex items-center justify-center h-9">
      <Image src={source} alt="Status do dia" width={size} height={size} />
    </div>
  );
}
