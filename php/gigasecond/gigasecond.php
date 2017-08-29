use \DateTime;
<?php

function from($date)
{
  $billion = pow(10, 9);
  fputs(STDOUT, date("Y-m-d H:i:s", $billion) . "\n----------\n"); // logs to the terminal
  return $date;
}
