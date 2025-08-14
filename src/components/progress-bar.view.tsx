
interface Props {
  progress: number;
}

export const ProgressBarView = ({ progress }: Props) => {
  const normalizedProgress = Math.min(Math.max(progress, 0), 100);

  return (
    <div className="w-full bg-background-light-300 rounded-small overflow-hidden h-[20px] relative">
      <div
        className="h-full bg-blue-500 transition-all duration-300 ease-in-out rounded-small"
        style={{ width: `${normalizedProgress}%` }}
      />
    </div>
  )
}