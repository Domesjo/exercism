<?php

function raindrops($number)
{
  $ans = "";
  $number % 3 == 0 ? $ans = $ans . "Pling" : $ans;
  $number % 5 == 0 ? $ans = $ans . "Plang" : $ans;
  $number % 7 == 0 ? $ans = $ans . "Plong" : $ans;

  return $ans ? $ans : (string) $number;
}
