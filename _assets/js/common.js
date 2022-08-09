/**
 * @modules : node_modulesフォルダまでの絶対パスのエイリアス
 * webpack.config.jsにて定義している
 */

import $ from "@modules/jquery";

("use strict");

//------------------------------------
// スムーススクロール
//------------------------------------
// #で始まるアンカーをクリックした場合にスムーススクロール
$('a[href^="#"]').on('click', function () {
  const speed = 500;
  // アンカーの値取得
  const href = $(this).attr('href');
  // 移動先を取得
  const target = $(href == '#' || href == '' ? 'html' : href);
  // 移動先を数値で取得
  const position = target.offset().top;

  // スムーススクロール
  $('body,html').animate({
    scrollTop: position
  }, speed, 'swing');
  return false;
});

//------------------------------------
// Q＆A
//------------------------------------
$(function () {
  $('.js-slide-trigger').click(function () {
    $(this).children('.js-slide-target').slideToggle(300);
    $(this).children('.faq-list__question').toggleClass('faq-list__question--active');
  });
});