const translation_table: Record<string, string> = {
  mushroom_kit: "Mushroom Grow Kits",
  pink_oyster: "Pink Oyster",
  golden_oyster: "Golden Oyster",
  lions_mane: "Lion's Mane",
}

export function readableName(key: string): string {
  return translation_table[key]
}
