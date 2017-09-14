<?php

function isPangram($phrase)
{
  $alpa = range('a', 'z'); // gets the length of alpabeth
  $phrase = str_split($phrase);

  foreach($phrase as $letter)
  {
    var_dump($letter);
  }

  return sizeof($alpa) == 0 ? true: false;
}
