<?php
$crawle = new Crawle;
try{
    $crawle->crawle();
    $crawle->display();
} catch (Exception $e) {
    echo $e->getMessage(), "\n";
}


class Crawle{
    public $url = "https://no1s.biz/";
    public $domain = "no1s.biz";
    public $urlList = array();
    
    public function display(){
        foreach($this->urlList as $href => $title){
            echo "$href $title \r\n" ;
        }
    }
    
    public function crawle(){
        $html = file_get_contents($this->url);
        $cnt = preg_match_all("|<a href=\"https://no1s.biz/(.*?)\".*?>(.*?)</a>|mis",$html,$res);
        
        for($i = 0; $i < $cnt; $i++){
            $href = "https://".$this->domain."/".$res[1][$i];
            $title_sjis = strip_tags(mb_convert_encoding($res[2][$i],"sjis","utf-8"));
            $title_html = html_entity_decode($title_sjis);
            $title = preg_replace("/\xC2\xA0/", "", $title_html);
            if(!array_key_exists($href, $this->urlList) || empty($this->urlList)){
                $this->urlList[$href] = $title;
            } else {
                continue;
            }
            $this->url = $href;
            self::crawle($href);
        }
    }
}

?>