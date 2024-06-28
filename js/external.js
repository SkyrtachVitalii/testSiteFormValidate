//Определим IE 10 и старше
function getInternetExplorerVersion() {
    var rv = -1;
    if (navigator.appName == 'Microsoft Internet Explorer')
    {
        var ua = navigator.userAgent;
        var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
        if (re.exec(ua) != null)
            rv = parseFloat( RegExp.$1 );
    }
    else if (navigator.appName == 'Netscape')
    {
        var ua = navigator.userAgent;
        var re  = new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})");
        if (re.exec(ua) != null)
            rv = parseFloat( RegExp.$1 );
    }
    return rv;
}

var IEver = getInternetExplorerVersion();

if (IEver === 11) {
    var head= document.getElementsByTagName('head')[0];
    var script= document.createElement('script');
    script.type= 'text/javascript';
    script.src = document.getElementById('salesdriveforms_script').src.match(/(http.+\.\w+)\//)[1] + '/salesdriveforms/assets/js/salesdriveformsIE11.js';
    head.appendChild(script);
} else {
    if (typeof window['numberOfForm_' + document.currentScript.getAttribute("forms-id")] == 'undefined') {
        window['numberOfForm_' + document.currentScript.getAttribute("forms-id")] = 0;
    } else {
        window['numberOfForm_' + document.currentScript.getAttribute("forms-id")] ++;
    }

    var salesdrive_form_params = salesdrive_form_params || {},
        SALESDRIVEFORMS = SALESDRIVEFORMS || {};

    salesdrive_form_params[document.currentScript.getAttribute("forms-id") + '_' + window['numberOfForm_' + document.currentScript.getAttribute("forms-id")]] = window['salesdrive_forms_params_' + document.currentScript.getAttribute("forms-id")];
    SALESDRIVEFORMS[document.currentScript.getAttribute("forms-id") + '_' + window['numberOfForm_' + document.currentScript.getAttribute("forms-id")]] = SALESDRIVEFORMS[document.currentScript.getAttribute("forms-id") + '_' + window['numberOfForm_' + document.currentScript.getAttribute("forms-id")]] || {};



    var sd_fp = document.getElementById('salesdrive_forms_params_' + salesdrive_form_params[document.currentScript.getAttribute("forms-id") + '_' + window['numberOfForm_' + document.currentScript.getAttribute("forms-id")]].id);
    sd_fp.id += '_' + window['numberOfForm_' + document.currentScript.getAttribute("forms-id")];

    /*!
     * domready (c) Dustin Diaz 2014 - License MIT
     */
    !function (name, definition) {

        if (typeof module != 'undefined') module.exports = definition()
        else if (typeof define == 'function' && typeof define.amd == 'object') define(definition)
        else this[name] = definition()

    }('domready', function () {

        var fns = [], listener
            , doc = document
            , hack = doc.documentElement.doScroll
            , domContentLoaded = 'DOMContentLoaded'
            , loaded = (hack ? /^loaded|^c/ : /^loaded|^i|^c/).test(doc.readyState)


        if (!loaded)
            doc.addEventListener(domContentLoaded, listener = function () {
                doc.removeEventListener(domContentLoaded, listener)
                loaded = 1
                while (listener = fns.shift()) listener()
            })

        return function (fn) {
            loaded ? setTimeout(fn, 0) : fns.push(fn)
        }

    });

    (function (d, w, init_params) {

        var salesdrive_script = document.currentScript,
            salesdrive_params = window['salesdrive_forms_params_' + init_params.id + '_' + window['numberOfForm_' + init_params.id]] ? window['salesdrive_forms_params_' + init_params.id] : window['salesdrive_forms_params_' + init_params.id + '_' + window['numberOfForm_' + init_params.id]];
        //form_language = salesdrive_forms_params.locale ? salesdrive_forms_params.locale : 'ru',
        head = document.getElementsByTagName('head')[0];
        SALESDRIVEFORMS[init_params.id + '_' + window['numberOfForm_' + init_params.id]].form_server = salesdrive_script.src.match(/(http.+\.\w+)\//)[1];
        SALESDRIVEFORMS[init_params.id + '_' + window['numberOfForm_' + init_params.id]].iframe_params = {'device_width': window.innerWidth};

        var init_frame = function () {
            /** Polyfills **/
            if (typeof window.postMessage === 'undefined') window.postMessage = function (message, targetOrigin, transfer) {};

            if (typeof window['numberOfInit_' + init_params.id] == 'undefined') {
                window['numberOfInit_' + init_params.id] = 0;
            } else {
                window['numberOfInit_' + init_params.id] ++;
            }

            var link = document.createElement('link');
            link.type = 'text/css';
            link.rel = 'stylesheet';
            link.href = SALESDRIVEFORMS[init_params.id + '_' + window['numberOfInit_' + init_params.id]].form_server + '/salesdriveforms/assets/css/salesdriveforms.css';
            head.appendChild(link);

            var escapeHtml = function(text) {
                var map = {'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' };
                return text.replace(/[&<>"']/g, function(m) { return map[m]; });
            };

            //var form_id   = parseInt(init_params.id),
            var form_id   = init_params.id,
                form_hash = escapeHtml(init_params.hash);

            var form_is_modal = document.currentScript.parentNode.getElementsByTagName('button').length > 0;

            //if (typeof form_id === 'undefined' || isNaN(form_id) || form_id <= 0) return;
            if (typeof form_id === 'undefined') return;
            if (typeof form_hash === 'undefined' || form_hash == '') return;
            if (form_is_modal) {
                var btn = document.getElementById('salesdriveforms_action_btn_' + init_params.id);
                btn.id += '_' + window['numberOfInit_' + init_params.id];
            }

            SALESDRIVEFORMS[init_params.id + '_' + window['numberOfInit_' + init_params.id]].iframe_src = SALESDRIVEFORMS[init_params.id + '_' + window['numberOfInit_' + init_params.id]].form_server + '/salesdriveforms/html/form_' + parseInt(form_id) + '_' + form_hash + '.html?date=' + parseInt((new Date()) / 1000);

            window.postMessageListenerAdded = window.postMessageListenerAdded || 0;
            if (typeof window.postMessage === 'function') {

                if (postMessageListenerAdded === 0) {
                    window.addEventListener('message', getPostMessage, false);
                    postMessageListenerAdded ++;
                }
            }

            /** СОЗДАНИЕ IFRAME **/
            var iframe = document.createElement('iframe');
            iframe.setAttribute('id', 'salesdriveforms_iframe_' + form_id + '_' + window['numberOfInit_' + init_params.id]);
            iframe.setAttribute('class', 'salesdriveforms_iframe');
            iframe.setAttribute('name', 'salesdriveforms_iframe_' + form_id + '_' + window['numberOfInit_' + init_params.id]);
            iframe.setAttribute('allowtransparency', '');
            iframe.setAttribute('scrolling', 'no');
            iframe.setAttribute('frameborder', '0');

            if (window.innerWidth < 768) {
                iframe.setAttribute('style', 'width: 100%; position: absolute; height: 100%; overflow: visible; margin: 0; padding: 0; border: none; z-index:10000; right: 0; bottom: 0;');
            } else {
                iframe.setAttribute('style', 'min-width: 280px; width: 100%; position: absolute; height: 100%; overflow: visible; margin: 0; padding: 0; border: none; z-index:10000; right: 0; bottom: 0;');
            }

            SALESDRIVEFORMS[init_params.id + '_' + window['numberOfInit_' + init_params.id]].iframe_params.is_modal = form_is_modal;

            SALESDRIVEFORMS[init_params.id + '_' + window['numberOfInit_' + init_params.id]].iframe_params.defaults = salesdrive_params.defaults ? salesdrive_params.defaults : "";

            var utm_str = document.cookie,
                utm = {};

            utm.prodex24source_full = (utm_str.match(/prodex24source_full=(.+?)(&|[#]|$|;)/));
            utm.prodex24source = (utm_str.match(/prodex24source=(.+?)(&|[#]|$|;)/));
            utm.prodex24medium = (utm_str.match(/prodex24medium=(.+?)(&|[#]|$|;)/));
            utm.prodex24campaign = (utm_str.match(/prodex24campaign=(.+?)(&|[#]|$|;)/));
            utm.prodex24campaign_id = (utm_str.match(/prodex24campaign_id=(.+?)(&|[#]|$|;)/));
            utm.prodex24term = (utm_str.match(/prodex24term=(.+?)(&|[#]|$|;)/));
            utm.prodex24content = (utm_str.match(/prodex24content=(.+?)(&|[#]|$|;)/));

            utm.prodex24page = window.location.href;

            utm.prodex24source_full = (utm.hasOwnProperty('prodex24source_full') && utm.prodex24source_full !== null && utm.prodex24source_full.length > 1 && utm.prodex24source_full[1][0] !== ';') ? utm.prodex24source_full[1]: '';
            utm.prodex24source = (utm.hasOwnProperty('prodex24source') && utm.prodex24source !== null && utm.prodex24source.length > 1 && utm.prodex24source[1][0] !== ';') ? utm.prodex24source[1]: '';
            utm.prodex24medium = (utm.hasOwnProperty('prodex24medium') && utm.prodex24medium !== null && utm.prodex24medium.length > 1 && utm.prodex24medium[1][0] !== ';') ? utm.prodex24medium[1]: '';
            utm.prodex24campaign = (utm.hasOwnProperty('prodex24campaign') && utm.prodex24campaign !== null && utm.prodex24campaign.length > 1 && utm.prodex24campaign[1][0] !== ';') ? utm.prodex24campaign[1]: '';
            utm.prodex24campaign_id = (utm.hasOwnProperty('prodex24campaign_id') && utm.prodex24campaign_id !== null && utm.prodex24campaign_id.length > 1 && utm.prodex24campaign_id[1][0] !== ';') ? utm.prodex24campaign_id[1]: '';
            utm.prodex24term = (utm.hasOwnProperty('prodex24term') && utm.prodex24term !== null && utm.prodex24term.length > 1 && utm.prodex24term[1][0] !== ';') ? utm.prodex24term[1]: '';
            utm.prodex24content = (utm.hasOwnProperty('prodex24content') && utm.prodex24content !== null && utm.prodex24content.length > 1 && utm.prodex24content[1][0] !== ';') ? utm.prodex24content[1]: '';

            SALESDRIVEFORMS[init_params.id + '_' + window['numberOfInit_' + init_params.id]].iframe_params.utm = utm;
            SALESDRIVEFORMS[init_params.id + '_' + window['numberOfInit_' + init_params.id]].iframe_params.location = location.origin + location.pathname;
            iframe.src = SALESDRIVEFORMS[init_params.id + '_' + window['numberOfInit_' + init_params.id]].iframe_src + '#' + encodeURIComponent(JSON.stringify(SALESDRIVEFORMS[init_params.id + '_' + window['numberOfInit_' + init_params.id]].iframe_params));

            /** Добавляем iframe на страницу (а если выбрана модальная форма, то добавляем в оверлей) **/
            if (form_is_modal) {
                var overlay = document.createElement('div'),
                    i = document.createElement('i'),
                    style = document.createElement('style');

                overlay.id = 'salesdriveforms_overlay_' + init_params.id + '_' + window['numberOfInit_' + init_params.id];
                overlay.setAttribute('style', 'position: absolute; top: 0; left: 0; bottom: 0; right: 0; background: rgba(0,0,0,0.7); padding-top: 25px; z-index: -1000;');
                overlay.style.opacity = '0'; // используются для того, что бы пользователеь не видел форму, но возможность высчитать её высоту оставалась
                document.body.appendChild(overlay);

                i.id = 'salesdriveforms_close_' + init_params.id + '_' + window['numberOfInit_' + init_params.id];

                overlay.appendChild(style);
                overlay.appendChild(i);
                overlay.appendChild(iframe);

            } else {
                document.currentScript.parentNode.insertBefore(iframe, document.currentScript);
            }

            // Событие 'message'
            function getPostMessage (e) {
                if (e.origin !== SALESDRIVEFORMS[init_params.id + '_' + window['numberOfInit_' + init_params.id]].form_server) return;
                var params = JSON.parse(e.data);

                switch (params.func) {
                    case 'resizeForm':
                        resizeSalesdriveframe(params);
                        break;
                    case 'getFormInfo':
                        getFormInfo(params);
                        resizeSalesdriveframe(params);
                        break;
                    case 'scrollTop':
                        setScrollTop(params);
                        break;
                    case 'sendGAInfo':
                        sendGAInfo('send', params);
                        break;
                    case 'resizeFormModal':
                        resizeFormModal(params);
                        break;
                }

            }

            function _sendGAInfo(status, params) {
                if (typeof ga === 'function') {
                    var iframe_id = params.iframe_id.split('_');

                    switch (status) {
                        case 'open':
                            ga('send', 'pageview', '/salesdrive/form-' + iframe_id[2] + '/open');
                            break;
                        case 'send':
                            ga('send', 'pageview', '/salesdrive/form-' + iframe_id[2] + '/send');
                            break;
                    }
                }
            }

            function sendGAInfo(status, params) {
                var iframe_id = params.iframe_id.split('_');
                //Google Universal Analytics code
                if (typeof ga === 'function') {
                    switch (status) {
                        case 'open':
                            ga('send', 'event', 'salesdriveForm', 'open', iframe_id[2]);
                            break;
                        case 'send':
                            ga('send', 'event', 'salesdriveForm', 'send', iframe_id[2]);
                            break;
                    }
                }
                //Google GTAG code (Google Analytics)
                if (typeof gtag === 'function') {
                    switch (status) {
                        case 'open':
                            gtag('event', 'open', {
                                'event_category': 'salesdriveForm',
                                'event_label': iframe_id[2]
                            });
                            break;
                        case 'send':
                            gtag('event', 'send', {
                                'event_category': 'salesdriveForm',
                                'event_label': iframe_id[2]
                            });
                            break;
                    }
                }
                //Google Tag Manager (GTM) - fire custom event
                if ((typeof dataLayer === 'object') && (typeof(dataLayer.push) === 'function')) {
                    switch (status) {
                        case 'open':
                            dataLayer.push(
                                {'event': 'salesdriveFormOpen'}
                            );
                            break;
                        case 'send':
                            dataLayer.push(
                                {'event': 'salesdriveFormSend'}
                            );
                            break;
                    }
                }
                //Track Facebook Lead on sending form (with facebook Pixel)
                if (typeof fbq === 'function') {
                    switch (status) {
                        case 'send':
                            fbq('track', 'Lead', {
                                'content_name': 'salesdriveFormSend',
                            });
                            break;
                    }
                }
            }

            /** Открываем форму в модальном окне **/

            //Расчет ширины скролла
            function getScrollBarSize () {
                var inner = document.createElement('p');
                inner.style.width = "100%";
                inner.style.height = "100%";

                var outer = document.createElement('div');
                outer.style.position = "absolute";
                outer.style.top = "0px";
                outer.style.left = "0px";
                outer.style.visibility = "hidden";
                outer.style.width = "100px";
                outer.style.height = "100px";
                outer.style.overflow = "hidden";
                outer.appendChild(inner);

                document.body.appendChild(outer);

                var w1 = inner.offsetWidth;
                outer.style.overflow = 'scroll';
                var w2 = inner.offsetWidth;
                if (w1 == w2) w2 = outer.clientWidth;

                document.body.removeChild (outer);

                return (w1 - w2);
            };
            var scrollbarWidth = getScrollBarSize();

            function openModalForm (params) {
                var iframe_id = params.iframe_id,
                    iframeId = params.iframe_id.split('_'),
                    overLay = document.getElementById('salesdriveforms_overlay_' + iframeId[2] + '_' + iframeId[3] + (iframeId.length == 5 ? '_' + iframeId[4] : ''));

                // создаем оверлей
                //document.body.setAttribute('style', 'position: fixed; width: 100%; height: 100%; padding-right:' + scrollbarWidth + 'px;');
                overLay.style.display = 'block';
                overLay.style.zIndex = '99999';
                //overLay.style.top = window.pageYOffset+'px';
				windowHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight,
                       document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
                overLay.style.height = windowHeight+'px';

                var form_salesdriveforms_iframe = document.getElementById('salesdriveforms_iframe_' + iframeId[2] + '_' + iframeId[3] + (iframeId.length == 5 ? '_' + iframeId[4] : ''));

				//позиционируем iFrame
				if(form_salesdriveforms_iframe.offsetHeight > (window.innerHeight-70)){
					form_salesdriveforms_iframe.style.top = (window.pageYOffset + 35) + 'px';
				}
				else{
					form_salesdriveforms_iframe.style.top = (window.pageYOffset + (window.innerHeight-form_salesdriveforms_iframe.offsetHeight)/2) + 'px';
				}

                overLay.getElementsByTagName('style')[0].innerHTML = "#salesdriveforms_close_" + iframeId[2] + '_' + iframeId[3] + (iframeId.length == 5 ? '_' + iframeId[4] : '') + ":before {" +
                    "content: '\\2716'; " +
                    "color: #fff; " +
                    "position: absolute; " +
                    "left:  calc(50% + " + (form_salesdriveforms_iframe.offsetWidth/2 + 10) + "px); " +
                    "top: " + (overLay.getElementsByTagName('iframe')[0].offsetTop - 15) + "px; " +
                    "cursor: pointer; " +
                    "font-size: 18px;} " +
                    "#salesdriveforms_close_" + iframeId[2] + '_' + iframeId[3] + (iframeId.length == 5 ? '_' + iframeId[4] : '') + "{" +
                    "font-style: normal;}";

                window.addEventListener("orientationchange", function() {

                    overLay.getElementsByTagName('style')[0].innerHTML = "#salesdriveforms_close_" + iframeId[2] + '_' + iframeId[3] + (iframeId.length == 5 ? '_' + iframeId[4] : '') + ":before {" +
                        "content: '\\2716'; " +
                        "color: #fff; " +
                        "position: absolute; " +
                        "left:  calc(50% + " + (form_salesdriveforms_iframe.offsetWidth/2 + 10) + "px); " +
                        "top: " + (overLay.getElementsByTagName('iframe')[0].offsetTop - 15) + "px; " +
                        "cursor: pointer; " +
                        "font-size: 18px;} " +
                        "#salesdriveforms_close_" + iframeId[2] + '_' + iframeId[3] + (iframeId.length == 5 ? '_' + iframeId[4] : '') + "{" +
                        "font-style: normal;}";

                }, false);

                overLay.onclick = function () {
                    overLay.style.display = 'none';
                    document.body.setAttribute('style', '');
                };

                sendGAInfo('open', params);
            }

            /** Получаем стиль кнопок из формы **/
            function getFormInfo (params) {
                var btn_background = params.btn_background,
                    btn_text_color = params.btn_text_color,
                    iframe_id = params.iframe_id.split('_');

                var btn_id = 'salesdriveforms_action_btn_' + iframe_id[2] + '_' + iframe_id[3] + (iframe_id.length == 5 ? '_' + iframe_id[4] : '');

                if (params.is_modal) {
                    var action_btn = document.getElementById(btn_id);

                    action_btn.style.color = btn_text_color;
                    action_btn.style.backgroundColor = btn_background;
                    action_btn.style.display = 'inline-block';

                }
                if (params.is_modal) {
                    action_btn.onclick = function () {
                        openModalForm(params);
                    }
                }
            }

            /** Меняем размер iframe **/
            function resizeSalesdriveframe(params) {
                var iframe_id = params.iframe_id,
                    iframeId = params.iframe_id.split('_'),
                    iframe_height = params.height,
                    iframe = document.getElementById(iframe_id),
                    overLay = document.getElementById('salesdriveforms_overlay_' + iframeId[2] + '_' + iframeId[3] + (iframeId.length == 5 ? '_' + iframeId[4] : ''));

                iframe_height = Number(iframe_height);

                // центрируем айфрейм (для модального окна)
                if (params.is_modal) {

                    if (window.innerWidth < 650) {
                        iframe.setAttribute('style', 'width: 50%; min-width: 286px; position: absolute; left: 50%; overflow: visible; transform: translateX(-50%); padding: 0; border: none; -moz-transition: none; -webkit-transition: none; transition: none; ');
                    } else {
						iframe.setAttribute('style', 'width: 440px; position: absolute; left: 50%; overflow: visible; transform: translateX(-50%); padding: 0; border: none; -moz-transition: none; -webkit-transition: none; transition: none;');
                    }

                    /*
					if(iframe_height > window.innerHeight) {
                        iframe_height = window.innerHeight - 35;
                    }
					*/

                }
                iframe.style.height = iframe_height + 'px';
                iframe.style.opacity = 1;
                iframe.style.position = 'inherit';

                if (params.is_modal && !params.notCloseModal) {

                    overLay.style.display = 'none';
                    overLay.style.opacity = '1';
                } else if (params.notCloseModal) {
                    resizeFormModal(params);
                    openModalForm(params);
                }
            }

            function resizeFormModal(params) {
                var iframe_id = params.iframe_id,
                    iframeId = params.iframe_id.split('_'),
                    iframe = document.getElementById(iframe_id),
                    overLay = document.getElementById('salesdriveforms_overlay_' + iframeId[2] + '_' + iframeId[3] + (iframeId.length == 5 ? '_' + iframeId[4] : ''));

                var form_salesdriveforms_iframe = document.getElementById('salesdriveforms_iframe_' + iframeId[2] + '_' + iframeId[3] + (iframeId.length == 5 ? '_' + iframeId[4] : ''));

                overLay.getElementsByTagName('style')[0].innerHTML = "#salesdriveforms_close_" + iframeId[2] + '_' + iframeId[3] + (iframeId.length == 5 ? '_' + iframeId[4] : '') + ":before {" +
                    "content: '\\2716'; " +
                    "color: #fff; " +
                    "position: absolute; " +
                    // "left: " + (overLay.getElementsByTagName('iframe')[0].offsetLeft + overLay.getElementsByTagName('iframe')[0].offsetWidth) + "px; " +
                    "left:  calc(50% + " + (form_salesdriveforms_iframe.offsetWidth/2 + 10) + "px); " +
                    "top: " + (overLay.getElementsByTagName('iframe')[0].offsetTop - 15) + "px; " +
                    "cursor: pointer; " +
                    "font-size: 18px;} " +
                    "#salesdriveforms_close_" + iframeId[2] + '_' + iframeId[3] + (iframeId.length == 5 ? '_' + iframeId[4] : '') + "{" +
                    "font-style: normal;}";
            }

            function setScrollTop(params) {
                if (params.is_modal) {
                    var iframeId = params.iframe_id.split('_'),
                        div_overlay = document.getElementById('salesdriveforms_overlay_' + iframeId[2] + '_' + iframeId[3] + (iframeId.length == 5 ? '_' + iframeId[4] : ''));
                    div_overlay.scrollTop = 0;
                } else {
                    window.scrollTo(0, getPos(document.getElementById(params.iframe_id).parentNode).y);
                }
            }

            function getPos(el) {
                // yay readability
                for (var lx=0, ly=0; el != null; lx += el.offsetLeft, ly += el.offsetTop, el = el.offsetParent);
                return {x: lx, y: ly};
            }

            if (typeof window.postMessage === 'function') {
                window.addEventListener('resize', function () {
                    setTimeout(function () {
                        iframe.contentWindow.postMessage('{ "func": "dynamicResize" '
                            + ', "device_width": '
                            + window.innerWidth
                            + ' }', iframe.src);
                    }, 500);
                }, false);
            }
        };

        domready(init_frame());

    }(document, window, salesdrive_form_params[document.currentScript.getAttribute("forms-id") + '_' + window['numberOfForm_' + document.currentScript.getAttribute("forms-id")]]));
}

