(function ($) {
  'use strict';

  var isActive   = 'is_active';
  var isFixed    = 'is_fixed';
  var breakpoint = 767;

  // リサイズ関数
  var resize = function(callback) {
    var fixed_timer = 0;
    $(window).on('resize',function() {
      if (fixed_timer > 0) {
        clearTimeout(fixed_timer);
      }
      fixed_timer = setTimeout(function() {
        // 実行
        callback();
      }, 200);
    });
  };

  // アンカーリンク_スムーススクロール機能
  function smoothScroll(){
    $('a[href^="#"]:not(.u_notscroll),[data-scroll]').on('click', function(event) {
      var speed    = 400;
      var href     = $(this).attr('href');
      var target   = $(href == '#' || href == '' ? 'html' : href);
      var position = target.offset().top;
      $('html,body').animate({scrollTop:position}, speed, 'swing');
      event.preventDefault();
    });
  }

  // フォントサイズ切り替え機能
  var fontCookie    = 'fontsize';            // Cookie名
  var cookieExpires = 7;                     // 有効期間
  var $fontBody     = $('html');             // Class付与対象要素
  var $fontControl  = $('.js_font_control'); // 操作する要素の指定
  var large         = 'is_font_lg';          // フォントサイズ変更時の付与Class
  // ロード時にフォントサイズ切り替え
  function fontLoading(){
    var fontValue = $.cookie(fontCookie);
    if( fontValue === large ) {
      $fontBody.addClass(large);
      $fontControl.removeClass(isActive);
      $('.js_font_control[value="'+ large +'"]').prop('checked', true);
    } else {
      $.removeCookie(fontValue);
    }
  }
  // ボタン押下時にフォントサイズ切り替え
  function fontControl(){
    $fontControl.on('change', function(event) {
      // ボタンの値を取得
      var size = $(this).val();
      // 押したボタンと同じvalueのボタンを有効化
      $('.js_font_control[value="'+ size +'"]').prop('checked', true);
      // 判定してclass付与
      if( size === large ) {
        $fontBody.addClass(large);
      } else {
        $fontBody.removeClass(large);
      }
      // 選択した文字サイズをcookieで記憶
      $.cookie(fontCookie,size,{
        path    : '/',
        expires : cookieExpires
      });
      event.preventDefault();
    });
  }

  // 言語切替機能（ページ遷移）
  function languageControl(){
    var setUrl;
    var $select = $('.js_language_control');
    // 選択肢を切り替えたら、optionに設定されたURLへ遷移
    $select.on('change', function() {
      setUrl = $(this).val();
      window.location.href = setUrl;
    });
    // [停止]option要素が存在したらコピーしてスマホ時UIにoptionに書き写す
    // optionがなかったら言語切替機能を非表示
    var controlPc = $('#page_language');
    // var controlSp = $('#page_language_sp');
    var check = $('#page_language option').length;
    if ( !check >= 1 ) {
      controlPc.parent().parent().hide();
      // controlSp.parent().parent().hide();
      // var eleCopy = controlPc.html();
      // controlSp.html(eleCopy);
      // console.log('init!');
    }
  }


  function LanguageReplaceUrl(){
    $('.js_language_replace').on('change', function() {
      var dir   = '/mn/';
      var array = '/' + $(this).val() + '/';
      var url   = location.href;
      if( array ){
        var setUrl = url.replace(dir,array);
        window.location.href = setUrl;
      }
    });
  }

  // スマホ時メニュー開閉
  function spMenu(){
    // 変数定義
    var btn       = '.js_drower_btn';
    var nav       = '.js_drower_nav';
    var $body     = $('body');
    var $window_w = $(window).width();
    var isOpen    = 'is-open';
    // 変数_開
    var openFunc  = function(){
      $body.addClass(isFixed);
      $(nav).slideDown( function() {
        $(this).addClass(isOpen);
      });
      $(btn).addClass(isActive);
    };
    // 変数_閉
    var closeFunc  = function(){
      $body.removeClass(isFixed);
      $(nav).slideUp('fast', function() {
        $(this).removeClass(isOpen);
      });
      $(btn).removeClass(isActive);
    };
    // 変数_リサイズ
    var resizeFunc  = function(){
      $body.removeClass(isFixed);
      $(nav).removeClass(isOpen).removeAttr('style');
      $(btn).removeClass(isActive);
    };
    // 機能
    if ($window_w <= breakpoint) {
      // ブレイクポイント以下の時、ナビを非表示
      $(nav).hide();
    }
    // メニューボタン押下時
    $(btn).on('click',function(event) {
      event.preventDefault();
      // ブレイクポイント以下の時、開閉
      $window_w = $(window).width();
      if ($window_w <= breakpoint) {
        var check = $(this).hasClass(isActive);
        if (!check) {
          openFunc();
        } else {
          closeFunc();
        }
      }
    });
    // リサイズ時
    resize(function(){
      $window_w = $(window).width();
      if ($window_w > breakpoint) {
        resizeFunc();
      }
    });
  }// function

  // グロナビ_トグル開閉
  function navglobal(){
    var navBtn     = '.js_globalnav';
    var navWrapper = '.js_globalnav_wrapper';
    $(navWrapper).hide();
    $(navBtn).on('click', function(event) {
      event.preventDefault();
      if( !$(this).hasClass(isActive) ) {
        var rel = $(this).data('rel');
        // wrapperの開閉
        $( navWrapper + '[data-rel="'+ rel +'"]' ).slideUp();
        $(this).next(navWrapper).slideToggle();
        // ボタンの挙動
        $( navBtn + '[data-rel="'+ rel +'"]' ).removeClass(isActive);
        $(this).addClass(isActive);
      } else {
        // 表示中のボタンを押したら閉じる
        $(this).next(navWrapper).slideToggle();
        $(this).removeClass(isActive);
      }
    });
  }

  // トップへ戻るボタン制御
  function pageTop(){
    // 変数定義
    var $nav        = $('.js_pagetop');
    var $bottom     = $('.js_pagetop_endpoint');
    var flag        = false;
    var flag2       = false;
    var height      = $(window).height();
    var setPosition = height / 3;
    var bottomPoint = $bottom.offset().top;
    var endPoint    = bottomPoint - height + 35;
    // スクロール時の処理
    $(window).on('scroll load', function() {
      var $scroll = $(window).scrollTop();
      // 表示の処理
      if( $scroll > setPosition && !flag ){
        // ページ上部から一定数下へスクロールすると表示
        $nav.addClass(isActive);
        flag = true;
      } else if( $scroll < setPosition && flag ) {
        // ページ上部から一定数上へスクロールすると非表示
        $nav.removeClass(isActive);
        flag = false;
      }
      // 固定化の処理
      if( $scroll > endPoint && !flag2 ){
        // 終点までスクロールしたらfixed解除
        $nav.addClass(isFixed);
        flag2 = true;
      } else if( $scroll < endPoint && flag2 ) {
        // 終点より上へスクロールしたらfixed付与
        $nav.removeClass(isFixed);
        flag2 = false;
      }
    });
    // slickがinit時終点を再計算
    $('body').on('init',function(){
      setTimeout(function() {
        bottomPoint = $bottom.offset().top;
        endPoint    = bottomPoint - height + 35;
      },200);
    });
  }

  function iconControl(){
    // 変数
    var parent      = 'body';
    var lang        = 'mn';
    var pdfLink     = 'a[href*=".pdf"]:not(.u_icon):not(.u_noicon)';
    var blankLink   = 'a[href^="http"]:not(.u_icon):not(.u_noicon),a[href^="//"]:not(.u_icon):not(.u_noicon),[data-blank]';
    var xlsxLink    = 'a[href*=".xlsx"]:not(.u_noicon)';
    var docxLink    = 'a[href*=".docx"]:not(.u_noicon)';
    var pdfIcon     = '<img src="/' + lang + '/assets/images/icon/pdf.svg" width="16" height="16" alt="PDF файлыг нээх" class="u_icon u_icon_add_pdf">';
    var blankIcon   = '<img src="/' + lang + '/assets/images/icon/blank.svg" width="14" height="14" alt="Шинэ цонхонд нээх" class="u_icon u_icon_add_blank">';
    var xlsxIcon    = '<img src="/' + lang + '/assets/images/icon/xlsx.png" width="14" height="14" alt="Excel файлыг татаж авах" class="u_icon u_icon_add_blank">';
    var docxIcon    = '<img src="/' + lang + '/assets/images/icon/docx.png" width="14" height="14" alt="Word файлыг татаж авах" class="u_icon u_icon_add_blank">';
    // アイコン画像付与関数
    function addIcon(area,href,iconImage) {
      var $area = $(area);
      var $iconLink = $($area.find(href).not(':has(img)'));
      (function() {
        if ($iconLink.length > 0) {
          _init();
        }
      })();
      function _init() {
        $iconLink.append(iconImage);
      }
    }
    // pdfファイルリンクへpdfアイコン付与
    addIcon(parent, pdfLink, pdfIcon);
    // 外部サイトのリンクへ別窓アイコン付与
    addIcon(parent, blankLink, blankIcon);
    // xlsxファイルのリンクへxlsxアイコン付与
    addIcon(parent, xlsxLink, xlsxIcon);
    // docxファイルのリンクへdocxアイコン付与
    addIcon(parent, docxLink, docxIcon);

    // pdfファイルリンクへtarget="_blank"を付与
    $(parent).find('a[href*=".pdf"]').attr('target','_blank');
    // xlsxファイルとdocxファイルのリンクへtarget="_blank"とdownload属性を付与
    $(parent).find('a[href*=".xlsx"],a[href*=".docx"]').attr({
      'target'  : '_blank',
      'download': ''
    });
    // 外部サイトのリンクへ target="_blank"を付与、rel="noopener noreferrer"を付与
    $(parent).find('a[href^="http"],a[href^="//"]').attr({
      'target': '_blank',
      'rel'   : 'noopener noreferrer'
    });
  }

  // // cookie同意のモーダル画面表示
  // function cookieModal() {
  //   // 変数定義
  //   var $body  = $('body');
  //   var isOpen = 'is_modal';
  //   // ポリシーページのURL
  //   var policyUrl = '/mn/policy/index.html';
  //   // 表示させるモーダルウインドウの定義
  //   var modal = '<div class="m_modal" id="js_cookie_modal">' +
  //     '<div class="m_modal_layer" id="js_cookie_modal_layer">' +
  //       '<div class="m_modal_container">' +
  //         '<div class="m_modal_body">' +
  //           '<p class="m_modal_text">Тус вэб хуудас нь хэрэглэгчдэд илүү сайн үйлчилгээ үзүүлэх зорилгоор “Cookie” ашигладаг.<br>Хэрэв та “Cookie”-г ашиглахыг зөвшөөрвөл “Зөвшөөрөх” гэдгийг дарна уу. “Cookie”-гийн талаарх мэдээллийг үзэхээр бол ”Дэлгэрэнгүйг харах” гэдгийг дарна уу.</p>' +
  //           '<div class="m_modal_btngroup">' +
  //             '<button class="m_btn" id="js_cookie_modal_agree">Зөвшөөрөх</button>' +
  //             '<a class="m_btn u_noicon" id="js_cookie_modal_move" href="' + policyUrl + '">Дэлгэрэнгүйг харах</a>' +
  //           '</div>' +
  //         '</div>' +
  //       '</div>' +
  //     '</div>' +
  //   '</div>';
  //   // cookieの定義
  //   var cookieName  = 'jasso_cookie_agree';
  //   var cookieCheck =  $.cookie(cookieName);
  //   // cookie未発行の場合、cookieを無効化している場合、モーダルを表示する
  //   // PDF印刷操作はモーダル表示対象外です。（印刷にモーダルダイアログが表示されるため）
  //   if ( !cookieCheck && !isCreatePdf() ) {
  //     // ページ読み込み時ブラウザのスクロールを無効化
  //     //$body.addClass(isOpen);
  //     // モーダルダイアログを出力
  //     $body.append(modal);
  //     $('#js_cookie_modal').fadeIn('fast');
  //   };
  //   // 許可するボタンを押したら、モーダルを閉じ、cookieを発行
  //   $('#js_cookie_modal_agree').on('click',function(){
  //     // モーダルを閉じる
  //     $(this).closest('#js_cookie_modal_layer').fadeOut(function() {
  //       $('#js_cookie_modal').hide();
  //       $body.removeClass(isOpen);
  //     });
  //     // cookieを発行する
  //     $.cookie(cookieName, true, {
  //       path: '/'
  //     });
  //   });
  //   // 許可しないボタンを押したら、セッションを発行してページ遷移
  //   // $('#js_cookie_modal_move').on('click',function(event){
  //   //   // href値に設定されたパスへ遷移
  //   //   var $url = $(this).attr('href');
  //   //   window.location.href = $url;
  //   //   // cookieを発行する
  //   //   $.cookie(cookieName, true, {
  //   //     path: '/'
  //   //   });
  //   //   event.preventDefault();
  //   // });
  // };

  // ##221214
  // 印刷用PDFボタンを押下したかどうかの判定
  function isCreatePdf()
  {
    var ret = false;
    var queryStr = window.location.search.slice(1);  // 文頭?を除外
    var queries = {};
      
    // クエリ文字列を & で分割して処理
    queryStr.split('&').forEach(function(queryStr) {
      // = で分割してkey,valueをオブジェクトに格納
      var queryArr = queryStr.split('=');
      queries[queryArr[0]] = queryArr[1];
    });
    
    if (queries['is_create_pdf'] == 1)
    {
        ret = true;
    }
//  // ファイル名
//  var filename = window.location.href.split('/').pop().replace(/\.php?.*/, '.php');
//  if (filename == 'downloadpdf.php')
//  {
//    ret = true;
//  }
    return ret;
  }

  // 実行
  $(function(){
    smoothScroll();
    fontControl();
    languageControl();
    LanguageReplaceUrl();
    navglobal();
    spMenu();
    pageTop();
    cookieModal();
  });

  // ページ読み込み後に実行
  $(window).on('load',function(){
    fontLoading();
    iconControl();
  });

})(jQuery);

