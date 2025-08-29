// Terjemahan UI
const uiTranslations = {
    "ID": {
        "title": "Alat Penerjemah Novel",
        "subtitle": "Terjemahkan novel atau teks panjang dengan mudah",
        "ui_lang": "Bahasa Antarmuka:",
        "src_lang": "Bahasa Sumber:",
        "dest_lang": "Bahasa Target:",
        "src_text": "Teks Sumber",
        "dest_text": "Hasil Terjemahan",
        "translate": "Terjemahkan",
        "import": "Impor Teks",
        "export": "Ekspor Hasil",
        "clear": "Bersihkan",
        "settings": "Pengaturan",
        "ready": "Siap",
        "translating": "Sedang menerjemahkan...",
        "complete": "Terjemahan selesai",
        "error": "Error terjadi",
        "cleared": "Teks telah dibersihkan",
        "file_loaded": "File dimuat: ",
        "file_saved": "File disimpan: ",
        "no_text": "Tidak ada teks untuk diterjemahkan!",
        "chars": "karakter",
        "api_key_required": "API key diperlukan untuk layanan ini",
        "api_error": "Error API: ",
        "network_error": "Error jaringan: ",
        "provider": "Layanan Terjemahan:"
    },
    "EN": {
        "title": "Novel Translation Tool",
        "subtitle": "Easily translate novels or long texts",
        "ui_lang": "UI Language:",
        "src_lang": "Source Language:",
        "dest_lang": "Target Language:",
        "src_text": "Source Text",
        "dest_text": "Translated Result",
        "translate": "Translate",
        "import": "Import Text",
        "export": "Export Result",
        "clear": "Clear",
        "settings": "Settings",
        "ready": "Ready",
        "translating": "Translating...",
        "complete": "Translation complete",
        "error": "Error occurred",
        "cleared": "Text cleared",
        "file_loaded": "File loaded: ",
        "file_saved": "File saved: ",
        "no_text": "No text to translate!",
        "chars": "characters",
        "api_key_required": "API key required for this service",
        "api_error": "API Error: ",
        "network_error": "Network Error: ",
        "provider": "Translation Provider:"
    },
    "JP": {
        "title": "小説翻訳ツール",
        "subtitle": "小説や長文を簡単に翻訳",
        "ui_lang": "UIの言語:",
        "src_lang": "元の言語:",
        "dest_lang": "目標言語:",
        "src_text": "元のテキスト",
        "dest_text": "翻訳結果",
        "translate": "翻訳",
        "import": "テキストをインポート",
        "export": "結果をエクスポート",
        "clear": "クリア",
        "settings": "設定",
        "ready": "準備完了",
        "translating": "翻訳中...",
        "complete": "翻訳完了",
        "error": "エラーが発生しました",
        "cleared": "テキストをクリアしました",
        "file_loaded": "ファイルを読み込み: ",
        "file_saved": "ファイルを保存: ",
        "no_text": "翻訳するテキストがありません!",
        "chars": "文字",
        "api_key_required": "このサービスにはAPIキーが必要です",
        "api_error": "APIエラー: ",
        "network_error": "ネットワークエラー: ",
        "provider": "翻訳プロバイダー:"
    },
    "KR": {
        "title": "소설 번역 도구",
        "subtitle": "소설이나 긴 글을 쉽게 번역",
        "ui_lang": "UI 언어:",
        "src_lang": "원본 언어:",
        "dest_lang": "목표 언어:",
        "src_text": "원본 텍스트",
        "dest_text": "번역 결과",
        "translate": "번역",
        "import": "텍스트 가져오기",
        "export": "결과 내보내기",
        "clear": "지우기",
        "settings": "설정",
        "ready": "준비 완료",
        "translating": "번역 중...",
        "complete": "번역 완료",
        "error": "오류 발생",
        "cleared": "텍스트 지움",
        "file_loaded": "파일 불러옴: ",
        "file_saved": "파일 저장: ",
        "no_text": "번역할 텍스트가 없습니다!",
        "chars": "글자",
        "api_key_required": "이 서비스에는 API 키가 필요합니다",
        "api_error": "API 오류: ",
        "network_error": "네트워크 오류: ",
        "provider": "번역 제공자:"
    },
    "CN": {
        "title": "小说翻译工具",
        "subtitle": "轻松翻译小说或长文本",
        "ui_lang": "界面语言:",
        "src_lang": "源语言:",
        "dest_lang": "目标语言:",
        "src_text": "源文本",
        "dest_text": "翻译结果",
        "translate": "翻译",
        "import": "导入文本",
        "export": "导出结果",
        "clear": "清除",
        "settings": "设置",
        "ready": "准备就绪",
        "translating": "翻译中...",
        "complete": "翻译完成",
        "error": "发生错误",
        "cleared": "文本已清除",
        "file_loaded": "文件已加载: ",
        "file_saved": "文件已保存: ",
        "no_text": "没有要翻译的文本!",
        "chars": "字符",
        "api_key_required": "此服务需要API密钥",
        "api_error": "API错误: ",
        "network_error": "网络错误: ",
        "provider": "翻译提供商:"
    }
};

