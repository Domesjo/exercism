<?php

function raindrops($number)
{
    $ans = "";
    $checks = array(3 => "Pling", 5 => "Plang", 7 => "Plong");

    foreach($checks as $k => $v)
    {
      $ans = $ans . logic($number, $k, $v);
    }

    return $ans ? $ans : (string) $number;
}


function logic(int $int, int $setInt,string $str)
{
  return $int % $setInt == 0 ? $str : "";
}
