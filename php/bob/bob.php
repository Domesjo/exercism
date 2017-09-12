<?php

class Bob {

  public function respondTo($phrase)
  {
    if(preg_match_all("/[A-Z]+$/", $phrase) || $phrase === strtoupper($phrase))
    {
      return "Whoa, chill out!";
    } else if(preg_match("/.+\?$/", $phrase))
    {
      return "Sure.";
    }

    return "Whatever.";
  }
};