// Teks contoh untuk berbagai bahasa
const sampleTexts = {
    "JP": "吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。",
    "KR": "나는 고양이로소이다. 이름은 아직 없다. 어디에서 태어났는지 전혀 짐작이 안 간다. 다만 어둡고 축축한 곳에서 야옹야옹 울고 있던 것만은 기억하고 있다.",
    "CN": "我是猫。名字还没有。出生在哪里一点都估计不到。只记得在阴暗潮湿的地方喵喵地哭过。",
    "EN": "I am a cat. I don't have a name yet. I have no idea where I was born. I only remember meowing in a dark, damp place.",
    "ID": "Saya adalah kucing. Belum punya nama. Sama sekali tidak tahu di mana saya dilahirkan. Saya hanya ingat mengeong di tempat yang gelap dan lembab."
};

// Variabel global
let currentUILang = "ID";

// Inisialisasi aplikasi
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Setup event listeners
    document.getElementById('ui-language').addEventListener('change', updateUILanguage);
    document.getElementById('translate-btn').addEventListener('click', startTranslation);
    document.getElementById('swap-languages').addEventListener('click', swapLanguages);
    document.getElementById('import-btn').addEventListener('click', () => document.getElementById('file-input').click());
    document.getElementById('export-btn').addEventListener('click', exportText);
    document.getElementById('clear-btn').addEventListener('click', clearText);
    document.getElementById('file-input').addEventListener('change', importText);
    document.getElementById('source-text').addEventListener('input', updateCharCount);
    document.getElementById('settings-btn').addEventListener('click', showSettings);
    document.getElementById('toggle-api-key').addEventListener('click', toggleApiKeyVisibility);
    document.querySelector('.close').addEventListener('click', closeSettings);
    
    // Close modal ketika klik di luar konten
    window.addEventListener('click', function(event) {
        if (event.target === document.getElementById('settings-modal')) {
            closeSettings();
        }
    });
    
    // Sample text buttons
    document.querySelectorAll('.sample-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            loadSampleText(lang);
        });
    });
    
    // Load saved API key jika ada
    const savedApiKey = localStorage.getItem('novel_translator_api_key');
    if (savedApiKey) {
        document.getElementById('api-key').value = savedApiKey;
    }
    
    // Set bahasa UI default
    updateUILanguage();
    updateCharCount();
}

