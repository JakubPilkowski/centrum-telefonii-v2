import { scrollIntoView } from "seamless-scroll-polyfill";

export default function useNavigate() {
  const handleNavigate = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    scrollIntoView(element, { behavior: "smooth", block: "start" });
  };

  return [handleNavigate];
}
