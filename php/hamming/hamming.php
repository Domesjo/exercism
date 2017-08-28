<?php

//
// This is only a SKELETON file for the "Hamming" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

function distance($a, $b)
{
  $a = str_split($a); // turns the string to an array with each letter
  $b = str_split($b);
  $count = 0; // the inital count of the difference
  foreach($a as $index => $value) { // loops through the array of elements grabing the value and the index
    if ( $b[$index] != $value) // Adds 1 to the count if the element at the same index as the first array doesn't match
    {
      $count++;
    }
  }
  return $count; // returns the count
}
