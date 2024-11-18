import Svg from "./Svg";

export default function CheckBoxEmpty({
  isChecked,
  handleCheckboxClick,
}: {
  isChecked: boolean;
  handleCheckboxClick: () => void;
}) {
  return (
    <div
      className={` w-[18px] h-[18px]   rounded-[3px] ${
        isChecked ? "bg-primary" : "border-[1.5px]  border-gray-300"
      }`}
      onClick={handleCheckboxClick}
    >
      {isChecked && (
        <div className="flex  justify-center items-center ">
          <Svg
            icon="check"
            options={{ size: { width: 16, height: 16 }, viewBox: "0 0 16 16" }}
          />
        </div>
      )}
    </div>
  );
}
