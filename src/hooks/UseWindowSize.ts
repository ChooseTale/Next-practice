import { useState, useEffect } from "react";
import { breakpoints } from "../../tailwind.config";

type deviceType = "mobile" | "tablet" | "desktop";

const useWindowSize = (): { device: deviceType } => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    // 창 크기를 업데이트하는 함수
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // 초기 크기 설정
    handleResize();

    // 이벤트 리스너 등록
    window.addEventListener("resize", handleResize);

    // 컴포넌트 언마운트 시 이벤트 리스너 해제
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (windowSize.width < breakpoints.mobile) {
    return { device: "mobile" };
  } else if (windowSize.width < breakpoints.tablet) {
    return { device: "tablet" };
  } else {
    return { device: "desktop" };
  }
};

export default useWindowSize;
