<?php

// APIキー
$api = "AIzaSyDwxpicDSa3GBcLJmgE1yxdtjYpIJFogcA";

$spreadsheetsUrl = "https://docs.google.com/spreadsheets/d/11BCnspCt2Mut3nhc4WMY6CYTd0zF9C3eCzsk1AEpKLM/edit#gid=0";

// スプレットシートIDの取得
$w = preg_quote("/spreadsheets¥/d¥/([a-zA-Z0-9-_]+)", "/");
preg_match($w, $spreadsheetsUrl, $spreadsheetId);

var_dump($spreadsheetId);
// 送信先
$url = "https://sheets.googleapis.com/v4/spreadsheets/".$spreadsheetId."/values/A1:E6?key=".$api;

try{
    // レスポンスの取得
    $response = file_get_contents($url);

    $a=json_decode($response);
    foreach($a->values as $value){
        foreach($value as $e){
           echo "'".mb_convert_encoding($e, "SJIS")."',";
      }
      echo "\n";
    }
} catch (Exception $e) {
    echo "取得に失敗しました。";
}
?>