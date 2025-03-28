"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useTranslations } from "next-intl";

interface ListingSearchProps {
  // eslint-disable-next-line
  onSearch: (value: string) => void;
  isLoading?: boolean;
}

export function ListingSearch({ onSearch, isLoading = false }: ListingSearchProps) {
  const [query, setQuery] = useState("");
  const t = useTranslations("Listings");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">
      <div className="flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder={t("searchPlaceholder")}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-9"
            disabled={isLoading}
          />
        </div>
        <Button type="submit" disabled={isLoading}>
          {t("search")}
        </Button>
      </div>
    </form>
  );
} 