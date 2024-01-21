import catalan from "./ca.json";
import spanish from "./es.json";
import english from "./en.json";

export const getI18n = ({
  currentLocale = "en",
}: {
  currentLocale: string;
}) => {
  const locales: { [key: string]: any } = {
    ca: catalan,
    es: spanish,
    en: english,
  };
  return locales[currentLocale];
};
