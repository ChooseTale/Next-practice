import { colors } from "../../tailwind.config";
import {
  camera,
  chevronDown,
  chevronLeft,
  plus,
  check,
} from "../../public/svg";

const SvgIcons = {
  camera,
  chevronDown,
  chevronLeft,
  plus,
  check,
};

type SvgName = keyof typeof SvgIcons;

type SvgOptions = {
  size?: {
    width?: number;
    height?: number;
  };
  color?: keyof typeof colors;
  viewBox?: string;
};

export default function Svg({
  icon,
  options,
}: {
  icon: SvgName;
  options?: SvgOptions;
}) {
  const SvgComponent = SvgIcons[icon];

  return (
    <div className="flex justify-center items-center">
      <SvgComponent
        width={options?.size?.width}
        height={options?.size?.height}
        viewBox={options?.viewBox || "0 0 24 24"}
      />
    </div>
  );
}
