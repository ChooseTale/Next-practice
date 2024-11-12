import CheckBoxEmpty from "@/components/CheckBoxEmpty";
import DropDown from "@/components/DropDown";
import List from "@/components/List";

export default function Home() {
  return (
    <>
      <DropDown
        dateList={[
          {
            year: 2024,
            month: 11,
          },
          {
            year: 2024,
            month: 10,
          },
          {
            year: 2024,
            month: 9,
          },
        ]}
      />
      <List />
    </>
  );
}
