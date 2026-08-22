/**
 * Admin Configurable Settings
 */

export const defaultSettings = {
  adminWhatsApp: "6285159646922",
  wifiPassword: "Password WiFi — 22 Juni 2026 TwinsTumbler@22",
  storeNotice: "Pickup Only — Jika menu di store kosong, akan kami infokan. Tidak ada biaya tambahan apapun.",
  brandName: "Kopi Kenangan",
  brandTagline: "Minuman favorit, lebih hemat."
};

export function loadSettings() {
  try {
    const saved = localStorage.getItem("promoholic_settings");
    if (saved) {
      return { ...defaultSettings, ...JSON.parse(saved) };
    }
  } catch (e) {
    console.error("Failed to load settings from localStorage", e);
  }
  return { ...defaultSettings };
}

export function saveSettings(settings) {
  try {
    localStorage.setItem("promoholic_settings", JSON.stringify(settings));
  } catch (e) {
    console.error("Failed to save settings to localStorage", e);
  }
}
