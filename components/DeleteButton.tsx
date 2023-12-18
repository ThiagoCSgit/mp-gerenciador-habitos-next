"use client";

import Image from "next/image";
import { deleteHabit } from "@/app/actions";

export default function DeleteButton({ habit }: { habit: string }) {
  return (
    <button onClick={() => deleteHabit(habit)}>
      <Image
        src="images/delete-icon.svg"
        alt="Botão de delete"
        width={25}
        height={25}
      />
    </button>
  );
}
