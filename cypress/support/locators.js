const locators = {

    HOME: {
        TITLE: '.css-b0lxuf > h1',
        SUB_TITLE: '.css-6svy1r',
        BTN_APPLE: '.css-iyyquh > [href="https://apps.apple.com/us/app/rain-instant-pay/id1492069669?ls=1"] > .css-11exr7d',
        BTN_ANDROID: '.css-iyyquh > [href="https://play.google.com/store/apps/details?id=us.rain.app"] > .css-hhh2mr',
        BTN_JOIN_OUR_TEAM: '.e1fo186j5',
        BTN_EMPLOYERS_ACCESS: '.e1fo186j4'
    },

    MENU: {
        ABOUT_US: '[title="About us"]',
        HOW_IT_WORKS: '[title="How it works"]',
        BLOG: '[title="Blog"]',
        CONTACT: '[title="Contact"]',
        EMPLOYERS_ACCESS: '.e1fo186j4'
    },

    EMPLOYERS_ACCESS: {
        EMAIL: '#field-2',
        PASSWORD: '#field-3',
        SIGN_IN: '.css-1rzutw8',
        MSG_ERROR: 'span',
        TITLE: '.chakra-heading',
        BTN_FORGOT: '.chakra-input__right-element > .chakra-button',
        TITLE_FORGOT_PASSWORD: '.chakra-heading',
        IPT_EMAIL: '#field-4',
        BTN_SEND_RESET_CODE: '.css-16t9v0m', 
        TITLE_CONFIRM_YOUR_EMAIL: '.chakra-heading',
        TEXT: '.css-1poryjh',
        IPT_CODE: '#pin-input-5-0',
        BTN_NEXT: '.css-8ao06w',
        TITLE_NEW_PASSWORD: '.chakra-heading',
        TEXT_NEW_PASSWORD: '.css-1poryjh',
        IPT_NEW_PASSWORD: '#field-6-label',
        BTN_SHOW_RIDE: '.chakra-input__right-element > .chakra-button',
        BTN_CONFIRM: '.css-8ao06w',
        BTN_BACK: '.css-bdovnr'
    },

    ABOUT_US: {
        TITLE: '.css-f87v > h3',
        TEXT: '.css-f87v > p',
        BTN_TALK_WITH_US: '.css-1dpi2s8 > a'
    },

    HOW_IT_WORKS: {
        TITLE: '.css-xoungs',
        TEXT: '.css-1ezlcff',
        TAB_EASY_INTEGRATIONS: ':nth-child(1) > label',
        TAB_RAIN_MOBILE_APP: ':nth-child(2) > label',
        TAB_HOW_WE_PAY_OUR_BILLS: '.css-9dilnq > :nth-child(3) > label',
        TITLE_EASY_INTEGRATIONS: '.css-1tex4y4 > h3',
        TITLE_RAIN_MOBILE_APP: '.css-1tex4y4 > h3',
        TITLE_HOW_WE_PAY_OUR_BILLS: '.css-1tex4y4 > h3',
    },

    BLOG: {
        TAB_FINANCIAL_WELLNESS: '[href="/blog/categories/financial-wellness"]',
        TAB_BUSINESS: '[href="/blog/categories/business"]',
        TAB_HUMAN_RESOURCES: '[href="/blog/categories/human-resources"]',
        TAB_ANNOUNCEMENTS: '[href="/blog/categories/announcements"]',
        TITLE_FINANCIAL_WELLNESS: '.css-14x7jg4',
        TITLE_BUSINESS: '.css-14x7jg4',
        TITLE_HUMAN_RESOURCES: '.css-14x7jg4',
        TITLE_ANNOUNCEMENTS: '.css-14x7jg4', 
    },

    CONTACT: {
        TITLE: '.css-pey64p',
        TEXT: 'h3',
        TEXT2: '.css-pf1de2 > :nth-child(2)',
        IPT_FIRT_NAME: '#firstname',
        IPT_LAST_NAME: '#lastname',
        IPT_EMAIL: '#email',
        IPT_PHONE: '#phone',
        IPT_COMPANY: '#company',
        IPT_EMPLOYEE_COUNT: '.css-14litfr',
        IPT_JOB_TITLE: '#jobtitle',
        IPT_MESSAGE: '#message',
        BTN_SUBMIT: '.css-oeov2r',
        TEXT3: '.css-mmivbp',
        MSG_REQUIRED_FIELD_NAME: ':nth-child(3) > .css-gc4kit',
        MSG_REQUIRED_FIELD_LAST: ':nth-child(4) > .css-gc4kit',
        MSG_REQUIRED_FIELD_EMAIL: ':nth-child(5) > .css-gc4kit',
        MSG_REQUIRED_FIELD_PHONE: ':nth-child(6) > .css-gc4kit',
        MSG_REQUIRED_FIELD_COMPANY: ':nth-child(7) > .css-gc4kit',
        MSG_REQUIRED_FIELD_JOB_TITLE: ':nth-child(9) > .css-gc4kit'
    }
}

export default locators;