/**
 * Единая точка правды по контактным данным заведения.
 *
 * ВАЖНО: телефон, точный адрес дома/строения, точные координаты на карте
 * и ссылка на 2ГИС — placeholder-значения. Замените их на реальные данные
 * перед запуском в продакшен:
 *   - phone: реальный номер ресторана в Макинске
 *   - whatsapp: номер в формате 7XXXXXXXXXX (без +, без пробелов)
 *   - address.street: точный адрес дома
 *   - coordinates: реальные lat/lng с Google Maps или 2ГИС
 *   - links.instagram: подтверждено — https://www.instagram.com/tuysqan.makinsk
 *   - links.dgis: вставьте реальную короткую ссылку 2ГИС (go.2gis.com/...)
 */
export const RESTAURANT = {
  name: "Tuysqan",
  city: "Макинск",
  region: "Акмолинская область",

  phone: {
    display: "+7 (000) 000-00-00",
    href: "tel:+70000000000",
  },

  whatsapp: {
    number: "70000000000",
    get href() {
      return `https://wa.me/${this.number}`;
    },
  },

  hours: {
    from: "08:00",
    to: "23:00",
  },

  address: {
    ru: "г. Макинск, Акмолинская область",
    kk: "Макинск қ., Ақмола облысы",
  },

  // Примерные координаты центра Макинска — заменить на точные координаты
  // заведения с Google Maps / 2ГИС после получения точного адреса.
  coordinates: {
    lat: 52.6275,
    lng: 70.4131,
  },

  links: {
    instagram: "https://www.instagram.com/tuysqan.makinsk",
    dgis: "https://go.2gis.com/xWn5i",
    googleMaps: "https://www.google.com/maps",
  },
} as const;
