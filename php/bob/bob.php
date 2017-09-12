<?php

class Bob {

  public function respondTo($phrase)
  {
    if(preg_match_all("/[A-Z]+$/", $phrase) || ($phrase === strtoupper($phrase) && preg_match("/[A-Za-z]/", $phrase)))
    {
      return "Whoa, chill out!";
    } else if(preg_match("/.+\?$/", $phrase) || preg_match("/.+\?\s+$/", $phrase))
    {
      return "Sure.";
    } else if(preg_match("/^\s+$/", $phrase) || !$phrase)
    {
      return "Fine. Be that way!";
    }

    return "Whatever.";
  }
};
