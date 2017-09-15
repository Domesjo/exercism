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

      $script = str_replace($firstKey, strtolower($rna[$firstKey]), $script);
      array_shift($rna);
      return toRna($script, $rna);
    } else
    {
      return strtoupper($script);
    }

}
