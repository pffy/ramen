# ramen
Google Apps Script locale template repo

> ### **NOTE:** This is a simple template. More work in forked repos.

This repo:

+ implements the locale found in the **File > Settings** preferences box.
+ includes Google Apps Script addon snippet for locale-handling
  + uses `Spreadsheet.getSpreadsheetLocale()` method to return the locale code
  + document-centered locale, not user-centered locale
+ includes TSV data file
+ includes two sample locales: `en_US` and `fr_FR`
+ uses locale code as keys for retrieving strings values in `msgs` object
+ uses locale codes as listed in the table below:


Locale | `Code`
:--- | :---:
Argentina | `es_AR`
Armenia | `hy_AM`
Australia | `en_AU`
Azerbaijan | `az_AZ`
Belarus | `es_BY`
Bolivia | `es_BO`
Brazil | `pt_BR`
Bulgaria | `bg_BG`
Canada (English) | `en_CA`
Canada (French) | `fr_CA`
Chile | `es_CL`
China | `zh_CN`
Colombia | `es_CO`
Croatia | `hr_HR`
Czechia | `cs_CZ`
Denmark | `da_DK`
Ecuador | `es_EC`
Egypt | `ar_EG`
Finland | `fi_FI`
France | `fr_FR`
Georgia | `ka_GE`
Germany | `de_DE`
Greece | `el_GR`
Hong Kong | `zh_HK`
Hungary | `hu_HU`
India | `hi_IN`
India (Bengali) | `bn_IN`
India (Gujarati) | `gu_IN`
India (Kannada) | `kn_IN`
India (Malayalam) | `ml_IN`
India (Marathi) | `mr_IN`
India (Panjabi) | `pa_IN`
India (Tamil) | `ta_IN`
India (Telugu) | `te_IN`
Indonesia | `in_ID`
Ireland | `en_IE`
Israel | `he_IL`
Italy | `it_IT`
Japan | `ja_JP`
Kazakhstan | `kk_KZ`
Latvia | `lv_LV`
Lithuania | `lt_LT`
Mexico | `es_MX`
Mongolia | `mn_MN`
Myanmar (Burma) | `my_MM`
Netherlands | `nl_NL`
Norway (Norwegian Bokmål) | `no_NO`
Norway (Norwegian Nynorsk) | `nn_NO`
Paraguay | `es_PY`
Philippines | f`il_PH`
Poland | `pl_PL`
Portugal | `pt_PT`
Romania | `ro_RO`
Russia | `ru_RU`
Serbia | `sr_RS`
Slovakia | `sk_SK`
Slovenia | `sl_SL`
South Korea | `ko_KR`
Spain | `es_ES`
Spain (Catalan) | `ca_ES`
Sweden | `sv_SE`
Switzerland | `de_CH`
Taiwan | `zh_TW`
Thailand | `th_TH`
Turkey (Turkiye) | `tr_TR`
Ukraine | `uk_UA`
United Kingdom | `en_GB`
United Kingdom (Welsh) | `cy_GB`
United States | `en_US`
Uruguay | `es_UY`
Venezuela | `es_VE`
Vietnam | `vi_VN`


