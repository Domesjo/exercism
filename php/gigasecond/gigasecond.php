<?php

function from($date)
{
  $billion = pow(10, 9);
  return date($date, strtotime("+$billion sec"));
}