function updateUILanguage() {
    currentUILang = document.getElementById('ui-language').value;
    const texts = uiTranslations[currentUILang];
    
    // Update UI texts
    document.querySelector('header h1').textContent = texts.title;
    document.querySelector('header p').textContent = texts.subtitle;
    document.querySelector('label[for="ui-language"]').textContent = texts.ui_lang;
    document.querySelector('label[for="api-provider"]').textContent = texts.provider;
    document.querySelector('label[for="source-language"]').textContent = texts.src_lang;
    document.querySelector('label[for="target-language"]').textContent = texts.dest_lang;
    document.querySelector('label[for="source-text"]').textContent = texts.src_text;
    document.querySelector('label[for="target-text"]').textContent = texts.dest_text;
    document.getElementById('translate-btn').innerHTML = `<i class="fas fa-exchange-alt"></i> ${texts.translate}`;
    document.getElementById('import-btn').innerHTML = `<i class="fas fa-file-import"></i> ${texts.import}`;
    document.getElementById('export-btn').innerHTML = `<i class="fas fa-file-export"></i> ${texts.export}`;
    document.getElementById('clear-btn').innerHTML = `<i class="fas fa-broom"></i> ${texts.clear}`;
    document.getElementById('settings-btn').innerHTML = `<i class="fas fa-cog"></i> ${texts.settings}`;
    
    // Update placeholder texts
    document.getElementById('source-text').placeholder = currentUILang === 'ID' 
        ? 'Masukkan teks yang ingin diterjemahkan...' 
        : 'Enter text to translate...';
    
    document.getElementById('target-text').placeholder = currentUILang === 'ID' 
        ? 'Hasil terjemahan akan muncul di sini...' 
        : 'Translated result will appear here...';
    
    document.getElementById('api-key').placeholder = currentUILang === 'ID' 
        ? 'Masukkan API key jika diperlukan' 
        : 'Enter API key if required';
    
    // Update status jika dalam keadaan default
    if (document.getElementById('status-bar').textContent === 'Siap' || 
        document.getElementById('status-bar').textContent === 'Ready') {
        document.getElementById('status-bar').textContent = texts.ready;
    }
    
    updateCharCount();
}

function updateCharCount() {
    const sourceText = document.getElementById('source-text').value;
    const targetText = document.getElementById('target-text').value;
    const charsText = uiTranslations[currentUILang].chars;
    
    document.getElementById('source-char-count').textContent = 
        `${sourceText.length} ${charsText}`;
    document.getElementById('target-char-count').textContent = 
        `${targetText.length} ${charsText}`;
}

function loadSampleText(lang) {
    document.getElementById('source-text').value = sampleTexts[lang];
    
    // Set bahasa sumber sesuai dengan sample
    const langMap = {
        "JP": "ja", "KR": "ko", "CN": "zh", "EN": "en", "ID": "id"
    };
    
    document.getElementById('source-language').value = langMap[lang];
    updateCharCount();
    
    // Update status
    document.getElementById('status-bar').textContent = 
        `${uiTranslations[currentUILang].file_loaded} ${lang} Sample`;
}

async function startTranslation() {
    const sourceText = document.getElementById('source-text').value.trim();
    const sourceLang = document.getElementById('source-language').value;
    const targetLang = document.getElementById('target-language').value;
    const apiProvider = document.getElementById('api-provider').value;
    const apiKey = document.getElementById('api-key').value;
    
    if (!sourceText) {
        alert(uiTranslations[currentUILang].no_text);
        return;
    }
    
    // Simpan API key jika checkbox dicentang
    if (document.getElementById('save-api-key').checked && apiKey) {
        localStorage.setItem('novel_translator_api_key', apiKey);
    }
    
    // Disable button dan show progress
    document.getElementById('translate-btn').disabled = true;
    document.getElementById('progress-container').style.display = 'block';
    document.getElementById('progress-text').textContent = uiTranslations[currentUILang].translating;
    document.getElementById('status-bar').textContent = uiTranslations[currentUILang].translating;
    
    try {
        // Panggil API berdasarkan provider yang dipilih
        const translatedText = await callTranslationAPI(apiProvider, sourceText, sourceLang, targetLang, apiKey);
        
        // Tampilkan hasil
        document.getElementById('target-text').value = translatedText;
        
        // Update status
        document.getElementById('status-bar').textContent = uiTranslations[currentUILang].complete;
    } catch (error) {
        console.error('Translation error:', error);
        document.getElementById('status-bar').textContent = 
            `${uiTranslations[currentUILang].error}: ${error.message}`;
    } finally {
        // Sembunyikan progress bar
        document.getElementById('progress-container').style.display = 'none';
        document.getElementById('translate-btn').disabled = false;
        updateCharCount();
    }
}

