import { InputHTMLAttributes, LegacyRef, forwardRef } from "react";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  isSelected: boolean;
};

export const Radio = forwardRef(function Radio(
  { children, isSelected, ...rest }: Props,
  ref: LegacyRef<HTMLInputElement>
) {
  return (
    <div
      data-state={isSelected}
      className="p-4 mt-8 ml-3 w-full flex items-center gap-3 rounded-md bg-base-button text-base-text text-[0.625rem] duration-200 transition-all hover:bg-base-hover"
    >
      <input type="radio" ref={ref} {...rest} className="hidden" />
      {children}
    </div>
  );
});
