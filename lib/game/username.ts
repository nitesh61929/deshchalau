const MALE_NAMES = [
  "Bikram",
  "Sagar",
  "Rohan",
  "Arun",
  "Dipak",
  "Nabin",
  "Suresh",
  "Ramesh",
  "Prakash",
  "Binod",
  "Rajesh",
  "Santosh",
  "Manish",
  "Dinesh",
  "Kamal",
];

const FEMALE_NAMES = [
  "Sita",
  "Anita",
  "Sunita",
  "Kabita",
  "Sabita",
  "Geeta",
  "Nisha",
  "Roshani",
  "Sangita",
  "Kopila",
  "Anju",
  "Mira",
  "Puja",
  "Rekha",
  "Sarita",
];

const TITLES = [
  "Neta",
  "Pradhan",
  "Mantri",
  "Sarkar",
  "Sansad",
  "Yoddha",
  "Shasan",
  "Rajniti",
  "Desh",
  "Rastra",
  "Mukti",
  "Andolan",
  "Kranti",
  "Sewak",
  "Abhiyan",
];

const ALL_NAMES = [...MALE_NAMES, ...FEMALE_NAMES];

export function generateUsernameSuggestion(): string {
  const name = ALL_NAMES[Math.floor(Math.random() * ALL_NAMES.length)];
  const title = TITLES[Math.floor(Math.random() * TITLES.length)];
  const num = String(Math.floor(Math.random() * 99) + 1).padStart(2, "0");
  return `${name}${title}_${num}`;
}

// Client-side 5 suggestions (not DB-verified — verified ones come from /api/players/suggestions)
export function getClientSuggestions(count = 5): string[] {
  const seen = new Set<string>();
  const result: string[] = [];
  while (result.length < count) {
    const s = generateUsernameSuggestion();
    if (!seen.has(s)) {
      seen.add(s);
      result.push(s);
    }
  }
  return result;
}
