var fetch_url_options;
//var user_name = "iiIfeiithetechnerd";
var speechOn;
// object references

// This object reference is for the screen content
var screenContent = { "mainScreen": ["main_title", "dropdown1_options", "fetch_output", "fetch_button"],
"settings_and_accessibility": ["main_text_title", "settings_options", "gender_label", "gender_dropdown", 
"language_label", "language_dropdown", "enable_and_disable", "enable_and_disable2"]};

// This object reference is for the languages since non-english voice engines sound off in english
var translations = {
  "العربية": { "main_title": "جلب تطبيق المستودع", "fetch_output": "ستظهر البيانات التي تم جلبها هنا", "fetch_button": "جلب!", "main_text_title": "الإعدادات وإمكانية الوصول", "gender_label": "الجنس", "language_label": "اللغة", "enable_and_disable": "تمكين/تعطيل تحويل النص إلى كلام" },
  "Azərbaycan dili": { "main_title": "Repozitor tətbiqini gətir", "fetch_output": "Gətirilən məlumatlar burada görünəcək", "fetch_button": "Gətir!", "main_text_title": "Parametrlər və Əlçatanlıq", "gender_label": "Cins", "language_label": "Dil", "enable_and_disable": "Mətni nitqə çevirməni aktivləşdir/deaktiv et" },
  "български": { "main_title": "Изтегляне на приложение за хранилище", "fetch_output": "Извлечените данни ще се появят тук", "fetch_button": "Извлечи!", "main_text_title": "Настройки и достъпност", "gender_label": "Пол", "language_label": "Език", "enable_and_disable": "Включване/изключване на текст към реч" },
  "Bosanski": { "main_title": "Preuzmi aplikaciju repozitorija", "fetch_output": "Preuzeti podaci će se pojaviti ovdje", "fetch_button": "Preuzmi!", "main_text_title": "Postavke i pristupačnost", "gender_label": "Spol", "language_label": "Jezik", "enable_and_disable": "Omogući/onemogući pretvaranje teksta u govor" },
  "Català": { "main_title": "Obtén l'aplicació del repositori", "fetch_output": "Les dades obtingudes apareixeran aquí", "fetch_button": "Obtén!", "main_text_title": "Configuració i accessibilitat", "gender_label": "Gènere", "language_label": "Idioma", "enable_and_disable": "Activa/desactiva la síntesi de veu" },
  "Čeština": { "main_title": "Načíst aplikaci úložiště", "fetch_output": "Načtená data se zobrazí zde", "fetch_button": "Načíst!", "main_text_title": "Nastavení a přístupnost", "gender_label": "Pohlaví", "language_label": "Jazyk", "enable_and_disable": "Povolit/zakázat předčítání textu" },
  "Dansk": { "main_title": "Hent lager-app", "fetch_output": "De hentede data vises her", "fetch_button": "Hent!", "main_text_title": "Indstillinger og tilgængelighed", "gender_label": "Køn", "language_label": "Sprog", "enable_and_disable": "Aktiver/deaktiver tekst-til-tale" },
  "Deutsch": { "main_title": "Repository-App abrufen", "fetch_output": "Die abgerufenen Daten werden hier angezeigt", "fetch_button": "Abrufen!", "main_text_title": "Einstellungen und Barrierefreiheit", "gender_label": "Geschlecht", "language_label": "Sprache", "enable_and_disable": "Text-to-Speech aktivieren/deaktivieren" },
  "Ελληνικά": { "main_title": "Λήψη εφαρμογής αποθετηρίου", "fetch_output": "Τα δεδομένα που ανακτήθηκαν θα εμφανιστούν εδώ", "fetch_button": "Ανάκτηση!", "main_text_title": "Ρυθμίσεις και Προσβασιμότητα", "gender_label": "Φύλο", "language_label": "Γλώσσα", "enable_and_disable": "Ενεργοποίηση/Απενεργοποίηση κειμένου σε ομιλία" },
  "English": { "main_title": "Fetch a repository app", "fetch_output": "The fetched data will show up here", "fetch_button": "Fetch!", "main_text_title": "Settings and Accessibility", "gender_label": "Gender", "language_label": "Language", "enable_and_disable": "Enable/disable Text to Speech" },
  "Español (España)": { "main_title": "Obtener aplicación de repositorio", "fetch_output": "Los datos obtenidos aparecerán aquí", "fetch_button": "¡Obtener!", "main_text_title": "Ajustes y accesibilidad", "gender_label": "Género", "language_label": "Idioma", "enable_and_disable": "Activar/desactivar texto a voz" },
  "فارسی": { "main_title": "دریافت برنامه مخزن", "fetch_output": "داده‌های واکشی شده در اینجا نشان داده می‌شوند", "fetch_button": "واکشی!", "main_text_title": "تنظیمات و دسترسی", "gender_label": "جنسیت", "language_label": "زبان", "enable_and_disable": "فعال/غیرفعال کردن تبدیل متن به گفتار" },
  "Français": { "main_title": "Récupérer l'application du dépôt", "fetch_output": "Les données récupérées s'afficheront ici", "fetch_button": "Récupérer !", "main_text_title": "Paramètres et accessibilité", "gender_label": "Genre", "language_label": "Langue", "enable_and_disable": "Activer/désactiver la synthèse vocale" },
  "日本語": { "main_title": "リポジトリアプリを取得", "fetch_output": "取得したデータがここに表示されます", "fetch_button": "取得！", "main_text_title": "設定とアクセシビリティ", "gender_label": "性別", "language_label": "言語", "enable_and_disable": "読み上げ機能を有効/無効にする" },
  "Pусский": { "main_title": "Получить приложение репозитория", "fetch_output": "Полученные данные появятся здесь", "fetch_button": "Получить!", "main_text_title": "Настройки и доступность", "gender_label": "Пол", "language_label": "Язык", "enable_and_disable": "Включить/выключить озвучку текста" },
  "Español (LATAM)": { "main_title": "Obtener app de repositorio", "fetch_output": "Los datos aparecerán aquí", "fetch_button": "¡Obtener!", "main_text_title": "Configuración y accesibilidad", "gender_label": "Género", "language_label": "Idioma", "enable_and_disable": "Activar/desactivar voz" },
  "Eesti": { "main_title": "Hangi hoidla rakendus", "fetch_output": "Andmed kuvatakse siin", "fetch_button": "Hangi!", "main_text_title": "Seaded ja juurdepääsetavus", "gender_label": "Sugu", "language_label": "Keel", "enable_and_disable": "Tekst kõneks sisse/välja" },
  "Euskara": { "main_title": "Eskuratu biltegi aplikazioa", "fetch_output": "Datuak hemen agertuko dira", "fetch_button": "Eskuratu!", "main_text_title": "Ezarpenak eta erraztasuna", "gender_label": "Generoa", "language_label": "Hizkuntza", "enable_and_disable": "Gaitasuna/Ezgaitasuna ahotsa" },
  "Suomi": { "main_title": "Hae arkistosovellus", "fetch_output": "Haetut tiedot näkyvät tässä", "fetch_button": "Hae!", "main_text_title": "Asetukset ja saavutettavuus", "gender_label": "Sukupuoli", "language_label": "Kieli", "enable_and_disable": "Puhesynteesi päälle/pois" },
  "Filipino": { "main_title": "Kunin ang repository app", "fetch_output": "Lalabas ang data dito", "fetch_button": "Kunin!", "main_text_title": "Settings at Accessibility", "gender_label": "Kasarian", "language_label": "Wika", "enable_and_disable": "I-on/I-off ang Text to Speech" },
  "Gaeilge": { "main_title": "Faigh aip taisclainne", "fetch_output": "Beidh na sonraí le feiceáil anseo", "fetch_button": "Faigh!", "main_text_title": "Socruithe agus Inrochtaineacht", "gender_label": "Inscne", "language_label": "Teanga", "enable_and_disable": "Tiontaigh téacs go caint" },
  "Galego": { "main_title": "Obter aplicación de repositorio", "fetch_output": "Os datos aparecerán aquí", "fetch_button": "Obter!", "main_text_title": "Axustes e accesibilidade", "gender_label": "Xénero", "language_label": "Idioma", "enable_and_disable": "Activar voz" },
  "עברית": { "main_title": "הבא אפליקציית מאגר", "fetch_output": "הנתונים יופיעו כאן", "fetch_button": "הבא!", "main_text_title": "הגדרות ונגישות", "gender_label": "מין", "language_label": "שפה", "enable_and_disable": "הפעל/השבת הקראת טקסט" },
  "हिन्दी": { "main_title": "रिपॉजिटरी ऐप प्राप्त करें", "fetch_output": "डेटा यहाँ दिखाई देगा", "fetch_button": "प्राप्त करें!", "main_text_title": "सेटिंग्स और एक्सेसिबिलिटी", "gender_label": "लिंग", "language_label": "भाषा", "enable_and_disable": "टेक्स्ट-टू-स्पीच चालू/बंद करें" },
  "Hrvatski": { "main_title": "Dohvati aplikaciju repozitorija", "fetch_output": "Podaci će se pojaviti ovdje", "fetch_button": "Dohvati!", "main_text_title": "Postavke i pristupačnost", "gender_label": "Spol", "language_label": "Jezik", "enable_and_disable": "Omogući glas" },
  "Magyar": { "main_title": "Tárhely alkalmazás lekérése", "fetch_output": "Az adatok itt jelennek meg", "fetch_button": "Lekérés!", "main_text_title": "Beállítások és kisegítő lehetőségek", "gender_label": "Nem", "language_label": "Nyelv", "enable_and_disable": "Szövegfelolvasó be/ki" },
  "Հայերեն": { "main_title": "Ստանալ պահոցի հավելվածը", "fetch_output": "Տվյալները կհայտնվեն այստեղ", "fetch_button": "Ստանալ!", "main_text_title": "Կարգավորումներ և հասանելիություն", "gender_label": "Սեռ", "language_label": "Լեզու", "enable_and_disable": "Միացնել ձայնը" },
  "Bahasa Indonesia": { "main_title": "Ambil aplikasi repositori", "fetch_output": "Data akan muncul di sini", "fetch_button": "Ambil!", "main_text_title": "Pengaturan & Aksesibilitas", "gender_label": "Jenis Kelamin", "language_label": "Bahasa", "enable_and_disable": "Aktifkan suara" },
  "Íslenska": { "main_title": "Sækja gagnasafnsforrit", "fetch_output": "Gögn munu birtast hér", "fetch_button": "Sækja!", "main_text_title": "Stillingar og aðgengi", "gender_label": "Kyn", "language_label": "Tungumál", "enable_and_disable": "Virkja tal" },
  "Italiano": { "main_title": "Recupera app repository", "fetch_output": "I dati appariranno qui", "fetch_button": "Recupera!", "main_text_title": "Impostazioni e accessibilità", "gender_label": "Genere", "language_label": "Lingua", "enable_and_disable": "Attiva/disattiva sintesi vocale" },
  "ქართული": { "main_title": "რეპოზიტორის აპლიკაციის მიღება", "fetch_output": "მონაცემები აქ გამოჩნდება", "fetch_button": "მიღება!", "main_text_title": "პარამეტრები და წვდომა", "gender_label": "სქესი", "language_label": "ენა", "enable_and_disable": "ხმის ჩართვა/გამორთვა" },
  "Қазақша": { "main_title": "Репозиторий қолданбасын алу", "fetch_output": "Деректер осында шығады", "fetch_button": "Алу!", "main_text_title": "Параметрлер", "gender_label": "Жынысы", "language_label": "Тіл", "enable_and_disable": "Дыбысты қосу" },
  "ភាសាខ្មែរ": { "main_title": "ទាញយកកម្មវិធីឃ្លាំង", "fetch_output": "ទិន្នន័យនឹងបង្ហាញនៅទីនេះ", "fetch_button": "ទាញយក!", "main_text_title": "ការកំណត់", "gender_label": "ភេទ", "language_label": "ភាសា", "enable_and_disable": "បើក/បិទសំឡេង" },
  "ಕನ್ನಡ": { "main_title": "ರೆಪೊಸಿಟರಿ ಅಪ್ಲಿಕೇಶನ್ ಪಡೆಯಿರಿ", "fetch_output": "ಡೇಟಾ ಇಲ್ಲಿ ಗೋಚರಿಸುತ್ತದೆ", "fetch_button": "ಪಡೆಯಿರಿ!", "main_text_title": "ಸೆಟ್ಟಿಂಗ್‌ಗಳು", "gender_label": "ಲಿಂಗ", "language_label": "ಭಾಷೆ", "enable_and_disable": "ಧ್ವನಿಯನ್ನು ಸಕ್ರಿಯಗೊಳಿಸಿ" },
  "한국어": { "main_title": "저장소 앱 가져오기", "fetch_output": "데이터가 여기에 표시됩니다", "fetch_button": "가져오기!", "main_text_title": "설정 및 접근성", "gender_label": "성별", "language_label": "언어", "enable_and_disable": "음성 읽기 설정/해제" },
  "Nederlands": { "main_title": "Repository-app ophalen", "fetch_output": "Gegevens verschijnen hier", "fetch_button": "Ophalen!", "main_text_title": "Instellingen en toegankelijkheid", "gender_label": "Geslacht", "language_label": "Taal", "enable_and_disable": "Tekst-naar-spraak aan/uit" },
  "Português (Brasil)": { "main_title": "Obter app do repositório", "fetch_output": "Os dados aparecerão aqui", "fetch_button": "Obter!", "main_text_title": "Configurações e acessibilidade", "gender_label": "Gênero", "language_label": "Idioma", "enable_and_disable": "Ativar/desativar voz" },
  "简体字": { "main_title": "获取仓库应用", "fetch_output": "数据将在此显示", "fetch_button": "获取！", "main_text_title": "设置与辅助功能", "gender_label": "性别", "language_label": "语言", "enable_and_disable": "启用/禁用语音" },
  "繁體字": { "main_title": "獲取倉庫應用", "fetch_output": "數據將在此顯示", "fetch_button": "獲取！", "main_text_title": "設置與輔助功能", "gender_label": "性別", "language_label": "語言", "enable_and_disable": "啟用/禁用語音" },
  "Tiếng Việt": { "main_title": "Tải ứng dụng kho lưu trữ", "fetch_output": "Dữ liệu sẽ hiển thị ở đây", "fetch_button": "Tải về!", "main_text_title": "Cài đặt và truy cập", "gender_label": "Giới tính", "language_label": "Ngôn ngữ", "enable_and_disable": "Bật/tắt giọng nói" },
  "Українська": { "main_title": "Отримати додаток репозиторію", "fetch_output": "Дані з'являться тут", "fetch_button": "Отримати!", "main_text_title": "Налаштування та доступність", "gender_label": "Стать", "language_label": "Мова", "enable_and_disable": "Увімкнути голос" }
};

