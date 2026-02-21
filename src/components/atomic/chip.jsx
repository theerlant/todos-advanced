export default function Chip({ text = "" }) {
  return (
    <div className="flex px-2 md:px-2.75 py-0.5 md:py-1 rounded-full bg-blue text-gray-100 text-[10px] md:text-xs font-bold">
      {text}
    </div>
  );
}
