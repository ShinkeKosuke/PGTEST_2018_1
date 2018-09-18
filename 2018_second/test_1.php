<?php

// APIキー
$api = "";

$spreadsheetsUrl = "https://docs.google.com/spreadsheets/d/11BCnspCt2Mut3nhc4WMY6CYTd0zF9C3eCzsk1AEpKLM/edit#gid=0";

// スプレットシートIDの取得
$spreadsheetId = str_replace('/edit#gid=0','',str_replace('https://docs.google.com/spreadsheets/d/', '', $spreadsheetsUrl));

// 送信先
$url = "https://sheets.googleapis.com/v4/spreadsheets/".$spreadsheetId."/values/A1:E6?key=".$api;

try{
    // レスポンスの取得
    $response = file_get_contents($url);
    if($response){
        $response_decode =json_decode($response);
        foreach($response_decode->values as $values){
            foreach($values as $value){
               echo "'".mb_convert_encoding($value, "SJIS")."',";
            }
            echo "\n";
        }
    } else {
        throw new Exception('ディレクトリの作成に失敗しました。');
    }
} catch (Exception $e) {
    echo $e->getMessage(), "\n";
}
?>