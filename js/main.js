/* main.js */


var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;


// pc & moblie 공통 
jQuery(document).ready(function ($) {

    /* a 태그 경로 제거 */
    $('a[href="#"]').click(function (e) {
        e.preventDefault();
    })


    // header : fixed 
    var fixed_head = 72;
    $(window).scroll(function () {
        var window = $(this).scrollTop();
        if (fixed_head <= window) {
            $("#main-header").addClass("fixed");
            $("#main-visual .site-link").addClass("fixed");
        } else {
            $("#main-header").removeClass("fixed");
            $("#main-visual .site-link").removeClass("fixed");
        }
    })


    // index : news 글자 수 제한
    $('.news-ct .news-txt p').each(function () {
        if ($(this).text().length > 82)
            $(this).html($(this).text().substr(0, 82) + "...");
    });

    // header select-box
    $("#main-header .sel-container .sel-head").on("click", function () {
        $("#main-header .sel-container .sel-list").toggleClass("show");
        $("#main-header .sel-container .sel-head p").toggleClass("show")
    });

    $("#main-header .sel-container .sel-list li").on("click", function () {
        $("#main-header .sel-container .sel-list li").removeClass("on");

        var option_sel = $(this).index()
        $("#main-header .sel-container .sel-list li:eq(" + option_sel + ")").addClass("on")
    });

    // popup 

    $("#login .cus-btn-area .find-btn").on("click", function () {
        $("#popup").show();
    });

    $("#popup .close-btn").on("click", function () {
        $("#popup").hide();
    });

    $("#popup .head .tab-mu li").on("click", function () {

        var tab_find_info = $(this).index();
        $("#popup .head .tab-mu li").removeClass("on");
        $("#popup .head .tab-mu li:eq(" + tab_find_info + ")").addClass("on");

        $("#popup .common-ct").removeClass("show");
        $("#popup .common-ct:eq(" + tab_find_info + ")").addClass("show");
    });


});

jQuery(document).ready(function ($) {
    // pc 감지
    if (!isMobile) {


        $("#exchange .fixed-mode-btn p").on("click", function () {
            $("#exchange").toggleClass("light")
        });

        $(function () {
            $('#exchange .fixed-mode-btn').click(function () {
                if ($(this).children().html() == '다크 모드') {
                    $(this).children().html('라이트 모드');
                }
                else {
                    $(this).children().html('다크 모드');
                }
            });
        });

        // mypage : my transaction select-box
        $("#mypage .select-area .setting .head").click(function () {

            var sel_period_btn = $(this).index()
            $(this).next().toggleClass("show")
            $(this).children().toggleClass("hide")

        });


        $("#mypage .select-area .period-sel .head").click(function () {

            $("#mypage .select-area .period-sel .head").toggleClass("css")
        });

        $("#mypage .select-area .sch-require .head").click(function () {

            $("#mypage .select-area .sch-require").toggleClass("css")
            $("#mypage .select-area .sch-require .head").toggleClass("css")
        });

        // mypage : join_form
        $("#mypage .join-form .emoji .sel-head").click(function () {

            $("#mypage .join-form .emoji .emoji-list").slideToggle(300);
            $("#mypage .join-form .emoji .sel-head p").toggleClass("hide");
            $("#mypage .join-form .emoji .sel-head").toggleClass("css");

        });

        // mypage : join_form 
        $("#mypage .join-form .emoji .emoji-list button").click(function () {

            var sel_emoji_btn = $(this).index();

            $("#mypage .join-form .emoji .emoji-list button").removeClass("on");
            $("#mypage .join-form .emoji .emoji-list button:eq(" + sel_emoji_btn + ")").addClass("on");

        });




        $(document).ready(function () {
            $('footer .top-icon').bind('click', function () {
                $('html, body').animate({ scrollTop: '0' }, 500);
            });
        });

        $("#support table .q-area").on("click", function () {

            $(this).next().toggleClass("show");
            $(this).children().children().toggleClass("on")
        });

        $("#support .cus-area .tab-menu li").on("click", function () {

            var cus_tab_mu = $(this).index();
            $("#support .cus-area .tab-menu li").removeClass("on")
            $("#support .cus-area .tab-menu li:eq(" + cus_tab_mu + ")").toggleClass("on");

            var cus_sel_table = $(this).index();
            $("#support .cus-area .fee-info").removeClass("show")
            $("#support .cus-area .fee-info:eq(" + cus_sel_table + ")").toggleClass("show");

        });

        // balance : user-bank
        $("#balance .user-bank .tab-menu li").click(function () {

            var sel_common_ct = $(this).index();
            $("#balance .user-bank .tab-menu li").removeClass("on")
            $("#balance .user-bank .tab-menu li:eq(" + sel_common_ct + ")").addClass("on")

            $("#balance .user-bank .cm-ct").removeClass("show")
            $("#balance .user-bank .cm-ct:eq(" + sel_common_ct + ")").addClass("show")

        });
        // user-bank : deposit history 
        $("#balance .dep-history .select-head").click(function () {

            $("#balance .dep-history .select-op").slideToggle("100")

        });

        // balance : trans-ct
        $("#balance .trans-ct .trans-form .tab-menu li").click(function () {

            var sel_trans_ct = $(this).index();
            $("#balance .trans-ct .trans-form .tab-menu li").removeClass("on")
            $("#balance .trans-ct .trans-form .tab-menu li:eq(" + sel_trans_ct + ")").addClass("on")

            $("#balance .trans-ct .trans-form .fr-common").removeClass("show")
            $("#balance .trans-ct .trans-form .fr-common:eq(" + sel_trans_ct + ")").addClass("show")

        });

        // exchange : tr-order-form 

        $("#exchange .tr-order-fr .tab-mu li").click(function () {

            var sel_order_fr = $(this).index();
            $("#exchange .tr-order-fr .tab-mu li").removeClass("on")
            $("#exchange .tr-order-fr .tab-mu li:eq(" + sel_order_fr + ")").addClass("on")

            $("#exchange .tr-order-fr .common-fr").removeClass("show")
            $("#exchange .tr-order-fr .common-fr:eq(" + sel_order_fr + ")").addClass("show")

        });

        // exchange : tr-order-form 

        $("#exchange .tr-order-his .tab-mu li").click(function () {

            var sel_order_his = $(this).index();
            $("#exchange .tr-order-his .tab-mu li").removeClass("on")
            $("#exchange .tr-order-his .tab-mu li:eq(" + sel_order_his + ")").addClass("on")

            $("#exchange .tr-order-his .history-cm").removeClass("show")
            $("#exchange .tr-order-his .history-cm:eq(" + sel_order_his + ")").addClass("show")

        });




    }
});

