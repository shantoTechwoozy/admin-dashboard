import React, { useRef, useEffect } from "react";

interface Props {
  children: React.ReactNode;
  exceptionRef?: React.RefObject<HTMLElement>;
  onClick: () => void;
  className?: string;
}

const ClickOutside: React.FC<Props> = ({
  children,
  exceptionRef,
  onClick,
  className,
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickListener = (event: MouseEvent) => {
      // Check if click is inside the wrapper or the exception element
      const clickedInside =
        wrapperRef.current?.contains(event.target as Node) ||
        exceptionRef?.current?.contains(event.target as Node);

      // If the click is outside both, trigger the onClick callback
      if (!clickedInside) onClick();
    };

    document.addEventListener("mousedown", handleClickListener);

    return () => {
      document.removeEventListener("mousedown", handleClickListener);
    };
  }, [exceptionRef, onClick]);

  return (
    <div ref={wrapperRef} className={className ?? ""}>
      {children}
    </div>
  );
};

export default ClickOutside;
