use \DateTime;
<?php

function from($date)
{
  $billion = pow(10, 9);
  fputs(STDOUT, date_timestamp_get($date));
  fputs(STDOUT, gmdate('H:i', $billion) . "\n----------\n"); // logs to the terminal
  return $date;
}
