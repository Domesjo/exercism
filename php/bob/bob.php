<?php

class Bob {

  public function respondTo($phrase)
  {
    if(preg_match("/.+!$/", $phrase) || preg_match("/[A-Z]+$/", $phrase))
    {
      return "Whoa, chill out!";
    } else if(preg_match("/.+\?$/", $phrase))
    {
      return "Sure.";
    }
    return "Whatever.";
  }
};