async function callTranslationAPI(provider, text, sourceLang, targetLang, apiKey = null) {
    switch (provider) {
        case 'google':
            return await translateWithGoogle(text, sourceLang, targetLang);
        case 'deepl':
            return await translateWithDeepL(text, sourceLang, targetLang, apiKey);
        case 'openai':
            return await translateWithOpenAI(text, sourceLang, targetLang, apiKey);
        case 'claude':
            return await translateWithClaude(text, sourceLang, targetLang, apiKey);
        case 'gemini':
            return await translateWithGemini(text, sourceLang, targetLang, apiKey);
        case 'microsoft':
            return await translateWithMicrosoft(text, sourceLang, targetLang, apiKey);
        default:
            throw new Error('Provider tidak dikenali');
    }
}

// Implementasi berbagai API terjemahan

async function translateWithGoogle(text, sourceLang, targetLang) {
    // Google Translate API (menggunakan endpoint publik)
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sourceLang}&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`;
    
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        return data[0].map(item => item[0]).join('');
    } catch (error) {
        console.error('Google Translate error:', error);
        throw new Error(uiTranslations[currentUILang].api_error + error.message);
    }
}

async function translateWithDeepL(text, sourceLang, targetLang, apiKey) {
    if (!apiKey) {
        throw new Error(uiTranslations[currentUILang].api_key_required);
    }
    
    // DeepL API
    const url = 'https://api-free.deepl.com/v2/translate';
    const params = new URLSearchParams({
        auth_key: apiKey,
        text: text,
        source_lang: sourceLang.toUpperCase(),
        target_lang: targetLang.toUpperCase()
    });
    
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: params
        });
        
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        return data.translations[0].text;
    } catch (error) {
        console.error('DeepL API error:', error);
        throw new Error(uiTranslations[currentUILang].api_error + error.message);
    }
}

async function translateWithOpenAI(text, sourceLang, targetLang, apiKey) {
    if (!apiKey) {
        throw new Error(uiTranslations[currentUILang].api_key_required);
    }
    
    // ChatGPT API
    const url = 'https://api.openai.com/v1/chat/completions';
    const prompt = `Translate the following text from ${sourceLang} to ${targetLang}:\n\n${text}`;
    
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                messages: [
                    {
                        role: 'system',
                        content: 'You are a professional translator. Translate the text accurately while preserving the original meaning and style.'
                    },
                    {
                        role: 'user',
                        content: prompt
                    }
                ],
                max_tokens: 2000,
                temperature: 0.3
            })
        });
        
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error?.message || `HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        return data.choices[0].message.content.trim();
    } catch (error) {
        console.error('OpenAI API error:', error);
        throw new Error(uiTranslations[currentUILang].api_error + error.message);
    }
}

