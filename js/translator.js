// Language data URL (modify this with the correct path to your languages.json)
const languageDataURL = "./js/languages.json";

let language = {}; // Empty object to store language data

function updateLanguageContent(lang) {
    if (language[lang]) {
        var elementsToTranslate = document.querySelectorAll(".translate");
        elementsToTranslate.forEach(function (element) {
            var key = element.id;
            if (language[lang][key]) {
                element.innerHTML = language[lang][key];
            }
        });

        var placeholders = {
            "input-name": language[lang]["placeholder-name"],
            "input-email": language[lang]["placeholder-email"],
            "input-phone": language[lang]["placeholder-phone"],
            "textarea-message": language[lang]["placeholder-message"],
        };

        for (var id in placeholders) {
            if (placeholders.hasOwnProperty(id)) {
                var element = document.getElementById(id);
                if (element) {
                    element.placeholder = placeholders[id];
                }
            }
        }
    }
}

window.onload = function () {
    var dataReload = document.querySelectorAll("[data-reload]");
    for (i = 0; i < dataReload.length; i++) {
        dataReload[i].onclick = function () {
            location.reload(true);
        };
    }

    // Fetch language data from the JSON file
    fetch(languageDataURL)
        .then((response) => response.json())
        .then((data) => {
            language = data; // Store the fetched language data in the 'language' object
            var langFromHash = window.location.hash.substr(1);
            var browserLang = navigator.language.substring(0, 2);
            var defaultLang = langFromHash || browserLang || "en";
            var langToUse = language[defaultLang] ? defaultLang : "en";
            updateLanguageContent(langToUse);
            var langName = language[langToUse]["languageButton"];
            var languageButton = document.getElementById("languageButton");
            if (languageButton) {
                languageButton.innerHTML = langName;
            }
        })
        .catch((error) => {
            console.error("Error fetching language data:", error);
        });
};

function changeLanguage(lang) {
    window.location.hash = lang === "en" ? "" : lang;
    location.reload(true);
}