var genderOptions;
var languageOptions;

// hides enable_and_disable2 to prevent confusion and frusratation
hideElement("enable_and_disable2");

onEvent("fetch_button", "click", function( ) {
  
  // gets the url that wants to be fetched
  
  fetch_url_options = getText("dropdown1_options").trim();
  
  // Calls the function defined before
  
  fetchInfo();
});

onEvent("settingsOptions", "click", function( ){
  // chnges the screen to the settings screen
  setScreen("settings_and_accessibility");
  readActiveScreen("settings_and_accessibility");
});

onEvent("close", "click", function( ){
  // returns to the main screen
  setScreen("mainScreen");
  readActiveScreen("mainScreen");
});

onEvent("enable_and_disable", "click", function( ){
  speechOn = true;
  genderOptions = getText("gender_dropdown");
  languageOptions = getText("language_dropdown");
  readActiveScreen("settings_and_accessibility");
  hideElement("enable_and_disable");
  showElement("enable_and_disable2");
});

onEvent("enable_and_disable2", "click", function( ) {
  speechOn = false;
  hideElement("enable_and_disable2");
  showElement("enable_and_disable");
});

/* Since this was made in app lab, which does not support async/await (app lab uses ES5, and async and await requires
  ES8, released in 2017), and if you use it, it will cause a syntax error. */
  
  
