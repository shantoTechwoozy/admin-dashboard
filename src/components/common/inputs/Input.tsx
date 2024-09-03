import cn from "@/utils/cn";
interface PropeTypes {
  label?: string;
  type: string;
  placeHolder?: string;
  className?: string;
  parentClassName?: string;
  value: string;
  onChange: (e: any) => void;
}

const Input = ({
  label,
  type = "text",
  value,
  onChange,
  className,
  placeHolder,
  parentClassName
}: PropeTypes) => {
  return (
    <div className={cn("flex-1", parentClassName)}>
      {
        label && <label className="mb-2 block text-sm font-medium text-black">
          {label}
        </label>
      }
      <input
        type={type}
        value={value}
        placeholder={placeHolder}
        onChange={(e) => onChange(e.target.value)}
        className={cn(
          "w-full rounded-full border outline-1 border-slate-300 px-3 py-2 shadow-md transition-shadow hover:shadow-lg",
          className,
        )}
      />
    </div>
  );
};

export default Input;
