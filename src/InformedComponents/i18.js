import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        firstName: "First Name",
        lastName: "Last Name",
        street: "Street",
        city: "City",
        pincode: "Pincode",
        phone: "Phone Number",
        country: "Country",
        state: "State",
        district: "District",
        messages: "Messages",
        submit: "Submit",
        selectCountry: "Select Country",
        selectState: "Select State",
        optionalMessage: "Optional Message",
        // Validation messages
        fileError: "File size exceeds 500KB. Please upload a smaller file.",
        nameError: "Only letters and spaces are allowed.",
        pincodeError: "Please enter a valid 6-digit pincode.",
        phoneError: "Invalid phone number. Please use the format +91 ###-###-####.",
        stateRequired: "State is required.",
        nameRequired: "Name Required",
        formTitle: "Form Validation Informed"
      },
    },
    hi: {
      translation: {
        firstName: "पहला नाम",
        lastName: "अंतिम नाम",
        street: "सड़क",
        city: "शहर",
        pincode: "पिन कोड",
        phone: "फ़ोन नंबर",
        country: "देश",
        state: "राज्य",
        district: "जिला",
        messages: "संदेश",
        submit: "जमा करें",
        selectCountry: "देश चुनें",
        selectState: "राज्य चुनें",
        optionalMessage: "वैकल्पिक संदेश",
        // Validation messages
        fileError: "फ़ाइल आकार 500KB से अधिक है। कृपया एक छोटा फ़ाइल अपलोड करें।",
        nameError: "केवल अक्षरों और स्थानों की अनुमति है।",
        pincodeError: "कृपया एक वैध 6-अंकीय पिनकोड दर्ज करें।",
        phoneError: "अमान्य फ़ोन नंबर। कृपया फ़ॉर्मेट +91 ###-###-#### का पालन करें।",
        stateRequired: "राज्य आवश्यक है।",
        nameRequired: "नाम आवश्यक है",
        formTitle: "फ़ॉर्म सत्यापन सूचित"
      },
    },
    ta: {
      translation: {
        firstName: "முதல் பெயர்",
        lastName: "கடைசி பெயர்",
        street: "தெரு",
        city: "நகரம்",
        pincode: "அஞ்சல் குறியீடு",
        phone: "தொலைபேசி எண்",
        country: "நாடு",
        state: "மாநிலம்",
        district: "மாவட்டம்",
        messages: "செய்திகள்",
        submit: "சமர்ப்பிக்க",
        selectCountry: "நாட்டை தேர்வு செய்க",
        selectState: "மாநிலத்தை தேர்வு செய்க",
        optionalMessage: "விருப்ப செய்தி",
        // Validation messages
        fileError: "கோப்பு அளவு 500KB ஐ கடந்துவிட்டது. சிறிய கோப்பை பதிவேற்றவும்.",
        nameError: "எழுத்துகள் மற்றும் இடைவெளிகள் மட்டுமே அனுமதிக்கப்பட்டுள்ளன.",
        pincodeError: "சரியான 6 எண் பின்கோடு உள்ளதை உறுதிப்படுத்தவும்.",
        phoneError: "செல்லுபடியாகாத தொலைபேசி எண். +91 ###-###-#### வடிவத்தில் பயன்படுத்தவும்.",
        stateRequired: "மாநிலம் தேவை.",
        nameRequired: "பெயர் தேவை",
        formTitle: "படிவம் செல்லுபடியானது"
      },
    },
    ml: {
      translation: {
        firstName: "പേരിന്റെ ആദ്യഭാഗം",
        lastName: "അവസാന പേര്",
        street: "വീഥി",
        city: "നഗരം",
        pincode: "പിൻകോഡ്",
        phone: "ഫോൺ നമ്പർ",
        country: "രാജ്യം",
        state: "സംസ്ഥാനം",
        district: "ജില്ല",
        messages: "സന്ദേശങ്ങൾ",
        submit: "സമർപ്പിക്കുക",
        selectCountry: "രാജ്യം തിരഞ്ഞെടുക്കുക",
        selectState: "സംസ്ഥാനം തിരഞ്ഞെടുക്കുക",
        optionalMessage: "ഐച്ഛിക സന്ദേശം",
        // Validation messages
        fileError: "ഫയല് സൈസ് 500KB-നെ കവ exceeds. ദയവായി ചെറിയ ഫയല് അപ്‌ലോഡ് ചെയ്യുക.",
        nameError: "പേര്‍മാത്രം കൂടാതെ ശൂന്യങ്ങളും അനുവദനീയമാണ്.",
        pincodeError: "ദയവായി ഒരു സാധുവായ 6-അംഗ പിൻകോഡ് നൽകുക.",
        phoneError: "അസാധുവായ ഫോൺ നമ്പർ. ദയവായി +91 ###-###-#### എന്ന ഫോർമാറ്റ് ഉപയോപ്രിക്കുക.",
        stateRequired: "സംസ്ഥാനം ആവശ്യമാണ്.",
        nameRequired: "പേര് ആവശ്യമാണ്",
        formTitle: "ഫോം വാലിഡേഷൻ ഇൻഫോർമഡ്"
      },
    },
  },
  lng: "en", 
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
