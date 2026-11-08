import { Phone } from "lucide-react";

export default function FloatingPhone() {
  return (
    <a
      href="tel:+380000000000"
      className="
        fixed
        bottom-6
        right-6
        z-50
        bg-orange-500
        hover:bg-orange-600
        text-white
        p-4
        rounded-full
        shadow-xl
        transition
      "
    >
      <Phone />
    </a>
  );
}