// Using startWebRequest instead of fetch
function fetchInfo(){
  startWebRequest(fetch_url_options, function(status, type, content) {
    // this checks if the request was successful
    if (status == 200) {
      // Parses content to JSON
      var data = JSON.parse(content);
      // shows in console.log
      console.log(data);
      // shows the data to the user through the output
      setText("fetch_output", "Repo: " + data.name + "\nStars: " + data.stargazers_count);
    } else {
      // shows the error through the console
      console.log("An error has occured! Status: " + status);
      // tells you WHY github rejected your request
      console.log("Server Message: " + content);
      // shows the error to the user through the output
      setText("fetch_output", "An error has occured! Status: " + status);
    }
  });
}

function readActiveScreen(screenID){
  
  // makes a variable named "elementList" for "screenContent"
  var elementList = screenContent[screenID];
  // makes a string variable
  var fullSpeech = "";
  
  // sets the current language
  var currentLang = languageOptions;
  
  //creates a new variable in this for function by creating local variables and getting the lenght of "elementList"
  for (var i = 0; i < elementList.length; i++) {
    // Concatination of strings
    var elementID = elementList[i];
    
    if (translations[currentLang] && translations[currentLang][elementID]){
      // translates text
      fullSpeech += translations[currentLang][elementID]+ ". ";
    } else {
      fullSpeech += getText(elementID) + ". ";
    }
  }
  
  // Tells the program to play the speech while also specifying language and gender while speechOn == true

  playSpeech(fullSpeech, genderOptions, currentLang);
  console.log("Text to speech is currently being read on the current screen in " + currentLang + "...");
  
}
