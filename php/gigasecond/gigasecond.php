use \DateTime;
<?php

function from($date)
{
  $billion = pow(10, 9);

  $ans = clone $date;
  return $ans->add(new DateInterval("PT{$billion}S"));
}
