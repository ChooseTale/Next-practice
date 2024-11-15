import Large from "@/components/buttons/Large";
import { useRouter } from "next/navigation";
import React from "react";

export default function CreateDiary() {
  const router = useRouter();
  return (
    <div className="fixed bottom-0 mb-[60px]  w-[320px] flex justify-end">
      <Large
        text="새 열기"
        action={() => {
          router.push("/main/diary/create");
        }}
      />
    </div>
  );
}
