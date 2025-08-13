
interface Props {
  label: string;
  rightIcon?: string;
  onClick: () => void;
}

export const SmallActionButtonView = ({ label, rightIcon, onClick }: Props) => {
  return (
    <div
      className="flex flex-row gap-small p-medium rounded-medium text-body-medium items-center justify-center bg-background-light-300 border-1 border-background-light-400 text-black cursor-pointer hover:bg-background-light-400 transition-colors"
      onClick={onClick}>
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