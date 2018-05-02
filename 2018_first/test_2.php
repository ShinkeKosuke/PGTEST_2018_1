<?php
$croling = array();
$url = "https://no1s.biz/";
$html = file_get_contents($url);
$cnt = preg_match_all("|<a href=\"https://no1s.biz/(.*?)\".*?>(.*?)</a>|mis",$html,$res);
for($i = 0; $i < $cnt; $i++){
    $href = $url.$res[1][$i];
    $title_sjis = strip_tags(mb_convert_encoding($res[2][$i],"sjis","utf-8"));
    $title_html = html_entity_decode($title_sjis);
    $title = preg_replace("/\xC2\xA0/", "", $title_html);
    if(!array_key_exists($href, $croling)){
        $croling[$href] = $title;
        echo "$href $title \r\n" ;
    }
}

?>