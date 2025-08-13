
interface Props {
  label: string;
  rightIcon?: string;
  onClick: () => void;
}

export const ActionButtonView = ({ label, rightIcon, onClick }: Props) => {
  return (
    <div
      className="flex flex-row gap-small p-standard rounded-standard text-body-large items-center justify-center bg-blue-500 text-white cursor-pointer hover:bg-blue-600 transition-colors"
      onClick={onClick}
    >
      <p>{label}</p>
      {rightIcon && (
        <img
          src={rightIcon}
          alt="right icon"
          className="w-[24px] h-[24px]"
        />
      )}
    </div>
  )
} 