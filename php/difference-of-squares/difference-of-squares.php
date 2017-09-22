<?php

function squareOfSums(int $sqr)
{
  return addedSum($sqr, '+') * addedSum($sqr, '+');

}

function addedSum(int $n, $operator)
{
    $sum = 0;
    for ($i = 0 ; $i <= $n ;$i++)
    {
        if($operator == '+')
        {
            $sum = $sum + $i;
        } else if ($operator == '^')
        {
            $sum = pow($i, 2);
        } else {
            throw new Error("Inavlid operator");
        }
    }
    var_dump($sum);
    return $sum;
}
