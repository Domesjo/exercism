<?php

function from($date)
{
  $billion = pow(10, 9);
  fputs(STDOUT, strtotime("$billion sec") . "\n"); // logs to the terminal
  return $date->add($billion);
  return date($date, strtotime("+$billion sec"));
}
