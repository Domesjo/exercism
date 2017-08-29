use \DateTime;
<?php

function from($date)
{
  $billion = pow(10, 9);
  return $date->add(new DateInterval("PT{$billion}S"));
}
