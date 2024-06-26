"use client";

import { SearchIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { FormEventHandler, useState } from "react";
import { useRouter } from "next/navigation";

export default function Search() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSearchSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (!search) {
      return;
    }

    router.push(`/restaurants?search=${search}`);
  };

  return (
    <form onSubmit={handleSearchSubmit} className="flex gap-4">
      <Input
        placeholder="Buscar restaurantes"
        className="border-none"
        onChange={handleChange}
      />

      <Button size="icon" type="submit">
        <SearchIcon size={20} />
      </Button>
    </form>
  );
}
