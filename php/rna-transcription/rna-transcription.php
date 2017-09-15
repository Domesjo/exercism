<?php
// * `G` -> `C`
// * `C` -> `G`
// * `T` -> `A`
// * `A` -> `U`
function toRna($script, $rna = array("G" => "C", "C" => "G", "T" => "A", "A" => "U"))
{
    if(sizeof($rna) > 0)
    {
      $firstKey = array_keys($rna)[0];
      str_replace($firstKey, $rna[$firstKey], $script);
      return toRna($script, array_shift($rna));
    } else
    {
      return $script;
    }

}
