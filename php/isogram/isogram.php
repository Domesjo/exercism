<?php

function isIsogram($word, $alpa = null )
{
    $word = strtolower($word);
    $alpa = $alpa ? $alpa : $alpa = range('a','z');
    $firstLetter = substr($word, 0, 1);

    if (in_array($firstLetter, $alpa))
    {
        $index = array_search($firstLetter, $alpa); // gets the index of
        unset($alpa[$index]);

        return isIsogram((substr($word, 1)), $alpa);
    }
    else if (preg_match("/[^a-zé]/", $firstLetter))
    {
        return isIsogram((substr($word, 1)), $alpa);
    }

    return $word ? false : true;
}
