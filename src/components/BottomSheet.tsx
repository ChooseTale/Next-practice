import { useState, useEffect } from "react";

interface BottomSheetProps {
  isVisible: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const BottomSheet: React.FC<BottomSheetProps> = ({
  isVisible,
  onClose,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(isVisible);

  useEffect(() => {
    setIsOpen(isVisible);
  }, [isVisible]);

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(onClose, 300); // 애니메이션이 끝난 뒤 닫기
  };

  return (
    <div
      className={`fixed  inset-0 flex justify-center items-end bg-black bg-opacity-20 transition-opacity duration-300 z-50 ${
        isOpen ? "visible" : " invisible"
      }`}
      onClick={handleClose}
    >
      <div
        className={`bg-white w-full h-[80%]  rounded-t-[20px] shadow-lg p-4 transition-transform duration-300 ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default BottomSheet;