async function translateWithClaude(text, sourceLang, targetLang, apiKey) {
    if (!apiKey) {
        throw new Error(uiTranslations[currentUILang].api_key_required);
    }
    
    // Claude API (Anthropic)
    const url = 'https://api.anthropic.com/v1/messages';
    const prompt = `Translate the following text from ${sourceLang} to ${targetLang}:\n\n${text}`;
    
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': apiKey,
                'anthropic-version': '2023-06-01'
            },
            body: JSON.stringify({
                model: 'claude-3-sonnet-20240229',
                max_tokens: 2000,
                messages: [
                    {
                        role: 'user',
                        content: prompt
                    }
                ]
            })
        });
        
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error?.message || `HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        return data.content[0].text;
    } catch (error) {
        console.error('Claude API error:', error);
        throw new Error(uiTranslations[currentUILang].api_error + error.message);
    }
}

async function translateWithGemini(text, sourceLang, targetLang, apiKey) {
    if (!apiKey) {
        throw new Error(uiTranslations[currentUILang].api_key_required);
    }
    
    // Gemini API (Google)
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`;
    const prompt = `Translate the following text from ${sourceLang} to ${targetLang}:\n\n${text}`;
    
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                contents: [
                    {
                        parts: [
                            {
                                text: prompt
                            }
                        ]
                    }
                ],
                generationConfig: {
                    temperature: 0.3,
                    maxOutputTokens: 2000
                }
            })
        });
        
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error?.message || `HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        return data.candidates[0].content.parts[0].text.trim();
    } catch (error) {
        console.error('Gemini API error:', error);
        throw new Error(uiTranslations[currentUILang].api_error + error.message);
    }
}

async function translateWithMicrosoft(text, sourceLang, targetLang, apiKey) {
    if (!apiKey) {
        throw new Error(uiTranslations[currentUILang].api_key_required);
    }
    
    // Microsoft Translator API
    // Catatan: Untuk menggunakan API ini, Anda perlu membuat resource di Azure
    const region = 'eastus'; // Ganti dengan region Anda
    const url = `https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&from=${sourceLang}&to=${targetLang}`;
    
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Ocp-Apim-Subscription-Key': apiKey,
                'Ocp-Apim-Subscription-Region': region,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify([{ Text: text }])
        });
        
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error?.message || `HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        return data[0].translations[0].text;
    } catch (error) {
        console.error('Microsoft Translator API error:', error);
        throw new Error(uiTranslations[currentUILang].api_error + error.message);
    }
}

function swapLanguages() {
    const sourceLang = document.getElementById('source-language');
    const targetLang = document.getElementById('target-language');
    const sourceText = document.getElementById('source-text');
    const targetText = document.getElementById('target-text');
    
    // Swap values
    [sourceLang.value, targetLang.value] = [targetLang.value, sourceLang.value];
    [sourceText.value, targetText.value] = [targetText.value, sourceText.value];
    
    // Update character count
    updateCharCount();
}

function importText(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = function(e) {
        document.getElementById('source-text').value = e.target.result;
        updateCharCount();
        document.getElementById('status-bar').textContent = 
            `${uiTranslations[currentUILang].file_loaded} ${file.name}`;
    };
    reader.readAsText(file);
    
    // Reset file input
    event.target.value = '';
}

function exportText() {
    const translatedText = document.getElementById('target-text').value;
    if (!translatedText.trim()) {
        alert(uiTranslations[currentUILang].no_text);
        return;
    }
    
    const blob = new Blob([translatedText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    const date = new Date().toISOString().slice(0, 10);
    
    a.href = url;
    a.download = `translated_novel_${date}.txt`;
    a.click();
    
    URL.revokeObjectURL(url);
    document.getElementById('status-bar').textContent = 
        `${uiTranslations[currentUILang].file_saved} translated_novel_${date}.txt`;
}

function clearText() {
    document.getElementById('source-text').value = '';
    document.getElementById('target-text').value = '';
    updateCharCount();
    document.getElementById('status-bar').textContent = uiTranslations[currentUILang].cleared;
}

function showSettings() {
    document.getElementById('settings-modal').style.display = 'block';
}

function closeSettings() {
    document.getElementById('settings-modal').style.display = 'none';
}

function toggleApiKeyVisibility() {
    const apiKeyInput = document.getElementById('api-key');
    const toggleButton = document.getElementById('toggle-api-key');
    
    if (apiKeyInput.type === 'password') {
        apiKeyInput.type = 'text';
        toggleButton.innerHTML = '<i class="fas fa-eye-slash"></i>';
    } else {
        apiKeyInput.type = 'password';
        toggleButton.innerHTML = '<i class="fas fa-eye"></i>';
    }
}
