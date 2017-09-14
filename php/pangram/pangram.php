<?php

function isPangram($phrase)
{
  $alpa = range('a', 'z'); // gets the length of alpabeth
  $phrase = str_split($phrase);

  foreach($phrase as $letter)
  {// array_Search is like indexOf
      if(($index = array_search(strtolower($letter), $alpa)) !== false) // if there is an index
      {
        unset($alpa[$index]);
      }
  }


  return sizeof($alpa) == 0 ? true: false;
}
