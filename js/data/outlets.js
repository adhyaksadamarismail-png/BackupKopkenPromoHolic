/**
 * Outlets Data Source - Decoupled Architecture
 * Designed to handle 1,000+ outlets seamlessly.
 */

export const initialOutlets = [
  {
    id: "outlet-001",
    name: "Kopi Kenangan Kemang Raya",
    city: "Jakarta",
    address: "Jl. Kemang Raya No. 12, Bangka, Mampang Prapatan, Jakarta Selatan",
    is_active: true
  },
  {
    id: "outlet-002",
    name: "Kopi Kenangan Grand Indonesia",
    city: "Jakarta",
    address: "Grand Indonesia Mall West Mall Lt. LG, Menteng, Jakarta Pusat",
    is_active: true
  },
  {
    id: "outlet-003",
    name: "Kopi Kenangan Senayan City",
    city: "Jakarta",
    address: "Senayan City Mall Lt. 4, Kebayoran Baru, Jakarta Selatan",
    is_active: true
  },
  {
    id: "outlet-004",
    name: "Kopi Kenangan Central Park Mall",
    city: "Jakarta",
    address: "Central Park Mall Lt. Lower Ground, Tanjung Duren, Jakarta Barat",
    is_active: true
  },
  {
    id: "outlet-005",
    name: "Kopi Kenangan Kota Kasablanka",
    city: "Jakarta",
    address: "Kota Kasablanka Mall Lt. LG, Tebet, Jakarta Selatan",
    is_active: true
  },
  {
    id: "outlet-006",
    name: "Kopi Kenangan Paris Van Java",
    city: "Bandung",
    address: "Paris Van Java Mall Resort Level, Sukajadi, Bandung",
    is_active: true
  },
  {
    id: "outlet-007",
    name: "Kopi Kenangan Dago Street",
    city: "Bandung",
    address: "Jl. Ir. H. Juanda No. 84, Coblong, Bandung",
    is_active: true
  },
  {
    id: "outlet-008",
    name: "Kopi Kenangan Tunjungan Plaza",
    city: "Surabaya",
    address: "Tunjungan Plaza 3 Lt. 3, Tegalsari, Surabaya",
    is_active: true
  },
  {
    id: "outlet-009",
    name: "Kopi Kenangan Pakuwon Mall",
    city: "Surabaya",
    address: "Pakuwon Mall Lt. B1, Lontar, Sambikerep, Surabaya",
    is_active: true
  },
  {
    id: "outlet-010",
    name: "Kopi Kenangan Malioboro",
    city: "Yogyakarta",
    address: "Jl. Malioboro No. 45, Danurejan, Yogyakarta",
    is_active: true
  }
];

/**
 * Filter outlets based on search query matching name, city, or address.
 * Performance optimized to render max `limit` items for bulk data (1,000+).
 */
export function searchOutlets(outlets, query = "", limit = 20) {
  if (!query || !query.trim()) {
    return outlets.filter(o => o.is_active).slice(0, limit);
  }

  const cleanQuery = query.toLowerCase().trim();
  const filtered = outlets.filter(outlet => {
    if (!outlet.is_active) return false;
    const nameMatch = outlet.name.toLowerCase().includes(cleanQuery);
    const cityMatch = outlet.city.toLowerCase().includes(cleanQuery);
    const addressMatch = outlet.address.toLowerCase().includes(cleanQuery);
    return nameMatch || cityMatch || addressMatch;
  });

  return filtered.slice(0, limit);
}
