export default function EmptyList() {
  return (
    <div className="flex flex-col items-center rounded-lg border-t border-gray-400 text-gray-300 text-xs md:text-base text-center">
      <img src="./clipboard.svg" className="mt-12 mb-4" />
      <h1 className="font-bold">Belum ada tugas untuk saat ini</h1>
      <span>Silahkan tambah tugas baru pada form di atas.</span>
    </div>
  );
}