// moblie 감지
jQuery(document).ready(function ($) {
    if (isMobile) {


        // m-header : fixed 
        if ($('#m-header').length == 1) {

            var head_offset = $('#m-header').offset();
            $(window).scroll(function () {
                if ($(document).scrollTop() > head_offset.top) {
                    $('#m-header').addClass("fixed");
                } else {
                    $('#m-header').removeClass("fixed")
                }
            });

        }

        // m-open-menu slide 
        $(function () {
            $("#m-header .m-menu").on("click", function () {
                $('#m-open-menu').addClass('show');
                $('#m-open-menu .menu-container').animate({ right: "0" }, 500);

                return false;
            });

            $("#m-eh-head .m-menu").on("click", function () {
                $('#m-open-menu').addClass('show');
                $('#m-open-menu .menu-container').animate({ right: "0" }, 500);

                return false;
            });

            $('#m-open-menu .close-btn').on("click", function () {
                $('#m-open-menu .menu-container').animate({ right: "-100%" }, 500);
                $('#m-open-menu').removeClass('show');
            });

        });

        // m-open-menu lang-select tab-select
        $(function () {
            $("#m-open-menu .lang-select ul li").on("click", function () {

                var lang_sel_btn = $(this).index();
                $("#m-open-menu .lang-select ul li").removeClass("on")
                $("#m-open-menu .lang-select ul li:eq(" + lang_sel_btn + ")").addClass("on")
            });
        });

        // 2020/11/09 line 265 m-fixed-noti 추가
        $(function () {
            $("#m-fixed-noti button").on("click", function () {
                $("#m-fixed-noti").hide();

            });
        });

        

        // 2020/11/09 line 273 m-exchange 추가
        $(function () {
            $("#m-exchange .order-right-ct .tab-form li").on("click", function () {

                var sel_order_form = $(this).index();

                $("#m-exchange .order-right-ct .tab-form li").removeClass("on")
                $("#m-exchange .order-right-ct .tab-form li:eq(" + sel_order_form + ")").addClass("on")

                $("#m-exchange .order-right-ct .common-fr").removeClass("show")
                $("#m-exchange .order-right-ct .common-fr:eq(" + sel_order_form + ")").addClass("show")

            });
        });

        // 2020/11/11 line 288 favorit-icon 추가
        $(function () {
            $("#m-eh-head .favorit-icon").on("click", function () {
                $(this).toggleClass("on");

            });
            $("#coin-list-popup .head .tab-wallet p").on("click", function () {
                $(this).toggleClass("on");

            });
            $("#coin-list-popup table .coin-favorit ").on("click", function () {
                $(this).toggleClass("on");

            });

        });

        // 2020/11/09 line 305 coin-list-popup 추가
        $(function () {
            $("#m-eh-head .coin-info p").on("click", function () {
                $("#coin-list-popup").toggleClass("show");

            });
            $("#m-eh-head .coin-info p").on("click", function () {
                $(this).toggleClass("slide");

            });
        });

        // 2020/11/09 line 317 m-exchange : tab-mu 추가
        $("#m-exchange .eh-head .tab-mu li").on("click", function () {

            var sel_trade_tab = $(this).index();

            $("#m-exchange .eh-head .tab-mu li").removeClass("on")
            $("#m-exchange .eh-head .tab-mu li:eq(" + sel_trade_tab + ")").addClass("on")

            $("#m-exchange .tab-ct").removeClass("show")
            $("#m-exchange .tab-ct:eq(" + sel_trade_tab + ")").addClass("show")

        });

        // 2020/11/10 line 330 m-exchange : market-price tab 추가
        $("#m-exchange .market-price .pr-time-tab input").on("click", function () {

            var pr_time_tab = $(this).index();

            $("#m-exchange .market-price .pr-time-tab input").removeClass("on")
            $("#m-exchange .market-price .pr-time-tab input:eq(" + pr_time_tab + ")").addClass("on")

            $("#m-exchange .market-price .market-pr-ct").removeClass("show")
            $("#m-exchange .market-price .market-pr-ct:eq(" + pr_time_tab + ")").addClass("show")

        });

        // 2020/11/10 line 355 m-exchange : screen-setting 추가
        $("#screen-setting .set-ct .mode-select").on("click", function () {

            $(this).toggleClass("on")
            $("#m-eh-head").toggleClass("night")
            $("#m-exchange").toggleClass("night")
            $("#coin-list-popup").toggleClass("night")
        });

        $("#screen-setting input").on("click", function () {
            $("#screen-setting").hide();
        });
        $("#m-eh-head .set-icon").on("click", function () {
            $("#screen-setting").show();
        });

        // 2020/11/10 line 371 m-balance-dt : trans-period 추가
        $("#m-popup.trans-period .head .close-btn").on("click", function () {
            $("#m-popup.trans-period").hide();
        });
        $("#m-balance-dt .trans-list .sel-area .period-btn").on("click", function () {
            $("#m-popup.trans-period").show();
        });

        // 2020/11/11 line 379 m-trans-fr trans-pop-list 추가
        $("#m-trans-fr .tr-coin-sel").on("click", function () {
            $("#trans-pop-list").toggleClass("show");
            $("#m-trans-fr .tr-coin-sel p").toggleClass("show");
        });

        // 2020/11/11 line 385 m_asset_status : trans-period 추가
        $("#m-asset-status .user-function .period-btn").on("click", function () {
            $("#m-popup.trans-period").show();
        });

        // 2020/11/11 line 390 m_asset_status : select-btn 추가
        $("#m-asset-status .user-function .select_01 .head").on("click", function () {

            $("#m-asset-status .user-function .select_01").toggleClass("show");
        });
        $("#m-asset-status .user-function .select_02 .head").on("click", function () {

            $("#m-asset-status .user-function .select_02").toggleClass("show");
        });

        // 2020/11/11 line 400 m_asset_status : status-tab 추가
        $("#m-asset-status .status-tab li").on("click", function () {

            var status_tab_click = $(this).index();

            $("#m-asset-status .status-tab li").removeClass("on")
            $("#m-asset-status .status-tab li:eq(" + status_tab_click + ")").addClass("on")

            $("#m-asset-status .tab-cm-ct").removeClass("show")
            $("#m-asset-status .tab-cm-ct:eq(" + status_tab_click + ")").addClass("show")

        });

        // m-support : fee tab-btn  
        $("#m-support .m-fee .tab-btn input").click(function () {

            var fee_tab_btn = $(this).index();
            $("#m-support .m-fee .tab-btn input").removeClass("on")
            $("#m-support .m-fee .tab-btn input:eq(" + fee_tab_btn + ")").addClass("on")

            $("#m-support .m-fee .fee-table").removeClass("show")
            $("#m-support .m-fee .fee-table:eq(" + fee_tab_btn + ")").addClass("show")

        });

        // m-support : conversion - conv-coin-list
        $(function () {
            $("#m-support .m-conv .conv-coin-list .slide-tit").on("click", function () {
                $("#m-support .m-conv .conv-coin-list ul").slideToggle(200)
            });
        });

        // m-mypage : my trans
        $(function () {
            $("#m-mypage .m-sch-set .period-sel .sel-head").on("click", function () {
                $("#m-mypage .m-sch-set .period-sel .sel-list").toggleClass("show")
            });
            $("#m-mypage .m-sch-set .trade-type .sel-head").on("click", function () {
                $("#m-mypage .m-sch-set .trade-type .sel-list").toggleClass("show")
            });
        });

        // m-mypage : mem_info
        $("#m-mypage .user-info-form .emoji .sel-head").click(function () {

            $("#m-mypage .user-info-form .emoji .emoji-list").toggleClass("show");
            $("#m-mypage .user-info-form .emoji .sel-head p").toggleClass("hide");
            $("#m-mypage .user-info-form .emoji .sel-head").toggleClass("css");

        });

        $(function () {
            $("#m-join .required-inp .sel-inp .gender .option").on("click", function () {

                var tab_option = $(this).index();
                $("#m-join .required-inp .sel-inp .gender .option").removeClass("on")
                $("#m-join .required-inp .sel-inp .gender li:eq(" + tab_option + ")").addClass("on")
            });
            $("#m-join .required-inp .sel-inp .birth .option").on("click", function () {

                var tab_option = $(this).index();
                $("#m-join .required-inp .sel-inp .birth .option").removeClass("on")
                $("#m-join .required-inp .sel-inp .birth li:eq(" + tab_option + ")").addClass("on")
            });
        });
    }
});