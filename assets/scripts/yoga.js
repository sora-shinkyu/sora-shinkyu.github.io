$(".openbtn1").click(function () {
  //ボタンがクリックされたら
  $(this).toggleClass("active"); //ボタン自身に activeクラスを付与し
  $("#g-nav").toggleClass("panelactive"); //ナビゲーションにpanelactiveクラスを付与
  $(".circle-bg").toggleClass("circleactive"); //丸背景にcircleactiveクラスを付与
});

$("#g-nav a").click(function () {
  //ナビゲーションのリンクがクリックされたら
  $(".openbtn1").removeClass("active"); //ボタンの activeクラスを除去し
  $("#g-nav").removeClass("panelactive"); //ナビゲーションのpanelactiveクラスを除去
  $(".circle-bg").removeClass("circleactive"); //丸背景のcircleactiveクラスを除去
});

$(".link").mouseover(function () {
  $(this).toggleClass("activelink");
});

$(".link").mouseout(function () {
  $(this).removeClass("activelink");
});

var activateNext = function (btn) {
  var $btn = $(btn),
    $currentDesc = $btn.closest(".description"),
    nextIndex = ($(".description").index($currentDesc) + 1) % 2,
    $nextDesc = $(".description").eq(nextIndex);

  $currentDesc.addClass("inactive-desc");
  $currentDesc.removeClass("active-desc");

  $nextDesc.removeClass("inactive-desc");
  $nextDesc.addClass("active-desc");
};

var activatePrev = function (btn) {
  var $btn = $(btn),
    $currentDesc = $btn.closest(".description"),
    nextIndex = ($(".description").index($currentDesc) - 1) % 2,
    $nextDesc = $(".description").eq(nextIndex);

  $currentDesc.addClass("inactive-desc");
  $currentDesc.removeClass("active-desc");

  $nextDesc.removeClass("inactive-desc");
  $nextDesc.addClass("active-desc");
};

$(".next-btn").on("click", function () {
  activateNext(this);
});

$(".prev-btn").on("click", function () {
  activatePrev(this);
});

$(".yoga-course").on("change", function (e) {  
  var $form;
  var $unform;
  if ($("option:selected", this).text() == "通常レッスン 90分：￥1,500") {
    $form = document.getElementsByClassName("normal-form");
    $unform = document.getElementsByClassName("private-form");
  }else{
    $form = document.getElementsByClassName("private-form");
    $unform = document.getElementsByClassName("normal-form");
  }
  $form[0].classList.add("active-form");
  $form[0].classList.remove("inactive-form");

  $unform[0].classList.remove("active-form");
  $unform[0].classList.add("inactive-form");
});
