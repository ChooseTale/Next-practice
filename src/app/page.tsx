import Large from "@/components/buttons/Large";
import CheckBoxEmpty from "@/components/CheckBoxEmpty";
import Client from "@/components/Client";
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
      <List title="제목이야 제목" isDone={false} />
      <Client />
    </>
  );
}
