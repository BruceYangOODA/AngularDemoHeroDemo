export interface LanguageLabel {
    label: string,
    value: string,
}

export const LanguageConfig: any = {
    LANGUAGE_TOKEN: 'language',
    LANGUAGE_DEFAULT: 'cn',
    LANGUAGES_LIST: {
        CHINESE: 'cn',
        ENGLISH: 'en'
    },
    LANGUAGES_LABELS: [
        {
            label: '中文',
            value: 'cn'
        },
        {
            label: 'English',
            value: 'en'    
        }]
}

